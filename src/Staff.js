import React, { useState } from 'react';
import './Staff.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Staff = () => {
  const [housekeepers, setHousekeepers] = useState([
    { id: 1, name: 'Fatima', status: 'Available', matricule: 'Fm10' },
    { id: 2, name: 'Zahra', status: 'Unavailable', matricule: 'Fm20' },
  ]);

  const [technicians, setTechnicians] = useState([
    { id: 1, name: 'Said', status: 'Available', matricule: 'Tech11' },
    { id: 2, name: 'Mohamed', status: 'On Break', matricule: 'Tech22' },
  ]);

  const [formData, setFormData] = useState({
    matricule: '',
    name: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStaff = {
      id: Date.now(),
      name: formData.name,
      status: 'Available',
      matricule: formData.matricule,
    };

    if (formData.role === 'Femme de menage') {
      setHousekeepers([...housekeepers, newStaff]);
    } else if (formData.role === 'Technicien') {
      setTechnicians([...technicians, newStaff]);
    }

    setFormData({ matricule: '', name: '', role: '' });
  };

  const handleDelete = (id, role) => {
    if (role === 'Femme de menage') {
      setHousekeepers(housekeepers.filter(staff => staff.id !== id));
    } else if (role === 'Technicien') {
      setTechnicians(technicians.filter(staff => staff.id !== id));
    }
  };

  return (
    <div className="staff-container">
      <h1>Liste du Personnel</h1>

      <div className="staff-section">
        <div className="staff-column">
          <h2>Femmes de Ménage</h2>
          <ul>
            {housekeepers.map((staff) => (
              <li key={staff.id}>
                {staff.name} - {staff.status} - Matricule: {staff.matricule}
                <button
                  className="btn btn-danger btn-sm ml-3"
                  onClick={() => handleDelete(staff.id, 'Femme de menage')}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="staff-column">
          <h2>Techniciens</h2>
          <ul>
            {technicians.map((staff) => (
              <li key={staff.id}>
                {staff.name} - {staff.status} - Matricule: {staff.matricule}
                <button
                  className="btn btn-danger btn-sm ml-3"
                  onClick={() => handleDelete(staff.id, 'Technicien')}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="form-container">
        <h3>Ajouter un Employé</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="matricule">Matricule :</label>
            <input
              type="text"
              className="form-control"
              id="matricule"
              name="matricule"
              value={formData.matricule}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Rôle :</label>
            <select
              className="form-control"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionnez un rôle</option>
              <option value="Femme de menage">Femme de Ménage</option>
              <option value="Technicien">Technicien</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Staff;
