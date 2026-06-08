export const slaRequestBody = (id: string) => {
  console.log(id);
  return {
    query: {
      select: [
        {
          field: 'CaseID',
        },
        {
          field: 'TaskName',
        },
        {
          field: 'TaskStatus',
        },
        {
          field: 'DepartmentName',
        },
        {
          field: 'pxCommitDateTime',
        },
        {
          field: 'pxUpdateDateTime',
        },
        {
          field: 'pxUpdateOperator',
        },
        {
          field: 'pxCreateOperator',
        },
        {
          field: 'pxCreateDateTime',
        },
        {
          field: 'pxCreateOpName',
        },
        {
          field: 'pxCreateSystemID',
        },
        {
          field: 'pxSaveDateTime',
        },
        {
          field: 'pxUpdateOpName',
        },
        {
          field: 'pxUpdateSystemID',
        },
        {
          field: 'pxUpdateOperator:pyUserName',
        },
        {
          field: 'pyGUID',
        },
        {
          field: 'StepNumber',
        },
        {
          field: 'Milestones',
        },
      ],
    },
    dataViewParameters: {
      CaseID: 'SLT-1199',
    },
    useExtendedTimeout: true,
    includeTotalCount: true,
    includeTotalCountLimit: 5000,
  };
};
