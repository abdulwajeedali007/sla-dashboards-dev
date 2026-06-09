import { NavLink, Outlet } from 'react-router';

function Index() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    ` ${isActive ? 'text-blue-600 ' : 'text-gray-600 hover:text-blue-800'}`;

  return (
    <>
      <nav className="p-3 bg-gray-200 font-semibold text-white text-xs sm:text-base">
        <NavLink to="/cluster-launch-calender" className={navClass}>
          Cluster Launch Calender
        </NavLink>{' '}
        /{' '}
        <NavLink to="/cluster-overview" className={navClass}>
          Cluster Overview
        </NavLink>{' '}
        /{' '}
        <NavLink to="/task-wise-details" className={navClass}>
          Task Wise Details
        </NavLink>{' '}
        /
        <NavLink to="/department-wise-sla" className={navClass}>
          Department Wise SLA
        </NavLink>
        /
        <NavLink to="/overall-department-wise-sla" className={navClass}>
          Overall Department Wise SLA
        </NavLink>
      </nav>

      <div className="container mx-auto px-3 md:px-0">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
