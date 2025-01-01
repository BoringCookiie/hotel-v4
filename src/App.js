import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import DashboardAdmin from './DashboardAdmin';
import EmployeeLogin from './EmployeeLogin';  // Importation de la page de connexion employé
import Reservations from './Reservations';  // Importation de la page Reservations
import Rooms from './Rooms'; // Importation de la page Chambres
import Staff from './Staff'; // Importation de la page Staff
import AddEmployer from "./ajouteremployer";
import DashboardEmployee from './DashboardEmployee';
import CRUDPage from "./affichagechambre";
import EmployeeTasks from './EmployeeTasks';  // Importation de la page Employee Tasks
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // Définition des employés (staff) avec leurs matricules
  const housekeepers = [
    { id: 1, name: 'Fatima', status: 'Available', matricule: 'Fm10' },
    { id: 2, name: 'Zahra', status: 'Unavailable', matricule: 'Fm20' },
  ];
  const technicians = [
    { id: 1, name: 'Said', status: 'Available', matricule: 'Tech11' },
    { id: 2, name: 'Mohamed', status: 'On Break', matricule: 'Tech22' },
  ];

  // Combine les deux listes de personnel
  const staffList = [...housekeepers, ...technicians];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />  {/* Page de connexion Admin */}
        <Route path="/dashboard" element={<DashboardAdmin />}>  {/* Dashboard Admin */}
          <Route path="reservations" element={<Reservations />} />  {/* Page des Réservations */}
          <Route path="rooms" element={<Rooms />} />  {/* Page des Chambres */}
          <Route path="staff" element={<Staff />} />  {/* Page des Staff */} 
          <Route path="ajouteremployer" element={<AddEmployer />} />
          <Route path="afficherchambre" element={<CRUDPage />} /> {/* Page des Staff */}
          <Route path="employeetasks" element={<EmployeeTasks />} />  {/* New Route for Employee Tasks */}
        </Route>
        {/* Passer la liste du personnel à EmployeeLogin */}
        <Route path="/employee" element={<EmployeeLogin staffList={staffList} />} />  {/* Page de connexion Employé */}
      </Routes>
    </Router>
  );
}

export default App;
