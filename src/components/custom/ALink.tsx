import { ReactNode } from "../../types/children";

interface IProps {
  children: ReactNode;
  selected?: boolean;
}

export const ALink = ({ children, selected }: IProps) => {
  return (
    <li className={`${selected && "navbar__selected"}`}>
      <a>{children}</a>
    </li>
  );
};
