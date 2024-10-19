import { Switch, Match } from "solid-js";
import type { Component, JSXElement } from "solid-js";

// type StylesType = {
//   textAlign: "left" | "center";
//   marginBottom: number;
// };

type Variant = "h1" | "h2" | "h3" | "p";

function makeStyles(textAlign: string, variant: Variant, marginBottom?: number) {
  // align
  // margin-bottom
  const s = {
    "text-align": "justified", // textAlign || "center",
    "margin-bottom": marginBottom || "1em",
    "font-size": variant => { 
      const v = {h1: '2em'}
    },
    "line-height": 1.65,
    "font-weight": 300
  };
  return Object.entries(s)
    .map((s) => {
      return `${s[0]}:${s[1]}`;
    })
    .join(";");
}

// I'M WRAPPING THE ABOUT TEXT IN <Text></Text>

type TextProps = {
  variant: Variant;
  children: JSXElement;
};

// h1, h2, p, subtitle1, subtitle2

export const Text: Component<TextProps> = (props) => {
  // const styles = makeStyles(props.textAlign, props.marginBottom);
  // const cls = clsx({
  //   "align: center": true
  // })
  console.log('variant', props.variant)
  return (
    <Switch>
      <Match when={(props.variant === "h1")}>
        <h1>{props.children}</h1>
      </Match>
      <Match when={(props.variant === "h2")}>
        <h2>{props.children}</h2>
      </Match>
      <Match when={(props.variant === "h3")}>
        <h3>{props.children}</h3>
      </Match>
      <Match when={(props.variant === "p")}>
        <p>{props.children}</p>
      </Match>
      
    </Switch>
  );
};

// export function Text Component<TextProps>(props) {
//   const styles = makeStyles(props);
//   return (
//     <Switch fallback={"Loading"}>
//       <Match when={(props.variant = "h1")}>
//         <h1 style={`${styles}`}>{props.children}</h1>
//       </Match>
//       <Match when={(props.variant = "p")}>
//         <p style={`${styles}`}>{props.children}</p>
//       </Match>
//     </Switch>
//   );
// }
