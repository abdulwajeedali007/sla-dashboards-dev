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
      <div className="rounded border border-gray-200 bg-white shadow-sm overflow-x-auto ">
        <div className=" min-w-[1400px] max-h-[650px] md:grid md:grid-cols-12 ">
          {/* LEFT TABLE */}
          <div className="border-r border-gray-200 bg-white md:col-span-12 overflow-hidden">
            {/* HEADER */}
            <div className="grid grid-cols-6 h-[70px]  leading-2 items-center border-b border-gray-200 bg-gray-200 px-2 text-sm font-bold text-gray-700 sticky top-0 z-10 sm:px-4">
              <div>Project / Cluster</div>
              <div>No of Units</div>
              <div>Marketing Launch Dates</div>
              <div>Booking Launch Dates</div>
              <div>No of Units Sold</div>
              <div>Price in AED</div>
            </div>

            {/* BODY */}
            {groupVisibleTasks.map((project: TimelineProject) => (
              <div key={project.projectName} className="relative ">
                {/* Project Header */}
                <p className=" mb-0  px-4 text-xs font-bold p-1 bg-gray-100 w-screen text-gray-700 shadow">
                  {project.projectName}
                </p>

                {/* Cluster Rows */}
                {project.clusters.map((cluster: TimelineCluster) => {
                  const marketingPhase = cluster.phases.find(
                    (p: TimelinePhase) => p.phase === 'Marketing Launch Date',
                  );

                  const bookingPhase = cluster.phases.find(
                    (p: TimelinePhase) => p.phase === 'Booking Launch Date',
                  );

                  return (
                    <div
                      key={cluster.clusterId}
                      className="grid grid-cols-6 h-[45px] items-center  border-b  border-gray-200 px-4 text-sm"
                    >
                      <Link
                        to={`/cluster-execution/${cluster.clusterCode}`}
                        className="pl-1 text-blue-600 font-semibold"
                      >
                        {cluster.clusterName}
                      </Link>

                      <div>{cluster.clusterUnits}</div>

                      <div>
                        {marketingPhase?.endDate
                          ? format(
                              new Date(marketingPhase.endDate),
                              'dd MMM yyyy',
                            )
                          : '-'}
                      </div>

                      <div>
                        {bookingPhase?.startDate
                          ? format(
                              new Date(bookingPhase.startDate),
                              'dd MMM yyyy',
                            )
                          : '-'}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

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
