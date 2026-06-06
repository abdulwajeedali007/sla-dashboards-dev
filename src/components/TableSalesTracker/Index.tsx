import type { Task } from '../../Types';
import TableRow from './TableRow/Index';

type Props = {
  tasks: Task[];
};

const Index = ({ tasks }: Props) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow mt-5">
      <h2 className="text-xl mb-3 font-semibold px-2 py-1">
        Department Readiness
      </h2>
      <table className="w-full border-collapse">
        {/* Header */}
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-2 font-semibold text-xs py-4">#</th>
            <th className="px-2 font-semibold text-xs py-4">Department</th>
            <th className="px-2 font-semibold text-xs py-4 text-gray-500">
              New
            </th>
            <th className="px-2 font-semibold text-xs py-4 text-green-500">
              Completed
            </th>
            <th className="px-2 font-semibold text-xs py-4 text-yellow-500">
              in Progress
            </th>
            {/* <th className="px-2 font-semibold text-xs py-4 text-yellow-700">
              Delayed
            </th>
            <th className="px-2 font-semibold text-xs py-4 text-purple-500">
              Pending
            </th>*/}

            <th className="px-2 font-semibold text-xs py-4 text-red-500">
              SLA Breached
            </th>
            {/* <th className="px-2 font-semibold text-xs py-4 text-blue-500">
              Auto Complete
            </th> */}
            <th className="px-2 font-semibold text-xs py-4">SLA Adherence %</th>
            <th className="px-2 font-semibold text-xs py-4">Created Date</th>
            <th className="px-2 font-semibold text-xs py-4">
              Lasted Updated Date
            </th>
            <th className="px-2 font-semibold text-xs py-4">Updated By</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {tasks.map((task) => (
            <TableRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
