interface Props {
  condition: boolean;
  children: any;
  elseChildren?: any;
}

export const RenderIf = ({ condition, children, elseChildren }: Props) => {
  return condition
    ? children
    : elseChildren
      ? elseChildren
      : <></>
}
