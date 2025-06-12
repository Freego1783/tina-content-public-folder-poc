import RuleClientPage from "./client-page";
import client from "../../../tina/__generated__/client";

export default async function RulePage({
  params,
}: {
  params: { filename: string[] };
}) {

    console.log("params", params);

  const data = await client.queries.rule({
    relativePath: `${params.filename}/rule.md`,
  });

  return (
    <RuleClientPage {...data}></RuleClientPage>
  );
}