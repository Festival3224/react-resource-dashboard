function ProjectsTable({ projects }) {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Project</th>
            <th>Client</th>
            <th>Status</th>
            <th>Budget</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.client}</td>
              <td>{project.status}</td>
              <td>€{project.budget.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectsTable