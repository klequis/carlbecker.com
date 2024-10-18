import classes from './para-wrap.module.css'
import { Component, JSXElement } from 'solid-js'

type Props = {
  children: JSXElement
}

export const ParaWrap: Component<Props> = (props) => {
  return (
    <div class={classes.paraWrap}>
      {props.children}
    </div>
  )
}