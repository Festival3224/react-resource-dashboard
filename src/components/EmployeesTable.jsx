function EmployeesTable({
     employees,
     onEditEmployee,
     onDeleteEmployee
   }) {
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
                      <div className="table-actions">
                          <button
                              type="button"
                              className="edit-button"
                              onClick={() => onEditEmployee(employee)}
                          >
                              Edit
                          </button>

                          <button
                              type="button"
                              className="delete-button"
                              onClick={() => onDeleteEmployee(employee.id)}
                          >
                              Delete
                          </button>
                      </div>
                  </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeesTable