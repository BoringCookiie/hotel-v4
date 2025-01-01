import React, { useState, useEffect } from 'react';

// Dummy data for employee tasks (this can be replaced with real data or state management)
const employeeTasks = {
  '12345': ['Clean the lobby', 'Prepare meeting room'], // Tasks for employee with matricule '12345'
  '67890': ['Fix elevator', 'Check air conditioning'], // Tasks for employee with matricule '67890'
};

const DashboardEmployee = ({ matricule }) => {
  // Assuming 'matricule' is passed as a prop or fetched from context/session
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetching tasks for the employee based on their matricule
    if (employeeTasks[matricule]) {
      setTasks(employeeTasks[matricule]);
    } else {
      setTasks([]); // No tasks found for the employee
    }
  }, [matricule]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={styles.sidebar}>
        <h2 style={{ color: '#fff' }}>Dashboard Employé</h2>
        <ul style={styles.sidebarList}>
          <li style={styles.sidebarItem}>Mon Profil</li>
          <li style={styles.sidebarItem}>Mes Tâches</li>
        </ul>
      </div>

      <div style={styles.mainContent}>
        <h1>Bienvenue sur le Dashboard Employé</h1>
        <p>Voici vos informations et vos tâches assignées.</p>
        
        <h2>Vos Tâches</h2>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        ) : (
          <p>Aucune tâche assignée pour ce moment.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '20px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '20px',
  },
  sidebarItem: {
    margin: '15px 0',
    cursor: 'pointer',
    fontSize: '18px',
  },
  mainContent: {
    marginLeft: '260px',
    padding: '20px',
    width: 'calc(100% - 260px)',
  },
};

export default DashboardEmployee;
