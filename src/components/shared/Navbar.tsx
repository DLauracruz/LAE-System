import { ALink } from "../custom/ALink";
import { RLink } from "../custom/RLink";

export const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "UW", path: "/uw" },
    { name: "UW Dashboard", path: "/uw-dashboard" },
    { name: "CEO Dashboard", path: "/ceo-dashboard" },
    { name: "MD", path: "/manager-dashboard" },
    { name: "Testing IT", path: "/testing-it" },
  ];

  const navIcons = [
    "fab fa-fort-awesome",
    "fas fa-search",
    "fas fa-chart-pie",
    "fas fa-cogs",
    "far fa-user",
  ];

  return (
    <div className="navbar">
      <ul>
        {navItems.map(({ name, path }) => (
          <RLink cssClass="navbar__selected" path={path}>
            {name}
          </RLink>
        ))}
      </ul>

      <ul>
        {navIcons.map((icon) => (
          <ALink>
            <i className={icon}></i>
          </ALink>
        ))}
      </ul>
    </div>
  );
};
