import type { SlaTask } from '../../../Types';

function Index({
  step,
  segmentWidth,
  index,
  stepNo,
}: {
  step: SlaTask;
  index: number;
  stepNo: string;
  segmentWidth: number;
}) {
  let bgColor =
    step.TaskStatus === 'Completed'
      ? 'bg-green-500'
      : step.TaskStatus === 'In progress'
        ? 'bg-yellow-500'
        : 'bg-gray-500';

  let left = (index + 1 - 1) * segmentWidth;

  return (
    <>
      <div
        style={{ left: `${left}%`, width: `${segmentWidth}%` }}
        className={`absolute h-[4px]   flex flex-col items-center ${bgColor}`}
      >
        <div className="absolute top-1/2 -translate-y-1/2 flex flex-col   items-center">
          <div
            className={`h-6 w-6 rounded-full text-xs  text-white flex justify-center items-center ${bgColor} hover: cursor-pointer hover:bg-gray-800`}
          >
            {stepNo}
          </div>

          <p
            className={`absolute text-[10px] font-semibold w-23 text-center left-1/2 -translate-x-1/2 md:top-6  ${
              index % 2 === 0 ? '-top-16' : 'top-8'
            }`}
          >
            {step.TaskName}
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
