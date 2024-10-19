import { Component, JSXElement } from 'solid-js'

type Props = {
  children: JSXElement
}

export const ParaWrap: Component<Props> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}