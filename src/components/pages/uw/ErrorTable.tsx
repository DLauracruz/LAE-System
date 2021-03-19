export const ErrorTable = () => {
  return (
    <div className="error">
      <div className="error__table scroll">
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

      <div className="error__btns">
        <button>
          <i className="far fa-save"></i> Save Changes
        </button>
        <button>
          <i className="fas fa-ban"></i> Cancel Changes
        </button>
      </div>
    </div>
  );
};
