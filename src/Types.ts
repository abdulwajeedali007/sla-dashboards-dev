export type Task = {
  id: number;
  name: string;
  // startDate: string;
  // endDate: string;
  // updatedBy: string;
  // status: 'completed' | 'inprogress' | 'new';
  // lastUpdated: string;
  completed?: number;
  inprogress?: number;
  slabreached?: number;
  new?: number;
  totalsteps: number;
};

export type TaskDetails = {
  taskName: string;
  taskId?: string;
  startDate: string;
  endDate: string;
  updatedBy: string;
};

export type Milestone = {
  id: number;
  title: string;
  status: 'completed' | 'delay' | 'notstarted' | 'inprogress';
  assignedTo?: string;
  date?: string;
};

export type Step = {
  id: number;
  title: string;
  status: 'completed' | 'delay' | 'notstarted' | 'inprogress';
};

// FROM API INTEGRATION
export type formStateType = {
  Year: number;
  ProjectType: string;
  ClusterType: string;
  ClusterRegion: string;
};

export type SlaTask = {
  pxObjClass: string;
  TaskName: string;
  DepartmentName: string;
  CaseID: string;
  pyGUID: string;
  Milestones: string;
  StepNumber: string;
  TaskStatus: 'New' | 'Completed' | 'In progress';
};

export type CalenderClusterData = {
  pyID: string;
  SLTBookingLaunchDate: string;
  pxObjClass: string;
  SLTProjectName: string;
  ClusterRegion: string;
  SLTMarketingLaunchDate: string;
  SLTProposedNumberOfInventoryUnits: number;
  SLTClusterID: string;
  SLTClusterName: string;
};

export type TimelineProject = {
  projectName: string;
  clusters: TimelineCluster[];
};

export type TimelineCluster = {
  clusterCode: string;
  clusterId: string;
  clusterName: string | null;
  clusterRegion: string;
  clusterUnits: number | string;
  phases: TimelinePhase[];
};

export type TimelinePhase = {
  phase: string;
  startDate: string | Date;
  endDate: string | Date;
  color: string;
};

export type TaskStatusCount = {
  Completed: number;
  'In progress': number;
  New: number;
  Skipped: number;
};
