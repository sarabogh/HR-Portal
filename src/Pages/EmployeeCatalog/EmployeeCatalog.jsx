import React, { useState, useEffect } from "react";
import './EmployeeCatalog.css';

function EmployeeCatalog() {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleAddOrEdit = () => {
    if (!name || !department || !email) return;

    const newEmployee = { name, department, email };

    if (editIndex >= 0) {
      const updated = [...employees];
      updated[editIndex] = newEmployee;
      setEmployees(updated);
      setEditIndex(-1);
    } else {
      setEmployees([...employees, newEmployee]);
    }

    setName("");
    setDepartment("");
    setEmail("");
  };

  const handleEdit = (index) => {
    const emp = employees[index];
    setName(emp.name);
    setDepartment(emp.department);
    setEmail(emp.email);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = employees.filter((_, i) => i !== index);
    setEmployees(updated);
  };

  return (
    <div className="catalog-container">
      <h2>Employee Catalog</h2>
      <div className="form">
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleAddOrEdit}>{editIndex >= 0 ? "Update" : "Add"}</button>
      </div>

      <div className="employee-cards">
        {employees.map((emp, index) => (
          <div className="card" key={index}>
            <h3>{emp.name}</h3>
            <p><strong>Department:</strong> {emp.department}</p>
            <p><strong>Email:</strong> {emp.email}</p>
            <div className="card-buttons">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeCatalog;