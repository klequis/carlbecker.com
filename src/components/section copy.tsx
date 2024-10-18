import { Show } from "solid-js";
import type { Component, JSXElement } from "solid-js";
import { Text } from "./text";
import classes from './section.module.css'

type BgColor = "white" | "blue" | undefined;

type flexDirColumn = "column"
type flexDirRow = "row";
type flexDirNone = "none";
type FlexDirection = flexDirRow | flexDirColumn | flexDirNone | undefined;

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
    display: `flex`,
    "flex-direction":  flexDir
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
  // console.log('flexDir', props.flexDirection)
  // console.log('bgColor', props.backgroundColor)
  // console.log('gap', props.gap)
  // 
  return (
    <Show when={props.title !== "none"}>
      <section style={makeStyles(props.flexDirection,props.backgroundColor, props.gap )}>
        <Text variant="h2" textAlign="center">
          {props.title}
        </Text>
        {props.children}
      </section>
    </Show>
  );
};
