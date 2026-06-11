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
import ProjectDetails from '../../components/ProjectDetails/Index';
import InfoBlock from '../../components/InfoBlock/Index';

import { departmentwiseslatasks, departmentwiseTaskdetails } from '../../data';

function Index() {
  return (
    <>
      <div className="my-6 flex flex-col justify-between items-start sm:flex-row sm:px-0 sm:items-center">
        <div className="flex items-center gap-1 sm:gap-2 sm:flex-row">
          <h2 className="text-2xl font-medium">Department Wise SLA</h2>
          {/* <Info className="cursor-pointer" /> */}
        </div>
      </div>
      <ProjectDetails />
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
          value={15}
          IconColor="text-white"
          IconBg="bg-blue-700"
          info="active departments"
        />
        <InfoBlock
          Icon={CircleCheckBig}
          title="Completed"
          value={9}
          IconColor="text-white"
          IconBg="bg-green-700"
          info={'Steps'}
          ValueColor="text-green-700"
        />
        <InfoBlock
          Icon={Clock7}
          title="In Progess"
          value={3}
          IconColor="text-white"
          IconBg="bg-yellow-500"
          ValueColor="text-yellow-500"
          info={'Steps'}
        />
        <InfoBlock
          Icon={User2Icon}
          title="New"
          value={3}
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
      {/* <div className="flex justify-start gap-5 items-center mb-6 px-4 flex-wrap md:flex-nowrap ">
        <div className="md:flex md:gap-4 ">
          <div className="flex items-center gap-2 mb-2 md:w-auto md:mb-0">
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
              <div className="h-full w-full rounded-full bg-gray-500"></div>
            </div>
            <p className="text-base">New</p>
          </div>
          <div className="flex items-center gap-2 md:w-auto">
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
              <div className="h-full w-full rounded-full bg-green-700"></div>
            </div>
            <p className="text-base">Completed</p>
          </div>
        </div>
        <div className="md:flex md:gap-4">
          <div className="flex items-center gap-2 mb-2 md:w-auto md:mb-0">
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
              <div className="h-full w-full rounded-full bg-yellow-500"></div>
            </div>
            <p className="text-base">In Progress</p>
          </div>
          <div className="flex items-center gap-3  md:w-auto">
          <p className="h-3 w-8 rounded bg-yellow-600"></p>
          <p className="text-base">SLA Delayed</p>
        </div> 
          <div className="flex items-center gap-2 md:w-auto">
            <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
              <div className="h-full w-full rounded-full bg-red-500"></div>
            </div>
            <p className="text-base">SLA Breached</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-1/2 md:w-auto">
          <p className="h-3 w-8 rounded bg-blue-500"></p>
          <p className="text-base">Auto Complete</p>
        </div> 
      </div> */}
      <TableSalesTracker
        tasks={departmentwiseslatasks}
        departmentDetails={departmentwiseTaskdetails}
      />
    </>
  );
}

export default Index;
