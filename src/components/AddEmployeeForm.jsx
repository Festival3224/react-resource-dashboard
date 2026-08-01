import { useState } from 'react'

const emptyFormData = {
  name: '',
  role: '',
  location: '',
  availability: '',
}

function AddEmployeeForm({
  employee,
  onSaveEmployee,
  onCancel,
}) {
  const [formData, setFormData] = useState(() => {
    if (employee) {
        return {
            name: employee.name,
            role: employee.role,
            location: employee.location,
            availability: String(employee.availability),
        }
    }
    return emptyFormData
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (
      !formData.name.trim() ||
      !formData.role.trim() ||
      !formData.location.trim() ||
      formData.availability === ''
    ) {
      return
    }

    const employeeData = {
      id: employee?.id ?? crypto.randomUUID(),
      name: formData.name.trim(),
      role: formData.role.trim(),
      location: formData.location.trim(),
      availability: Number(formData.availability),
    }

    onSaveEmployee(employeeData)
  }

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Employee name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />

      <input
        type="number"
        name="availability"
        placeholder="Availability %"
        min="0"
        max="100"
        value={formData.availability}
        onChange={handleChange}
      />

      <div className="form-actions">
        <button type="submit" className="primary-button">
          {employee ? 'Save changes' : 'Save employee'}
        </button>

        <button
          type="button"
          className="secondary-button"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default AddEmployeeForm