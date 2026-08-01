function EmployeesTable({ employees, onDeleteEmployee }) {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Location</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
              <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.role}</td>
                  <td>{employee.location}</td>
                  <td>{employee.availability}%</td>
                  <td>
                      <button
                          type="button"
                          className="delete-button"
                          onClick={() => onDeleteEmployee(employee.id)}
                      >
                          Delete
                      </button>
                  </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeesTable