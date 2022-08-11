import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import AcademicCouncilChanges from "../pages/accreditation/AcademicCouncilChanges";
import Accreditation from "../pages/accreditation/Accreditation";
import ChangesToAccreditation from "../pages/accreditation/ChangesToAccreditation";
import FacultyCouncilChanges from "../pages/accreditation/FacultyCouncilChanges";
import CathedraChanges from "../pages/accreditation/СathedraChanges";
import Documents from "../pages/documents/Documents";
import Employees from "../pages/employees/Employees";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/login/Registration";
import Students from "../pages/students.js/Students";
import NotFoundPage from "../shared/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { URLS } from "./urls";

function ProjectRoutes() {
  return (
    <Routes>
      <Route path={URLS.login} element={<PublicRoute component={Login} />} />
      <Route path={URLS.registration} element={<PublicRoute component={Registration} />} />
      <Route path={URLS.home} element={<PrivateRoute component={Home} />} />
      <Route path={URLS.employees} element={<PrivateRoute component={Employees} />} />
      <Route path={URLS.documents} element={<PrivateRoute component={Documents} />} />
      <Route path={URLS.students} element={<PrivateRoute component={Students} />} />
      <Route path={URLS.accreditation} element={<PrivateRoute component={Accreditation} />} />
      <Route path={URLS.accreditationCathedraChanges} element={<PrivateRoute component={CathedraChanges} />} />
      <Route path={URLS.accreditationAcademicCouncilChanges} element={<PrivateRoute component={AcademicCouncilChanges} />} />
      <Route path={URLS.accreditationFacultyCouncilChanges} element={<PrivateRoute component={FacultyCouncilChanges} />} />
      <Route path="*" element={<PrivateRoute component={NotFoundPage} />} /> 
    </Routes>
  );
}

export default ProjectRoutes;
