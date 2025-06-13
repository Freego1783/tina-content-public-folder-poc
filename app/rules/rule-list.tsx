import Link from "next/link";

export default function RuleList(props) {
  return (
    <>
      <h1>Rules</h1>
      <div>
        {props.data.ruleConnection.edges.map((rule) => (
          <div key={rule.node.id}>
            <Link href={`/rules/${rule.node._sys.relativePath.split("/")[0]}`}>
              {rule.node._sys.relativePath.split("/")[0]}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
