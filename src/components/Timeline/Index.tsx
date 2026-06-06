import { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
// import { Bar } from 'react-chartjs-2';

import 'chartjs-adapter-date-fns';
import { Link } from 'react-router';
import { addDays, addMonths } from 'date-fns';
import type { CalenderClusterData, TimelineCluster, TimelineProject } from '../../Types';

import {
  timelineLabelPlugin,
  circleNodePlugin,
} from '../Timeline/TimelinePlugin';
import TimelineChart from './TimelineChart';
import { getTimelineOptions } from './TimelineConfig';
import { flattenTimelineData, groupVisibleTaskDetails } from './TimelineUtil';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  TimeScale,
);
const ROW_HEIGHT = 90;
const isMobile = window.innerWidth < 768;

// ---------------- COMPONENT ----------------
export default function Timeline({
  timelineTasks,
}: {
  timelineTasks: CalenderClusterData[];
}) {
  // -------------------- Min & Max Dates --------------------------
  const dates = timelineTasks
    .flatMap((item) => [item.SLTBookingLaunchDate, item.SLTMarketingLaunchDate])
    .filter(Boolean);

  const startDate = new Date(
    Math.min(...dates.map((d) => new Date(d).getTime())),
  )
    .toISOString()
    .split('T')[0];
  const minDate = addDays(startDate, -5);
  const maxDate = addMonths(startDate, 2);

  // Group the tasks as per the required data
  const groupVisibleTasks: TimelineProject[] =
    groupVisibleTaskDetails(timelineTasks);
  // Flatten data as per chart dataset
  const visibleTasks = useMemo(
    () => flattenTimelineData(groupVisibleTasks),
    [groupVisibleTasks],
  );

  // ---------------- FIXED Y-AXIS LABELS ----------------
  const yLabels = useMemo(() => {
    const set = new Set<string>();

    groupVisibleTasks.forEach((project: any) => {
      // console.log(project);
      project.clusters.forEach((cluster: any) => {
        set.add(`${project.projectName}__${cluster.clusterName}`);
      });
    });

    return Array.from(set);
  }, [groupVisibleTasks]);

  const totalRows = yLabels.length;
  const chartHeight = totalRows * ROW_HEIGHT;
  // ---------------- DATA ----------------
  const data = {
    datasets: [
      {
        label: 'Timeline',

        data: visibleTasks.map((task: any) => ({
          x: [task.startDate, task.endDate],

          // IMPORTANT FIX (GROUP KEY)
          y: `${task.projectName}__${task.cluster}`,

          phase: task.phase,
          statusDate: task.startDate,
        })),

        backgroundColor: visibleTasks.map((task: any) => task.color),

        borderRadius: 8,
        borderSkipped: false,
        barThickness: isMobile ? 12 : 18,
        categoryPercentage: 0.5,
      },
    ],
  };

  // ---------------- OPTIONS ----------------
  const options = getTimelineOptions({
    minDate,
    maxDate,
    yLabels,
    isMobile,
    tooltipLabel: (context) => {
      const raw = context.raw;
      return [raw.phase, `Start Date: ${raw.x[0]}`];
    },
  });

  // for top position of project title
  let runningTop = 0;
  return (
    <>
      <div className="overflow-auto sm:max-h-[650px]  flex  ">
        <div className=" min-w-[150px]    relative mt-5 ">
          {groupVisibleTasks.map((project, index) => {
            // console.log(project);
            const currentTop = runningTop;

            // move pointer for next project
            runningTop += project.clusters.length * ROW_HEIGHT;
            return (
              <div key={index}>
                <h3
                  className="absolute left-0 px-2 py-1 bg-gray-200  text-center rounded w-full text-xs  sm:text-sm"
                  style={{ top: `${currentTop - 15}px` }}
                >
                  {project.projectName}
                </h3>

                {project.clusters.map((cluster: TimelineCluster) => (
                  <Link
                    key={cluster.clusterId}
                    // to={`/cluster/${cluster.id}`}
                    to={`/cluster-execution/${cluster.clusterCode}`}
                    className="text-blue-600 flex items-center justify-center hover:underline text-sm sm:text-base font-semibold"
                    style={{
                      height: `${ROW_HEIGHT}px`,
                    }}
                  >
                    {cluster.clusterName}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
        <div className="min-w-[960px]  w-full">
          <TimelineChart
            data={data}
            options={options}
            plugins={[timelineLabelPlugin, circleNodePlugin]}
            height={chartHeight + 30}
          />
        </div>
      </div>
    </>
  );
}
