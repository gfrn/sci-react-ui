export interface BasicButtonProps {
  label: string;
}

const BasicButton = (props: BasicButtonProps) => {
  return <button>{props.label}</button>;
};

export {BasicButton};
