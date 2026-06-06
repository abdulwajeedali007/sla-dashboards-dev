import { Routes, Route, Navigate } from 'react-router';

import Layout from './Layout/Index';

import ExecutiveLaunchCalenderPage from './Pages/ExecutiveLaunchCalenderPage/Index';
import ClusterOverviewPage from './Pages/ClusterOverviewPage/Index';
import ClusterExecuationCommandCenterPage from './Pages/ClusterExecuationCommandCenterPage/Index';
import SlaReadinessPage from './Pages/SlaReadinessPage/Index';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          path="/launch-calender"
          element={<ExecutiveLaunchCalenderPage />}
        />

        <Route path="/cluster-overview" element={<ClusterOverviewPage />} />

        <Route
          path="/cluster-execution/:id"
          element={<ClusterExecuationCommandCenterPage />}
        />
        <Route path="/sla-readiness" element={<SlaReadinessPage />} />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/launch-calender" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
