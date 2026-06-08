// import { useMemo } from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
//   TimeScale,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import 'chartjs-adapter-date-fns';
import { format } from 'date-fns';
// import { getTimelineOptions } from '../Timeline/TImelineConfig';
// import { xAxisBackgroundPlugin } from '../Timeline/TimelinePlugin';
import {
  // flattenTimelineData,
  groupVisibleTaskDetails,
} from '../Timeline/TimelineUtil';
// import TimelineChart from '../Timeline/TimelineChart';
import { Link } from 'react-router';
import type {
  CalenderClusterData,
  TimelineCluster,
  TimelinePhase,
  TimelineProject,
} from '../../Types';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
//   TimeScale,
// );

// const ROW_HEIGHT = 90;

export default function Index({
  timelineTasks,
}: {
  timelineTasks: CalenderClusterData[];
}) {
  // Group the tasks as per the requirement data
  const groupVisibleTasks: TimelineProject[] =
    groupVisibleTaskDetails(timelineTasks);

  // Flatten data as per chart dataset requirment
  // const visibleTasks = useMemo(
  //   () => flattenTimelineData(groupVisibleTasks),
  //   [groupVisibleTasks],
  // );

  // const isMobile = window.innerWidth < 768;
  // const chartHeight = groupVisibleTasks.length * ROW_HEIGHT;

  // const data = {
  //   datasets: [
  //     {
  //       label: 'Timeline',

  //       data: visibleTasks.map((task: any) => ({
  //         x: [new Date(task.startDate), new Date(task.endDate)],

  //         // SAME CLUSTER ROW
  //         y: `${task.projectName}__${task.cluster}`,

  //         phase: task.phase,
  //         statusDate: task.statusDate,
  //       })),

  //       backgroundColor: visibleTasks.map((task: any) =>
  //         task.phase.toLowerCase().includes('booking') ? '#166534' : '#ffc038',
  //       ),

  //       borderRadius: 8,
  //       borderSkipped: false,
  //       barThickness: 12,

  //       grouped: false,
  //     },
  //   ],
  // };

  // ---------------- OPTIONS ----------------
  // const options = getTimelineOptions({
  //   minDate: '2026-01-01',
  //   maxDate: '2026-08-01',
  //   xTicksPadding: 24,
  //   xAxisOffset: true,
  //   isMobile,
  //   tooltipLabel: (context) => {
  //     const raw = context.raw;

  //     return `${raw.phase}: ${format(
  //       raw.x[0],
  //       'dd MMM yyyy',
  //     )} → ${format(raw.x[1], 'dd MMM yyyy')}`;
  //   },
  // });

  return (
    <>
      <div className="rounded  bg-white shadow-sm overflow-x-auto ">
        <div className="grid grid-cols-12 min-w-[1400px] sm:max-h-[650px] md:grid md:grid-cols-12 ">
          {/* LEFT TABLE */}
          <table className="w-full col-span-12 border-collapse">
            <thead>
              <tr className="h-[70px] border-b text-center border-gray-200 bg-gray-700 text-sm font-bold text-white">
                <th className="text-left px-4">Project / Cluster</th>
                <th>No of Units</th>
                <th>Marketing Launch Dates</th>
                <th>Booking Launch Dates</th>
                <th>Region</th>
                <th>No of Units Sold</th>
                <th>No of Units Remaining</th>
                <th>Price in AED</th>
              </tr>
            </thead>

            <tbody>
              {groupVisibleTasks.map((project: TimelineProject) => (
                <>
                  {/* Project Header Row */}
                  <tr key={`project-${project.projectName}`}>
                    <td
                      colSpan={8}
                      className="mb-0 px-4 text-xs font-bold p-1 bg-gray-100 text-gray-700"
                    >
                      {project.projectName}
                    </td>
                  </tr>

                  {/* Cluster Rows */}
                  {project.clusters.map((cluster: TimelineCluster) => {
                    const noofunitssold = Math.ceil(Math.random() * 10);
                    const price =
                      Math.floor(Math.random() * (800 - 500 + 1)) + 500;
                    const noofunitsremaining =
                      Number(cluster?.clusterUnits ?? 0) - noofunitssold;

                    const marketingPhase = cluster.phases.find(
                      (p: TimelinePhase) => p.phase === 'Marketing Launch Date',
                    );

                    const bookingPhase = cluster.phases.find(
                      (p: TimelinePhase) => p.phase === 'Booking Launch Date',
                    );

                    return (
                      <tr
                        key={cluster.clusterId}
                        className="h-[50px] text-center border-b border-gray-200 px-4 text-sm"
                      >
                        <td className="text-left px-6">
                          <Link
                            to={`/cluster-execution/${cluster.clusterCode}`}
                            className="pl-1 text-blue-600 font-semibold text-xs sm:text-sm"
                          >
                            {cluster.clusterName}
                          </Link>
                        </td>

                        <td>{cluster.clusterUnits}</td>

                        <td>
                          {marketingPhase?.endDate
                            ? format(
                                new Date(marketingPhase.endDate),
                                'dd MMM yyyy',
                              )
                            : '-'}
                        </td>

                        <td>
                          {bookingPhase?.startDate
                            ? format(
                                new Date(bookingPhase.startDate),
                                'dd MMM yyyy',
                              )
                            : '-'}
                        </td>

                        <td>{cluster.clusterRegion}</td>

                        <td>{noofunitssold}</td>

                        <td>{noofunitsremaining}</td>

                        <td>{price} M</td>
                      </tr>
                    );
                  })}
                </>
              ))}
            </tbody>
          </table>

          {/* RIGHT TIMELINE */}
          {/* <div className="w-full bg-white md:col-span-6">
            <TimelineChart
              data={data}
              options={options}
              plugins={[xAxisBackgroundPlugin]}
              height={chartHeight + 110}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
