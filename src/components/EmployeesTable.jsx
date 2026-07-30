function EmployeesTable({ employees }) {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Location</th>
            <th>Availability</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.location}</td>
              <td>{employee.availability}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeesTable