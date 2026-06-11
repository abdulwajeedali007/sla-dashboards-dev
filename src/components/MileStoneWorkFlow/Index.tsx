import { ListTodo } from 'lucide-react';
import MilestoneNode from './MilestoneNode/Index';
import type { SlaTask } from '../../Types';
function Index({
  title,
  steps,
  percentage,
  // mileStoneNo,
}: {
  title: string;
  steps: SlaTask[];
  percentage: number | string;
  // textColor: string;
  // bgColor: string;
  // tagColor: string;
  // bgLightColor: string;
  // borderColor: string;
  // mileStoneNo: number;
}) {
  const segmentWidth = steps.length > 1 ? 100 / (steps.length - 1) : 100;
  return (
    <>
      <div className=" border border-gray-300 overflow-hidden rounded mb-8 ">
        <div
          className={`flex items-center justify-between gap-6 bg-gray-700  p-2 mb-6  sm:p-4`}
        >
          <div className="flex gap-2">
            <ListTodo color="white" />
            <h3
              className={`uppercase text-white text-base font-medium md:text-lg`}
            >
              {title}
            </h3>
          </div>
          <p
            className={`bg-gray-600  rounded text-xs text-white  py-2 px-2  sm:px-3 sm:text-sm`}
          >
            Completed {percentage}%
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[960px] flex items-center pt-20 pb-24 sm:pb-24 sm:px-6 sm:pt-6 ">
            <div className="relative h-[3px] bg-gray-600 w-full mx-10 md:mx-5 ">
              {steps &&
                steps.map((step: SlaTask, index: number) => (
                  <MilestoneNode
                    key={step.pyGUID}
                    step={step}
                    index={index}
                    stepNo={step.StepNumber}
                    segmentWidth={segmentWidth}
                    totalSteps={steps.length}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
