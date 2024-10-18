import { Show } from "solid-js";
import type { Component, JSXElement } from "solid-js";
import { Text } from "./text";

type SectionProps = {
  backgroundColor: "white" | "blue";
  title: string;
  children: JSXElement;
  flexDirection: "row" | "column";
  gap: string;
};



export const Section: Component<SectionProps> = (props) => {
  const a = { "background-color": props.backgroundColor || "white"}
  const b = props.flexDirection ? { display: "flex", "flex-direction": props.flexDirection} : {}

  return (
    <Show when={props.title !== "none"}>
      <section style={{...a, ...b}}>
        <Text variant="h2" textAlign="center">
          {props.title}
        </Text>
        {props.children}
      </section>
    </Show>
  );
};
