"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import type { RuleQuery } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from "next/image";

interface RuleClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: RuleQuery;
}

export default function RuleClientPage(props: RuleClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const content = data.rule.body;
  return (
    <>
      <h1 data-tina-field={tinaField(data.rule, "title")}>{data.rule.title}</h1>
      {data.rule.image && (
        <Image src={data.rule.image} alt="thumbnail image for the rule" width={300} height={200} />
      )}
      <div data-tina-field={tinaField(data.rule, "body")}>
        <TinaMarkdown content={content} />
      </div>
    </>
  );
}
