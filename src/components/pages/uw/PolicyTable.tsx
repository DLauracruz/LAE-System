export const PolicyTable = () => {
  return (
    <div className="policy">
      <div className="policy__btns">
        <button>
          <i className="far fa-file-excel"></i> Export to Excel
        </button>
        <button>Filter Table</button>
      </div>

      <div className="policy__table scroll">
        <table>
          <thead>
            <tr>
              <th>Recent</th>
              <th>Opened</th>
              <th>Customers</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(15)].map(() => (
              <tr>
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
    </div>
  );
};
