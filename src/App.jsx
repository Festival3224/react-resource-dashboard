import { useState } from 'react'
import EmployeesTable from './components/EmployeesTable'
import { initialEmployees } from './data/employees'
import ProjectsTable from './components/ProjectsTable'
import { initialProjects } from './data/projects'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('employees')
  const [employees] = useState(initialEmployees)
  const [projects] = useState(initialProjects)

  const isEmployees = activeView === 'employees'

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h1>Outsource Dashboard</h1>

        <nav>
           <button
             className={`nav-button ${isEmployees ? 'active' : ''}`}
             onClick={() => setActiveView('employees')}
           >
            Employees
           </button>

          <button
            className={`nav-button ${!isEmployees ? 'active' : ''}`}
            onClick={() => setActiveView('projects')}
          >
            Projects
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <div>
            <p className="eyebrow">Resource management</p>
            <h2>Employees</h2>
          </div>

          <button className="primary-button">
            {isEmployees ? 'Add employee' : 'Add project'}
          </button>

        </header>

        <section className="content-card">
          {isEmployees ? (
            <EmployeesTable employees={employees} />
          ) : (
            <ProjectsTable projects={projects} />
          )}
        </section>

      </main>
    </div>
  )
}

export default App