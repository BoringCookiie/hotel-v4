import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeLogin.css'; // Make sure to add your styling

const EmployeeLogin = ({ staffList }) => {
  const [matricule, setMatricule] = useState('');
  const navigate = useNavigate();

  const handleEmployeeLogin = (e) => {
    e.preventDefault();

    // Check if the matricule exists in the staff list
    const employee = staffList.find(staff => staff.matricule === matricule);
    
    if (employee) {
      navigate('/dashboard-employee'); // Navigate to the employee dashboard
    } else {
      alert('Matricule incorrect');
    }
  };

  return (
    <div className="employee-login-page">
      <form className="employee-login-form" onSubmit={handleEmployeeLogin}>
        <h2>Connexion Employé</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Entrez votre matricule"
          value={matricule}
          onChange={(e) => setMatricule(e.target.value)}
        />
        <button type="submit" className="login-button">Se connecter</button>
      </form>
    </div>
  );
};

export default EmployeeLogin;

