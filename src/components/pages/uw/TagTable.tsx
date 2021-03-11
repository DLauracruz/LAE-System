export const TagTable = () => {
  return (
    <div className="tag scroll">
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
  );
};
