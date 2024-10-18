import { Show } from "solid-js";
import type { Component, JSXElement } from "solid-js";
import { Text } from "./text";
import classes from './section.module.css'

type BgColor = "white" | "blue";

type flexDirColumn = "column"
type flexDirRow = "row";
type flexDirNone = "none";
type FlexDirection = flexDirRow | flexDirColumn | flexDirNone;

function makeStyles(flexDir?: FlexDirection, bgColor?: BgColor, gap?: string) {
  console.log('flexDir', flexDir)
  console.log('bgColor', bgColor)
  console.log('gap', gap)
  const a = {
    background: bgColor, // backgroundColor = "white" ? sectionWhite : sectionBlue,
    boxShadow:
      bgColor === "white"
        ? "inset 0 1px 0 0 rgba(0, 0, 0, 0.15)"
        : "inset 0 1px 0 0 rgba(255, 255, 255, 0.075)",
    
  };
  const b = (flexDir ? { 
    display: `flex ${flexDir}`,
  } : {})
  const c = (gap ? {gap: gap} : {})

  const d = {...a, ...b, ...c}
  console.log('d', d)
  return d
}

type SectionProps = {
  backgroundColor: "white" | "blue";
  title: string;
  children: JSXElement;
  flexDirection: FlexDirection;
  gap: string;
};



export const Section: Component<SectionProps> = (props) => {
  
  const z = {
    "background": "white",
    "boxShadow": "inset 0 1px 0 0 rgba(0, 0, 0, 0.15)",
    "display": "flex",
    // "flexDirection": "column",
    "gap": "1em"
  }  
  console.log('flexDir', props.flexDirection)
  console.log('bgColor', props.backgroundColor)
  console.log('gap', props.gap)
  // makeStyles(props.flexDirection,props.backgroundColor, props.gap )
  return (
    <Show when={props.title !== "none"}>
      <section class={classes.sectionWhiteCol}>
        <Text variant="h2" textAlign="center">
          {props.title}
        </Text>
        {props.children}
      </section>
    </Show>
  );
};
