import RuleClientPage from "./client-page";
import client from "../../../tina/__generated__/client";


export async function generateStaticParams() {
  const rules = await client.queries.ruleConnection();
  const paths =
    rules.data?.ruleConnection.edges?.map((page) => ({
        filename: [page?.node?._sys.relativePath.split("/")[0]],
      })) || [];
  return paths;
}

export default async function RulePage({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.rule({
    relativePath: `${params.filename}/rule.md`,
  });

  return <RuleClientPage {...data}></RuleClientPage>;
}
