import { addDays, parseISO } from 'date-fns';
import type { CalenderClusterData, TimelineCluster } from '../../Types';

export const groupVisibleTaskDetails = (
  timelineTasks: CalenderClusterData[],
) => {
  return timelineTasks.reduce((acc: any[], item: any) => {
    let project = acc.find((p) => p.projectName === item.SLTProjectName);

    if (!project) {
      project = {
        projectName: item.SLTProjectName,
        clusters: [],
      };

      acc.push(project);
    }

    let cluster = project.clusters.find(
      (c: TimelineCluster) => c.clusterId === item.SLTClusterID,
    );

    if (!cluster) {
      cluster = {
        clusterCode: item.pyID,
        clusterId: item.SLTClusterID,
        clusterName: item.SLTClusterName,
        ClusterRegion: item.ClusterRegion,
        clusterUnits: item.SLTProposedNumberOfInventoryUnits,
        phases: [],
      };

      project.clusters.push(cluster);
    }

    cluster.phases.push(
      {
        phase: 'Marketing Launch Date',
        startDate: item.SLTMarketingLaunchDate,
        endDate: item.SLTBookingLaunchDate,
        color: '#f0b100',
      },
      {
        phase: 'Booking Launch Date',
        startDate: item.SLTBookingLaunchDate,
        endDate: addDays(parseISO(item.SLTBookingLaunchDate), 15),
        color: '#166534',
      },
    );

    return acc;
  }, []);
};
export function flattenTimelineData(projects: any[]) {
  return projects.flatMap((project) =>
    project.clusters.flatMap((cluster: any) =>
      cluster.phases.map((phase: any) => ({
        ...phase,
        projectName: project.projectName,
        cluster: cluster.clusterName ?? cluster.cluster,
      })),
    ),
  );
}
