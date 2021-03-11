import { NavLink } from "react-router-dom";

// Types
import { ReactNode } from "../../types/children";

interface IProps {
  children: ReactNode;
  cssClass: string;
  path: string;
  selected?: boolean;
}

export const RLink = ({ cssClass, path, children }: IProps) => {
  return (
    <li>
      <NavLink activeClassName={cssClass} to={path}>
        {children}
      </NavLink>
    </li>
  );
};
