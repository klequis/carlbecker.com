import { Show } from "solid-js";
import type { Component, JSXElement } from "solid-js";

type SectionProps = {
  backgroundColor: "white" | "blue";
  children: JSXElement;
};

export const Section: Component<SectionProps> = (props) => {
  return <section>{props.children}</section>;
};
