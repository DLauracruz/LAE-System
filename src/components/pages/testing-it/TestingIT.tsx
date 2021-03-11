import React from "react";

export const TestingIT = () => {
  return (
    <div className="testing-it">
      <div className="testing-it__customer">
        <div className="title">
          <h3>General Info</h3>
          <span>Cust ID: 2599 - Customer 1</span>
          <button>
            <i className="far fa-edit"></i> Edit Info Customer
          </button>
        </div>

        <div className="info">
          <div className="info__item">
            <h5>Physical Address:</h5>
            <span>Las penitas, Atizapan de Zaragoza</span>
          </div>
          <div className="info__item">
            <h5>Phone:</h5>
            <span>+525620192588</span>
          </div>
          <div className="info__item">
            <h5>License Number:</h5>
            <span>23423</span>
          </div>
          <div className="info__item">
            <h5>Mailing Adress:</h5>
            <span>Las penitas, Atizapan de Zaragoza</span>
          </div>
          <div className="info__item">
            <h5>Marital Status:</h5>
            <span>Single</span>
          </div>
          <div className="info__item">
            <h5>Date of Birth:</h5>
            <span>05/12/98</span>
          </div>
          <div className="info__item">
            <h5>Email:</h5>
            <span>laaura060@outlook.com</span>
          </div>
          <div className="info__item">
            <h5>Gender:</h5>
            <span>Famele</span>
          </div>
        </div>
      </div>

      <div className="testing-it__policies">
        <span>Auto (Alistar) #6</span>
        <span>Auto (Alistar) #6</span>
        <span>Auto (Alistar) #6</span>
        <span>Auto (Alistar) #6</span>
        <span>Auto (Alistar) #6</span>
        <span>Auto (Alistar) #6</span>
        <span>Auto (Alistar) #6</span>
        <span>Auto (Alistar) #6</span>
      </div>

      <div className="testing-it__policy-detail">
        <div className="title">
          <h3>ALLISTAR</h3>
          <span>Alistar Vista</span>
          <span>test 789-00</span>
          <button>
            <i className="far fa-edit"></i> Edit Info Policy
          </button>
        </div>

        <nav>
          <ul>
            <li>GPI</li>
            <li>Vehicles</li>
            <li>Drivers</li>
            <li>Receipts</li>
            <li>UW</li>
            <li>Attachment</li>
            <li>Logs</li>
          </ul>
        </nav>

        <div className="gpi">
          <div className="gpi__item">
            <h5>Quote No:</h5>
            <span>123423425</span>
          </div>
          <div className="gpi__item">
            <h5>Source:</h5>
            <span>2132344234534</span>
          </div>
          <div className="gpi__item">
            <h5>Term:</h5>
            <span>uoohds</span>
          </div>
          <div className="gpi__item">
            <h5>Office:</h5>
            <span>JA - HEAVEN</span>
          </div>
          <div className="gpi__item">
            <h5>Product:</h5>
            <span>Auto</span>
          </div>
          <div className="gpi__item">
            <h5>BF:</h5>
            <span>$0.00</span>
          </div>
          <div className="gpi__item">
            <h5>Effective Date:</h5>
            <span>05/12/20</span>
          </div>
          <div className="gpi__item">
            <h5>Expiration Date:</h5>
            <span>05/12/98</span>
          </div>
          <div className="gpi__item">
            <h5>Creation Date:</h5>
            <span>05/12/98</span>
          </div>
          <div className="gpi__item">
            <h5>USR:</h5>
            <span>CCadena</span>
          </div>
          <div className="gpi__item">
            <h5>Billing Type:</h5>
            <span>Pay</span>
          </div>
          <div className="gpi__item">
            <h5>Payment Plan:</h5>
            <span>Biannual</span>
          </div>
        </div>
      </div>
    </div>
  );
};
