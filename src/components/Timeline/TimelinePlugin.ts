// ---------------- LABEL PLUGIN ----------------
export const timelineLabelPlugin = {
    id: 'timelineLabelPlugin',
  
    afterDatasetsDraw(chart: any) {
      const { ctx } = chart;
  
      chart.data.datasets.forEach((dataset: any, datasetIndex: number) => {
        const meta = chart.getDatasetMeta(datasetIndex);
  
        meta.data.forEach((bar: any, index: number) => {
          const task = dataset.data[index];
  
          const centerX = (bar.base + bar.x) / 2;
  
          ctx.save();
          ctx.textAlign = 'center';
          ctx.font = '14px Poppins';
  
          ctx.fillStyle = '#4B5563';
          ctx.fillText(task.phase, centerX, bar.y + 24);
  
          ctx.fillStyle = '#9CA3AF';
          ctx.fillText(task.statusDate, centerX, bar.y + 40);
  
          ctx.restore();
        });
      });
    },
  };
  
  // ---------------- DOT CONNECTOR PLUGIN ----------------
  export const circleNodePlugin = {
    id: 'circleNodePlugin',
  
    afterDatasetsDraw(chart: any) {
      const { ctx } = chart;
  
      const dataset = chart.data.datasets[0];
      const meta = chart.getDatasetMeta(0);
  
      ctx.save();
  
      for (let i = 0; i < meta.data.length - 1; i++) {
        const currentBar = meta.data[i];
        const nextBar = meta.data[i + 1];
  
        const currentTask = dataset.data[i];
        const nextTask = dataset.data[i + 1];
  
        if (currentTask.y === nextTask.y) {
          const circleX = (currentBar.x + nextBar.base) / 2;
          const circleY = currentBar.y;
  
          ctx.beginPath();
          ctx.arc(circleX, circleY, 12, 0, Math.PI * 2);
          ctx.fillStyle = '#E5E7EB';
          ctx.fill();
  
          ctx.beginPath();
          ctx.arc(circleX, circleY, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#00a63e';
          ctx.fill();
        }
      }
  
      ctx.restore();
    },
  };
  
  export const xAxisBackgroundPlugin = {
    id: 'xAxisBackground',
  
    beforeDraw(chart: any) {
      const { ctx, chartArea, scales } = chart;
      const xAxis = scales.x;
  
      ctx.save();
  
      // draw background under x-axis ticks
      ctx.fillStyle = '#f3f4f6';
  
      ctx.fillRect(
        chartArea.left - 8,
        xAxis.top,
        chartArea.right + 8 - chartArea.left,
        xAxis.height,
      );
  
      ctx.restore();
    },
  };
  