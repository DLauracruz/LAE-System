export const RemindersTable = () => {
  return (
    <div className="reminders scroll">
      <h1>Reminders</h1>
      <table>
        <thead>
          <tr>
            <th>Section 1</th>
            <th>Section 2</th>
            <th>Section 3</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(20)].map(() => (
            <tr>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
