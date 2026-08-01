import { useEffect, useState } from 'react'
import EmployeesTable from './components/EmployeesTable'
import { initialEmployees } from './data/employees'
import ProjectsTable from './components/ProjectsTable'
import { initialProjects } from './data/projects'
import AddEmployeeForm from './components/AddEmployeeForm'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('employees')
  const [isEmployeeFormOpen, setIsEmployeeFormOpen] = useState(false)
  const [editingEmployee, setEditingEmployee] = useState(null)

  //const [employees] = useState(initialEmployees)
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees')

    return savedEmployees
      ? JSON.parse(savedEmployees)
      : initialEmployees
  })

  const [projects] = useState(initialProjects)

  const isEmployees = activeView === 'employees'

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])

  function handleSaveEmployee(employeeData) {
    if (editingEmployee) {
      setEmployees((currentEmployees) =>
        currentEmployees.map((employee) =>
          employee.id === employeeData.id
            ? employeeData
            : employee
        )
      )
    } else {
      setEmployees((currentEmployees) => [
        ...currentEmployees,
        employeeData,
      ])
    }

    setEditingEmployee(null)
    setIsEmployeeFormOpen(false)
  }

  function handleDeleteEmployee(employeeId) {
    setEmployees((currentEmployees) =>
      currentEmployees.filter((employee) => employee.id !== employeeId)
    )
  }

  function handleEditEmployee(employee) {
    setEditingEmployee(employee)
    setIsEmployeeFormOpen(true)
  }

  function handleCloseEmployeeForm() {
    setEditingEmployee(null)
    setIsEmployeeFormOpen(false)
  }

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
            onClick={() => {
              setActiveView('projects')
              setIsEmployeeFormOpen(false)
            }}
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

          <button
            className="primary-button"
            onClick={() => {
              if (!isEmployees) {
                return
              }

              if (isEmployeeFormOpen) {
                handleCloseEmployeeForm()
              } else {
                setEditingEmployee(null)
                setIsEmployeeFormOpen(true)
              }
            }}
          >
            {isEmployees
              ? isEmployeeFormOpen
                ? 'Close form'
                : 'Add employee'
              : 'Add project'}
          </button>

        </header>

        <section className="content-card">
          {isEmployees ? (
            <>
              {isEmployeeFormOpen && (
                <AddEmployeeForm
                  key={editingEmployee?.id ?? 'new'}
                  employee={editingEmployee}
                  onSaveEmployee={handleSaveEmployee}
                  onCancel={handleCloseEmployeeForm}
                />
              )}

              <EmployeesTable
                employees={employees}
                onEditEmployee={handleEditEmployee}
                onDeleteEmployee={handleDeleteEmployee}
              />
            </>
          ) : (
            <ProjectsTable projects={projects} />
          )}
        </section>

      </main>
    </div>
  )
}

export default App