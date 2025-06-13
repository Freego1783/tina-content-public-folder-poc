import { client } from "../../tina/__generated__/client";
import RuleList from "./rule-list";

export default async function Page() {
  const rules = await client.queries.ruleConnection();

  return <RuleList {...rules} />;
}
