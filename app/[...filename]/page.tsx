import ClientPage from "./client-page";
import client from "../../tina/__generated__/client";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths =
    pages.data?.pageConnection?.edges
      ?.map((edge) => edge?.node?._sys.breadcrumbs)
      ?.filter(
        (slug) =>
          slug && slug[0] !== ".well-known" && !slug.some((s) => s && s.includes(","))
      )
      ?.map((filename) => ({ filename })) || [];

  return paths;
}

export default async function Page({
  params,
}: {
  params: { filename: string[] };
}) {
  const slug = params.filename;

  //fix for well-known chrome devtools;
  if (
    !slug ||
    slug[0].startsWith(".well-known") ||
    slug.some((segment) => segment.includes(","))
  ) {
    return notFound();
  } else {
    const data = await client.queries.page({
      relativePath: `${slug.join("/")}.mdx`,
    });

    return <ClientPage {...data} />;
  }
}
