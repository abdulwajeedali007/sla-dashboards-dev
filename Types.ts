export type Task = {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    progress: number;
    updatedBy: string;
    status: 'completed' | 'inprogress' | 'notstarted' | 'delay';
    lastUpdated: string;
    completed?: number;
    inprogress?: number;
    atrisk?: number;
    delayed?: number;
    pending?: number;
    notstarted?: number;
    autocomplete?: number;
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
    Year: string;
    ProjectType: string;
    ClusterType: string;
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
    SLTMarketingLaunchDate: string;
    SLTProposedNumberOfInventoryUnits: number;
    SLTClusterID: string;
    SLTClusterName: string;
  };
  