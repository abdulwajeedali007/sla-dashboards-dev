function Index({ departmentDetails }) {
  const taskID = departmentDetails.find((item) => item.taskId);
  return (
    <div className="border border-gray-200 overflow-hidden rounded">
      <table className="w-full border-gray-200">
        <thead className="bg-gray-700 h-10 text-white text-[10px] font-extralight  ">
          <th className="text-left px-4">Task Name</th>
          {taskID && <th>CaseID</th>}
          <th>Start Date</th>
          <th>End Date</th>
          <th>Last Updated By</th>
        </thead>
        <tbody>
          {departmentDetails.map((task) => (
            <>
              <tr className="text-center h-13 text-sm border-b border-gray-200">
                <td className="text-left px-4">{task.taskName}</td>
                {task.taskId && <td>{task.taskId}</td>}
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
                <td>{task.updatedBy}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
