import { Show } from "solid-js";
import type { Component, JSXElement } from "solid-js";
import { Text } from "./text";

type SectionProps = {
  backgroundColor: "white" | "blue";
  children: JSXElement;
  flexDirection: "row" | "column";
  gap?: string;
};

export const Section: Component<SectionProps> = (props) => {
  return <section>{props.children}</section>;
};
