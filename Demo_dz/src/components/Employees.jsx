// Employees.jsx
import './Employees.css';
import React, { useState } from 'react';
import { postEmployee, getEmployee, putEmployee, deleteEmployee } from '../api.js';

const Employees = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [employee, setEmployee] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');

    const handlePostEmployee = async () => {
        if (!firstName || !lastName || !department) {
            alert('Please fill in all fields.');
            return;
        }
        try {
            const newEmployee = {
                firstName,
                lastName,
                department
            };
            const data = await postEmployee(newEmployee);
            alert('Employee created: ' + JSON.stringify(data));
        } catch (error) {
            console.error('Failed to create employee:', error);
            alert('Failed to create employee');
        }
    };

    const handleGetEmployee = async () => {
        if (!employeeId) {
            alert('Please enter a valid employee ID.');
            return;
        }
        try {
            const data = await getEmployee(employeeId);
            setEmployee(data);
            alert('Employee fetched: ' + JSON.stringify(data));
        } catch (error) {
            console.error('Failed to fetch employee:', error);
            alert('Failed to fetch employee');
        }
    };

    const handlePutEmployee = async () => {
        if (!employeeId || !firstName || !lastName || !department) {
            alert('Please fill in all fields.');
            return;
        }
        try {
            const updatedEmployee = {
                firstName,
                lastName,
                department
            };
            const data = await putEmployee(employeeId, updatedEmployee);
            alert('Employee updated: ' + JSON.stringify(data));
        } catch (error) {
            console.error('Failed to update employee:', error);
            alert('Failed to update employee');
        }
    };

    const handleDeleteEmployee = async () => {
        if (!employeeId) {
            alert('Please enter a valid employee ID.');
            return;
        }
        try {
            await deleteEmployee(employeeId);
            alert('Employee deleted');
            setEmployee(null);
        } catch (error) {
            console.error('Failed to delete employee:', error);
            alert('Failed to delete employee');
        }
    };

    return (
        <div className="book-container">
            <div className="book-section">
                <h3>Create Employee</h3>
                <input
                    className="book-input" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                />
                <input
                    className="book-input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                />
                <input
                    className="book-input"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Department"
                />
                <button className="book-button" onClick={handlePostEmployee}>Create Employee</button>
            </div>
            <div className="fetch-book-section">
                <h3>Fetch Employee</h3>
                <input
                className="book-input"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    placeholder="Employee ID"
                />
                <button className="fetch-book-button" onClick={handleGetEmployee}>Get Employee</button>
                {employee && (
                    <div className="book-info">
                        <p>First Name: {employee.firstName}</p>
                        <p>Last Name: {employee.lastName}</p>
                        <p>Department: {employee.department}</p>
                    </div>
                )}
            </div>
            <div className="book-section">
                <h3>Update Employee</h3>
                <input
                className="book-input"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    placeholder="Employee ID"
                />
                <input
                className="book-input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                />
                <input
                className="book-input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                />
                <input
                className="book-input"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Department"
                />
                <button className="update-book-button" onClick={handlePutEmployee}>Update Employee</button>
            </div>
            <div className="delete-book-section">
                <h3>Delete Employee</h3>
                <input
                className="book-input"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    placeholder="Employee ID"
                />
                <button className="delete-book-button" onClick={handleDeleteEmployee}>Delete Employee</button>
            </div>
        </div>
    );
};

export default Employees;
