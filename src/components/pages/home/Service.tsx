import { ALink } from "../../custom/ALink";
import promoImg from "../../../assets/home/promo_blue.png";

export const Service = () => {
  return (
    <div className="service">
      <ul>
        <ALink>
          <i className="fab fa-fort-awesome"></i>
        </ALink>
        <ALink>
          <i className="fas fa-search"></i>
        </ALink>
        <ALink>
          <i className="fas fa-chart-pie"></i>
        </ALink>
      </ul>

      <ul className="scroll">
        <ALink>
          <i className="fas fa-chart-pie"></i>
          <span>Personal Auto</span>
        </ALink>
        <ALink>
          <i className="fas fa-motorcycle"></i>
          <span>Motorcycle</span>
        </ALink>
        <ALink>
          <i className="fas fa-home"></i>
          <span>Home</span>
        </ALink>
        <ALink>
          <i className="fas fa-truck"></i>
          <span>Truck</span>
        </ALink>
        <ALink>
          <i className="fas fa-ship"></i>
          <span>Boat</span>
        </ALink>
        <ALink>
          <i className="fas fa-id-badge"></i>
          <span>Registration</span>
        </ALink>
      </ul>

      <ul className="scroll">
        <ALink>
          <i className="fas fa-clock"></i>
          <span>Clock</span>
          <span>Clock-in-out</span>
        </ALink>
        <ALink>
          <i className="fas fa-sign-in-alt"></i>
          <span>Login</span>
          <span>Login Payroll Link</span>
        </ALink>
        <ALink>
          <i className="fas fa-envelope-open-text"></i>
          <span>Email</span>
          <span>Check your Inbox</span>
        </ALink>
        <ALink>
          <i className="fas fa-clipboard-list"></i>
          <span>Turbo Rater (ITC)</span>
          <span>Create a Quote</span>
        </ALink>
        <ALink>
          <i className="fas fa-signature"></i>
          <span>Docusign</span>
          <span>Electronic Signature</span>
        </ALink>
        <ALink>
          <i className="fas fa-sms"></i>
          <span>Sonar</span>
          <span>Texting System</span>
        </ALink>
        <ALink>
          <i className="fas fa-columns"></i>
          <span>Main Page</span>
          <span>Main Page</span>
        </ALink>
      </ul>

      <img src={promoImg} />
    </div>
  );
};
