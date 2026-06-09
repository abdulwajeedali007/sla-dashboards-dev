import { Routes, Route, Navigate } from 'react-router';

import Layout from './Layout/Index';

import ClusterLaunchCalenderPage from './Pages/ClusterLaunchCalenderPage/Index';
import ClusterOverviewPage from './Pages/ClusterOverviewPage/Index';
import TaskWiseDetailsPage from './Pages/TaskWiseDetailsPage/Index';
import DepartmentWiseSLAPage from './Pages/DepartmentWiseSLAPage/Index';
import OverallDepartmentWiseSLAPage from './Pages/OverallDepartmentWiseSLAPage/Index';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          path="/cluster-launch-calender"
          element={<ClusterLaunchCalenderPage />}
        />

        <Route path="/cluster-overview" element={<ClusterOverviewPage />} />

        <Route
          path="/task-wise-details/:id"
          element={<TaskWiseDetailsPage />}
        />
        <Route
          path="/department-wise-sla"
          element={<DepartmentWiseSLAPage />}
        />
        <Route
          path="/overall-department-wise-sla"
          element={<OverallDepartmentWiseSLAPage />}
        />
        {/* Default Route */}
        <Route
          path="*"
          element={<Navigate to="/cluster-launch-calender" replace />}
        />
      </Route>
    </Routes>
  );
}

export default App;
