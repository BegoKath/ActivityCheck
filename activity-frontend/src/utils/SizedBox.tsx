interface Props {
  size: number;
}

export const SizedBox = ({ size }: Props) => {
  return (
    <div style={{ width: size, height: size }} />
  )
}
