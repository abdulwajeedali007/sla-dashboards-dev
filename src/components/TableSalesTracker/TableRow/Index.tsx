import type { Task } from '../../../Types';
import ProgressBar from '../../ProgressBar/Index';
// import StatusBadge from '../StatusBadge/Index';

const TableRow = ({ task }: { task: Task }) => {
  return (
    <tr className="border-b  border-gray-100 last:border-b-0 hover:bg-gray-50 cursor-pointer">
      <td className="px-4 py-5 text-sm">{task.id}</td>
      {/* Task Name */}
      <td className="px-2 py-5 text-sm text-wrap w-80  ">{task.name}</td>
      <td className="px-1 py-5 text-sm">{task.new}</td>
      {/* Status */}
      <td className="px-1 py-5">
        {/* <StatusBadge status={task.status} /> */}
        {task.completed}
      </td>
      <td className="px-1 py-5 text-sm">{task.inprogress}</td>
      <td className="px-1 py-5 text-sm">{task.slabreached}</td>
      {/* <td className="px-1 py-5 text-sm">{task.pending}</td> */}
      {/* <td className="px-1 py-5 text-sm">{task.delayed}</td> */}
      {/* <td className="px-1 py-5 text-sm">{task.notstarted}</td> */}
      {/* <td className="px-1 py-5 text-sm">{task.autocomplete}</td> */}
      {/* Progress */}
      <td className="px-2 py-5">
        <ProgressBar progress={task.progress} />
      </td>
      {/* Dates */}
      <td className="px-2 py-5 text-sm">{task.startDate}</td>
      <td className="px-2 py-5 text-sm">{task.endDate}</td>

      {/* Updated By */}
      <td className="px-1 py-5 text-sm">{task.updatedBy}</td>
    </tr>
  );
};
export default TableRow;
