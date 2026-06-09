function Index({ departmentDetails }) {
    console.log(departmentDetails);
    return (
      <div className="border border-gray-200 overflow-hidden rounded">
        <table className="w-full border-gray-200">
          <thead className="bg-gray-700 h-10 text-white text-xs font-light">
            <th className="text-left px-4">Task Name</th>
            <th>CaseID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Last Updated By</th>
          </thead>
          <tbody>
            {departmentDetails.map((task) => (
              <>
                <tr className="text-center h-13 border-b border-gray-200">
                  <td className="text-left px-4">{task.taskName}</td>
                  <td>{task.taskId}</td>
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
  