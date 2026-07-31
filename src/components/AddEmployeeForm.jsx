import { useState } from 'react'

function AddEmployeeForm({ onAddEmployee }) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    location: '',
    availability: '',
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

    const newEmployee = {
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      role: formData.role.trim(),
      location: formData.location.trim(),
      availability: Number(formData.availability),
    }

    onAddEmployee(newEmployee)

    setFormData({
      name: '',
      role: '',
      location: '',
      availability: '',
    })
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

      <button type="submit" className="primary-button">
        Save employee
      </button>
    </form>
  )
}

export default AddEmployeeForm