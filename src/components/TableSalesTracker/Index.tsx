import type { Task } from '../../Types';
import TableRow from './TableRow/Index';

type Props = {
  tasks: Task[];
};

const Index = ({ tasks }: Props) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow mt-5">
      <h2 className="text-xl mb-3 mt-4  font-semibold px-2 py-2">
        Department Readiness
      </h2>
      <table className="w-full border-collapse">
        {/* Header */}
        <thead className="bg-gray-100 text-center">
          <tr>
            {/* <th className="px-2 font-semibold text-xs py-4 border border-gray-200">
              #
            </th> */}
            <th className="px-4 font-semibold text-xs py-4 text-left border border-gray-200">
              Department
            </th>
            <th className="px-2 font-semibold text-xs py-4 border border-gray-200 text-gray-900">
              Total Steps
            </th>
            <th className="px-2 font-semibold text-xs py-4 border border-gray-200 text-gray-500">
              New
            </th>
            <th className="px-2 font-semibold text-xs py-4 border border-gray-200 text-green-500">
              Completed
            </th>
            <th className="px-2 font-semibold text-xs py-4 border border-gray-200 text-yellow-500">
              in Progress
            </th>
            {/* <th className="px-2 font-semibold text-xs py-4 border border-gray-200 text-yellow-700">
              Delayed
            </th>
            <th className="px-2 font-semibold text-xs py-4  border border-gray-200 text-purple-500">
              Pending
            </th>*/}

            <th className="px-2 font-semibold text-xs py-4  border border-gray-200 text-red-500">
              SLA Breached
            </th>
            {/* <th className="px-2 font-semibold text-xs py-4  border border-gray-200 text-blue-500">
              Auto Complete
            </th> */}
            <th className="px-2 font-semibold text-xs py-4  border border-gray-200">
              SLA Adherence %
            </th>
            <th className="px-2 font-semibold text-xs py-4 border border-gray-200">
              Created Date
            </th>
            <th className="px-2 font-semibold text-xs py-4  border border-gray-200">
              Lasted Updated Date
            </th>
            <th className="px-2 font-semibold text-xs py-4 text-left border border-gray-200">
              Updated By
            </th>
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
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
