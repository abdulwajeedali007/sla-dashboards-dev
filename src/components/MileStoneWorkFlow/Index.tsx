import { ChevronDown } from 'lucide-react';
import MilestoneNode from './MilestoneNode/Index';
import type { SlaTask } from '../../Types';
function Index({
  title,
  steps,
  percentage,
  mileStoneNo,
}: {
  title: string;
  steps: SlaTask[];
  percentage: number | string;
  // textColor: string;
  // bgColor: string;
  // tagColor: string;
  // bgLightColor: string;
  // borderColor: string;
  mileStoneNo: number;
}) {
  const segmentWidth = steps && 100 / steps.length;
  return (
    <>
      <div className=" border border-gray-300 overflow-hidden rounded mb-8 ">
        <div
          className={`flex items-center justify-between gap-6 bg-gray-700  p-2 mb-6 hover:cursor-pointer sm:p-4`}
        >
          <div className="flex gap-2">
            <ChevronDown color="white" />
            <h3
              className={`uppercase text-white text-base font-medium md:text-lg`}
            >
              {mileStoneNo}. {title}
            </h3>
          </div>
          <p
            className={`bg-gray-700  rounded text-xs text-white  py-2 px-2  sm:px-3 sm:text-sm`}
          >
            Completed {percentage}%
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[960px] flex items-center px-10 pt-20 pb-24 sm:pb-24 sm:px-6 sm:pt-6">
            <div className="relative h-[3px] bg-gray-600 w-full">
              {steps &&
                steps.map((step: SlaTask, index: number) => (
                  <MilestoneNode
                    step={step}
                    index={index}
                    stepNo={step.StepNumber}
                    key={step.pyGUID}
                    segmentWidth={segmentWidth}
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
