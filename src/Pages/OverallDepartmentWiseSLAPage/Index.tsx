import {
  CircleCheckBig,
  ClipboardList,
  Clock7,
  // Info,
  Tags,
  TriangleAlert,
  User2Icon,
} from 'lucide-react';

import TableSalesTracker from '../../components/TableSalesTracker/Index';
import InfoBlock from '../../components/InfoBlock/Index';

import {
  overalldepartmentwiseslatasks,
  overalldepartmentwiseTaskdetails,
} from '../../data';

function Index() {
  return (
    <>
      <div className="my-6 flex flex-col justify-between items-start sm:flex-row sm:px-0 sm:items-center">
        <div className="flex items-center gap-1 sm:gap-2 sm:flex-row">
          <h2 className="text-2xl font-medium">Overall Department Wise SLA</h2>
          {/* <Info className="cursor-pointer" /> */}
        </div>
      </div>

      <div className="mt-6 mb-8 flex flex-col gap-2 border border-gray-200 rounded p-4  sm:flex-row sm:flex-wrap sm:gap-5 sm:px-0">
        <InfoBlock
          Icon={Tags}
          title={'Total Departments'}
          ValueColor="text-black"
          value={5}
          IconColor="text-white"
          IconBg="bg-black"
          info={'active'}
        />
        <InfoBlock
          Icon={ClipboardList}
          title="Total Steps"
          value={30}
          IconColor="text-white"
          IconBg="bg-blue-700"
          info="active departments"
        />
        <InfoBlock
          Icon={CircleCheckBig}
          title="Completed"
          value={18}
          IconColor="text-white"
          IconBg="bg-green-700"
          info={'Steps'}
          ValueColor="text-green-700"
        />
        <InfoBlock
          Icon={Clock7}
          title="In Progess"
          value={6}
          IconColor="text-white"
          IconBg="bg-yellow-500"
          ValueColor="text-yellow-500"
          info={'Steps'}
        />
        <InfoBlock
          Icon={User2Icon}
          title="New"
          value={6}
          IconColor="text-white"
          IconBg="bg-gray-700"
          info={'Steps'}
          ValueColor="text-gray-700"
        />

        <InfoBlock
          Icon={TriangleAlert}
          title="SLA Breached"
          value={0}
          IconColor="text-white"
          IconBg="bg-red-500"
          ValueColor="text-red-500"
          info="Steps"
        />
      </div>

      <TableSalesTracker
        tasks={overalldepartmentwiseslatasks}
        departmentDetails={overalldepartmentwiseTaskdetails}
      />
    </>
  );
}

export default Index;
