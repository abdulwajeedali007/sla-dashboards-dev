import { SendHorizonal } from 'lucide-react';
import type { Task } from '../../../Types';
import ProgressBar from '../../ProgressBar/Index';
// import StatusBadge from '../StatusBadge/Index';
type TableRowTypes = {
  task: Task;
  percentage: number;
};
const TableRow = ({ task, percentage }: TableRowTypes) => {
  return (
    <tr className="border border-gray-100 last:border-b-0 text-center hover:bg-gray-50 cursor-pointer">
      {/* Task Name */}
      <td className="px-4 py-5 flex items-center gap-2 text-sm text-wrap w-80 text-left ">
        <SendHorizonal size={14} className="inline-block" />{' '}
        <span>{task.name}</span>
      </td>
      <td className="px-2 py-5 text-sm text-wrap border-l border-gray-100">
        {task.totalsteps}
      </td>
      <td className="px-1 py-5 text-sm text-center border border-gray-100">
        {task.new}
      </td>
      {/* Status */}
      <td className="px-1 py-5 text-sm">{task.completed}</td>
      <td className="px-1 py-5 text-sm border border-gray-100">
        {task.inprogress}
      </td>
      <td className="px-1 py-5 text-sm">{task.slabreached}</td>
      {/* Progress */}
      <td className="px-2 py-5 border border-gray-100">
        <ProgressBar progress={percentage} />
      </td>
      {/* Dates */}
      <td className="px-2 py-5 text-sm ">{task.startDate}</td>
      <td className="px-2 py-5 text-sm border border-gray-100 ">
        {task.endDate}
      </td>

      {/* Updated By */}
      <td className="px-1 py-5 text-sm text-left">{task.updatedBy}</td>
    </tr>
  );
};
export default TableRow;
