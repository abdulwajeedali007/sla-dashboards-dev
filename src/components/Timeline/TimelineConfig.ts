export const getTimelineOptions = ({
    minDate,
    maxDate,
    yLabels,
    tooltipLabel,
    xTicksPadding,
    xAxisOffset = false,
    isMobile = false,
  }: {
    minDate: string | Date;
    maxDate: string | Date;
    yLabels?: string[];
    tooltipLabel?: (context: any) => string | string[];
    xTicksPadding?: number;
    xAxisOffset?: boolean;
    isMobile?: boolean;
  }) => ({
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
  
    plugins: {
      legend: {
        display: false,
      },
  
      tooltip: {
        bodyFont: {
          size: isMobile ? 8 : 10,
        },
  
        titleFont: {
          size: isMobile ? 8 : 10,
        },
  
        callbacks: {
          label: tooltipLabel,
        },
      },
    },
  
    scales: {
      x: {
        type: 'time',
        position: 'top',
        min: minDate,
        max: maxDate,
        time: { unit: 'month' },
        offset: xAxisOffset,
        grid: {
          color: '#F3F4F6',
        },
        //   afterFit(scale: any) {
        //     scale.height = 70;
        //   },
        ticks: {
          color: '#2a2a2a',
          padding: xTicksPadding,
  
          font: {
            size: isMobile ? 10 : 12,
            weight: '600',
            family: 'Poppins',
          },
        },
      },
  
      y: {
        type: 'category',
  
        labels: yLabels,
  
        offset: true,
  
        border: {
          display: false,
        },
  
        ticks: {
          display: false,
        },
  
        grid: {
          display: true,
        },
      },
    },
  });
  
  // const options: any = {
  //   indexAxis: 'y',
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   animation: false,
  
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  
  //     tooltip: {
  //       callbacks: {
  //         label(context: any) {
  //           const raw = context.raw;
  
  //           return `${raw.phase}: ${format(raw.x[0], 'dd MMM yyyy')} → ${format(
  //             raw.x[1],
  //             'dd MMM yyyy',
  //           )}`;
  //         },
  //       },
  //     },
  //   },
  
  //   scales: {
  //     y: {
  //       display: true,
  
  //       offset: true,
  
  //       grid: {
  //         display: true,
  //         drawBorder: true,
  //         // offset: false,
  //       },
  //       ticks: {
  //         display: false, // hide y-axis text
  //       },
  
  //       border: {
  //         display: false,
  //       },
  //     },
  
  //     x: {
  //       type: 'time',
  //       position: 'top',
  //       offset: true,
  //       bounds: 'data',
  
  //       min: '2026-01-01',
  //       max: '2026-08-01',
  
  //       time: {
  //         unit: 'month',
  //       },
  
  //       ticks: {
  //         padding: 24,
  
  //         callback(value: any) {
  //           const date = new Date(value);
  
  //           return [
  //             // format(date, 'dd'),
  //             format(date, 'MMM'),
  //             format(date, 'yy'),
  //           ].join('-');
  //         },
  //         // afterFit(scale: any) {
  //         //   scale.height = 70;
  //         // },
  //         color: '#2a2a2a',
  //         font: {
  //           size: 12,
  //           weight: 600,
  //           family: 'Poppins',
  //         },
  //       },
  
  //       grid: {
  //         color: '#e5e7eb',
  //       },
  //     },
  //   },
  // };
  