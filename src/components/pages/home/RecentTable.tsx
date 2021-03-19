export const RecentTable = () => {
  return (
    <div className="recent scroll">
      <h1>Recent</h1>
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
  );
};
