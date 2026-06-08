import { getYear, addYears, subYears, format } from 'date-fns';
import type { CalenderClusterData, formStateType, SlaTask } from '../Types';
export function mileStone(data: SlaTask[], mileStoneName: string) {
  //   console.log(milestone.toLowerCase());
  const readinessMileStonesData =
    data &&
    data
      .filter(
        (milestone) =>
          milestone.Milestones.toLowerCase() === mileStoneName.toLowerCase(),
      )
      .sort((a, b) =>
        a.StepNumber.localeCompare(b.StepNumber, undefined, {
          numeric: true,
          sensitivity: 'base',
        }),
      );

  const lengthOfTotalMileStone =
    readinessMileStonesData && readinessMileStonesData.length;

  const completedMileStones =
    readinessMileStonesData &&
    readinessMileStonesData.filter(
      (milestone) => milestone.TaskStatus === 'Completed',
    );
  const lengthOfCompletedMileStones =
    completedMileStones && completedMileStones.length;
  const percentageOfmilesStones =
    (lengthOfCompletedMileStones / lengthOfTotalMileStone) * 100;

  return { readinessMileStonesData, percentageOfmilesStones, mileStoneName };
}

// GET YEARS

export function getYears() {
  const currentYear = getYear(new Date());

  const years = [
    getYear(subYears(new Date(), 2)),
    getYear(subYears(new Date(), 1)),
    currentYear, // current
    getYear(addYears(new Date(), 1)),
    getYear(addYears(new Date(), 2)),
  ];
  return { years, currentYear };
}

// GET PROJECT NAMES
export function getProjectNames(data: CalenderClusterData[], Year: number) {
  const selecteYearProjects = data
    .filter((item) => item.SLTProjectName)
    .filter(
      (item) =>
        parseInt(item.SLTMarketingLaunchDate?.split('-')[0] ?? '0') === Year &&
        parseInt(item.SLTBookingLaunchDate?.split('-')[0] ?? '0') === Year,
    );
  // const projectNames = selecteYearProjects.reduce<string[]>((acc, item) => {
  //   if (item.SLTProjectName && !acc.includes(item.SLTProjectName)) {
  //     acc.push(item.SLTProjectName);
  //   }
  //   return acc;
  // }, []);
  return [...new Set(selecteYearProjects.map((item) => item.SLTProjectName))];
  // return projectNames;
}

// GET TASKS NAMES
export function getTaskNames(
  data: CalenderClusterData[],
  selectedProjectName: string,
) {
  const selectedProject = data.filter(
    (item) => item.SLTProjectName === selectedProjectName,
  );
  const taskNames = selectedProject.reduce<string[]>((acc, item) => {
    if (item.SLTProjectName && !acc.includes(item.SLTClusterName)) {
      acc.push(item.SLTClusterName);
    }
    return acc;
  }, []);
  return taskNames;
}

// GET REGION NAMES
export function getRegionNames(
  data: CalenderClusterData[],
  selectedProjectName: string,
) {
  const selectedProject = data.filter(
    (item) => item.SLTProjectName === selectedProjectName,
  );
  const taskNames = selectedProject.reduce<string[]>((acc, item) => {
    if (item.SLTProjectName && !acc.includes(item.ClusterRegion)) {
      acc.push(item.ClusterRegion);
    }
    return acc;
  }, []);
  return taskNames;
}

// FORM FILTERS

export function getFilterFormOptions(
  data: CalenderClusterData[],
  appliedFilter: formStateType,
  currentYear: number,
) {
  return (
    data &&
    data
      .filter((item) => item.SLTProjectName)
      .filter((item) => {
        const yearMatch =
          appliedFilter.Year === currentYear ||
          (parseInt(item.SLTMarketingLaunchDate?.split('-')[0] ?? '0') ===
            Number(appliedFilter.Year) &&
            parseInt(item.SLTBookingLaunchDate?.split('-')[0] ?? '0') ===
              Number(appliedFilter.Year));

        const projectMatch =
          appliedFilter.ProjectType === 'All' ||
          item.SLTProjectName === appliedFilter.ProjectType;

        const clusterMatch =
          appliedFilter.ClusterType === 'All' ||
          item.SLTClusterName === appliedFilter.ClusterType;

        const clusterRegionMatch =
          appliedFilter.ClusterRegion === 'All' ||
          item.ClusterRegion === appliedFilter.ClusterRegion;
        return yearMatch && projectMatch && clusterMatch && clusterRegionMatch;
      })
  );
}

// CURRENT DATE
// const now = new Date();
export const currentDate = format(new Date(), 'yyyy-MM-dd ');
