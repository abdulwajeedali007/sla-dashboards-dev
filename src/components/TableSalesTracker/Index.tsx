import type { Task } from '../../Types';
import TableRow from './TableRow/Index';
import { departmentwiseTaskdetails } from '../../data.js';
type Props = {
  tasks: Task[];
  departmentDetails: any;
};

const Index = ({ tasks, departmentDetails }: Props) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow mt-5">
      <h2 className="text-xl mb-3 mt-4  font-semibold px-2 py-2">
        Department Readiness
      </h2>
      <table className="w-full border-collapse">
        {/* Header */}
        <thead className="bg-gray-700 text-white text-center">
          <tr>
            {/* <th className="px-2 font-semibold text-xs py-4 border border-gray-200">
              #
            </th> */}
            <th className="px-4 font-semibold text-xs py-4 text-left border border-gray-100">
              Department
            </th>
            <th className="px-2 font-semibold text-xs py-4 border border-gray-100 ">
              Total Steps
            </th>
            <th className="px-2 font-semibold text-xs py-4 border border-gray-100 ">
              Completed
            </th>
            <th className="px-2 font-semibold text-xs py-4 border border-gray-100 ">
              In Progress
            </th>
            <th className="px-2 font-semibold text-xs py-4 border border-gray-100 ">
              New
            </th>

            {/* <th className="px-2 font-semibold text-xs py-4 border border-gray-100 text-yellow-700">
              Delayed
            </th>
            <th className="px-2 font-semibold text-xs py-4  border border-gray-100 text-purple-500">
              Pending
            </th>*/}

            <th className="px-2 font-semibold text-xs py-4  border border-gray-100 ">
              SLA Breached
            </th>
            {/* <th className="px-2 font-semibold text-xs py-4  border border-gray-100 text-blue-500">
              Auto Complete
            </th> */}
            <th className="px-2 font-semibold text-xs py-4  border border-gray-100">
              SLA Adherence %
            </th>
            {/* <th className="px-2 font-semibold text-xs py-4 border border-gray-100">
              Created Date
            </th>
            <th className="px-2 font-semibold text-xs py-4  border border-gray-100">
              Lasted Updated Date
            </th> */}
            {/* <th className="px-2 font-semibold text-xs py-4 text-left border border-gray-100">
              Updated By
            </th> */}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {tasks.map((task) => {
            const percentage = (
              (((task.completed ?? 0) - (task.slabreached ?? 0)) /
                (task.totalsteps ?? 1)) *
              100
            ).toFixed(1);

            return (
              <TableRow
                key={task.id}
                task={task}
                percentage={parseInt(percentage)}
                departmentDetails={departmentDetails}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
