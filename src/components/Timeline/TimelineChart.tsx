// TimelineChart.tsx
import { Bar } from 'react-chartjs-2';

type Props = {
  data: any;
  options: any;
  plugins?: any[];
  height: number;
};

export default function TimelineChart({
  data,
  options,
  plugins = [],
  height,
}: Props) {
  return (
    <div
      style={{
        height,
      }}
    >
      <Bar data={data} options={options} plugins={plugins} />
    </div>
  );
}
