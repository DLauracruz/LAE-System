export const CeoDashboard = () => {
  return (
    <div className="ceo-dashboard">
      <div>
        <h1>Agents Production</h1>

        <div className="agents">
          <input type="date" id="start" />
          <input type="date" id="end" />
          <select>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
          <select>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
        </div>

        <div className="ceo-dashboard__table scroll">
          <table>
            <thead>
              <tr>
                <th>Recent</th>
                <th>Opened</th>
                <th>Customers</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(15)].map((_, idx) => (
                <tr key={idx}>
                  <td>723645</td>
                  <td>Jorge W. Joss</td>
                  <td>
                    <i className="far fa-eye"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ceo-dashboard__btns">
          <button>
            <i className="far fa-file-excel"></i> Export to Excel
          </button>
        </div>
      </div>

      <div>
        <h1>Office's Production</h1>

        <div className="agents">
          <input type="date" id="start" />
          <input type="date" id="end" />
          <select>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
          <select>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
        </div>

        <div className="ceo-dashboard__table scroll">
          <table>
            <thead>
              <tr>
                <th>Recent</th>
                <th>Opened</th>
                <th>Customers</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(15)].map((_, idx) => (
                <tr key={idx}>
                  <td>723645</td>
                  <td>Jorge W. Joss</td>
                  <td>
                    <i className="far fa-eye"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ceo-dashboard__btns">
          <button>
            <i className="far fa-file-excel"></i> Export to Excel
          </button>
        </div>
      </div>
    </div>
  );
};
