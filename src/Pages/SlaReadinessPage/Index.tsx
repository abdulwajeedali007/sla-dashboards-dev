import { tasksProgress } from '../../data';
import TableSalesTracker from '../../components/TableSalesTracker/Index';
import InfoBlock from '../../components/InfoBlock/Index';
import {
  CircleCheckBig,
  ClipboardList,
  Clock7,
  Info,
  TriangleAlert,
  User2Icon,
} from 'lucide-react';

function Index() {
  return (
    <>
      <div className="my-6 flex flex-col justify-between items-start sm:flex-row sm:px-0 sm:items-center">
        <div className="flex items-center gap-1 sm:gap-2 sm:flex-row">
          <h2 className="text-2xl font-medium">
            SLA Readiness - Department Wise
          </h2>
          <Info className="cursor-pointer" />
        </div>
      </div>
      <div className="my-6 flex flex-col gap-2  sm:flex-row sm:flex-wrap sm:gap-5 sm:px-0">
        <InfoBlock
          Icon={CircleCheckBig}
          title={'Total clustertypes'}
          ValueColor="text-green-700"
          value={22}
          IconColor="text-white"
          IconBg="bg-green-700"
          info={'active'}
        />
        <InfoBlock
          Icon={ClipboardList}
          title="Total Steps"
          value={42}
          IconColor="text-white"
          IconBg="bg-blue-700"
          info="active departments"
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
          Icon={TriangleAlert}
          title="Delayed"
          value={5}
          IconColor="text-white"
          IconBg="bg-red-500"
          ValueColor="text-red-500"
          info="Steps"
        />
        <InfoBlock
          Icon={User2Icon}
          title="Pending Approvals"
          value={5}
          IconColor="text-white"
          IconBg="bg-purple-700"
          info={'Steps'}
          ValueColor="text-purple-700"
        />
      </div>
      <div className="flex justify-start gap-5 items-center mb-6 px-4 flex-wrap md:flex-nowrap ">
        <div className="flex items-center gap-2 w-1/2 md:w-auto">
          <p className="h-3 w-8 rounded bg-gray-500"></p>
          <p className="text-base">New</p>
        </div>
        <div className="flex items-center gap-2 w-1/2 md:w-auto">
          <p className="h-3 w-8 rounded bg-green-700"></p>
          <p className="text-base">Completed</p>
        </div>
        <div className="flex items-center gap-2 w-1/2 md:w-auto">
          <p className="h-3 w-8 rounded bg-yellow-500"></p>
          <p className="text-base">In Progress</p>
        </div>
        {/* <div className="flex items-center gap-3 w-1/2 md:w-auto">
          <p className="h-3 w-8 rounded bg-yellow-600"></p>
          <p className="text-base">SLA Delayed</p>
        </div> */}
        <div className="flex items-center gap-2 w-1/2 md:w-auto">
          <p className="h-3 w-8 rounded bg-red-700"></p>
          <p className="text-base">SLA Breached</p>
        </div>

        {/* <div className="flex items-center gap-3 w-1/2 md:w-auto">
          <p className="h-3 w-8 rounded bg-blue-500"></p>
          <p className="text-base">Auto Complete</p>
        </div> */}
      </div>
      <TableSalesTracker tasks={tasksProgress} />
    </>
  );
}

export default Index;
