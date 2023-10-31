import "./style.css";

interface CardProps {
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  const { children } = props;

  return <div className="border-div">{children}</div>;
};
