import React from 'react';
import '../App.css';

const EmployeeList = ({ employees }) => {
  return (
    <div className="listContainer">
    {employees.map((employee) => (
      <div key={employee.id} className="employeeContainer">
        <div className="avatarContainer">
          <div className="avatarOutline">
            <img src={employee.avatar} alt="avatar" className="avatarImage" />
          </div>
          <div className="avatarId">{employee.id}</div>
        </div>
        <p className="employeeName">{employee.first_name}</p>
      </div>
    ))}
  </div>
  );
};

export default EmployeeList;
