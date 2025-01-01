import React, { useState } from 'react';
import './EmployeeTasks.css';

const EmployeeTasks = () => {
  const [tasks, setTasks] = useState({
    femmeDeMenage: [],
    technicien: [],
  });

  const [taskInput, setTaskInput] = useState({
    role: '',
    task: '',
  });

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTaskInput({ ...taskInput, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      task: taskInput.task,
    };

    if (taskInput.role === 'Femme de menage') {
      setTasks({
        ...tasks,
        femmeDeMenage: [...tasks.femmeDeMenage, newTask],
      });
    } else if (taskInput.role === 'Technicien') {
      setTasks({
        ...tasks,
        technicien: [...tasks.technicien, newTask],
      });
    }

    setTaskInput({ role: '', task: '' });
  };

  const handleDeleteTask = (role, taskId) => {
    if (role === 'Femme de menage') {
      setTasks({
        ...tasks,
        femmeDeMenage: tasks.femmeDeMenage.filter((task) => task.id !== taskId),
      });
    } else if (role === 'Technicien') {
      setTasks({
        ...tasks,
        technicien: tasks.technicien.filter((task) => task.id !== taskId),
      });
    }
  };

  return (
    <div className="employee-tasks-container">
      <h1>Gestion des Tâches des Employés</h1>

      {/* Task Input Form */}
      <div className="task-form">
        <input
          type="text"
          name="task"
          placeholder="Ajouter une tâche..."
          value={taskInput.task}
          onChange={handleTaskChange}
        />
        <select
          name="role"
          value={taskInput.role}
          onChange={handleTaskChange}
        >
          <option value="">Sélectionnez un rôle</option>
          <option value="Femme de menage">Femme de Ménage</option>
          <option value="Technicien">Technicien</option>
        </select>
        <button onClick={handleAddTask}>Ajouter Tâche</button>
      </div>

      {/* Femme de Ménage Tasks */}
      <div className="task-section">
        <h2>Femme de Ménage</h2>
        <ul>
          {tasks.femmeDeMenage.map((task) => (
            <li key={task.id}>
              {task.task}
              <button onClick={() => handleDeleteTask('Femme de menage', task.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Technicien Tasks */}
      <div className="task-section">
        <h2>Technicien</h2>
        <ul>
          {tasks.technicien.map((task) => (
            <li key={task.id}>
              {task.task}
              <button onClick={() => handleDeleteTask('Technicien', task.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeTasks;
