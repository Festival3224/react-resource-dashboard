import { useState } from 'react'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('employees')
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
          <p>
            {isEmployees
              ? 'The employee table will be added here.'
              : 'The project table will be added here.'}
          </p>
        </section>
        
      </main>
    </div>
  )
}

export default App