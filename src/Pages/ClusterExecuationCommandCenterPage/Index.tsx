import {
    CircleCheckBig,
    ClipboardList,
    Clock7,
    HousePlus,
    SkipForward,
  } from 'lucide-react';
  import InfoBlock from '../../components/InfoBlock/Index';
  import MileStoneWorkFlow from '../../components/MileStoneWorkFlow/Index';
  
  import { useDispatch, useSelector } from 'react-redux';
  import type { AppDispatch, RootState } from '../../store';
  import { useEffect } from 'react';
  import { fetchSlaTasks } from '../../store/pegaSlaTasksSlice';
  import { mileStone } from '../../utils';
  import { useParams } from 'react-router';
  import type { TaskStatusCount } from '../../Types';
  
  function Index() {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams();
  
    const { loading, data } = useSelector((state: RootState) => state.slaTasks);
  
    const {
      readinessMileStonesData: initialTrackerData,
      percentageOfmilesStones: percentageOfInitialTracker,
      mileStoneName: initialTracker,
    } = mileStone(data ?? [], 'Initiate Tracker');
    const {
      readinessMileStonesData: inventoryPricingData,
      percentageOfmilesStones: percentageOfInventoryPricing,
      mileStoneName: inventoryPricing,
    } = mileStone(data ?? [], 'Inventory & Pricing Readiness');
    const {
      readinessMileStonesData: marketingReadinessData,
      percentageOfmilesStones: percentageOfMarketReadiness,
      mileStoneName: marketingReadiness,
    } = mileStone(data ?? [], 'Marketing Readiness');
  
    const {
      readinessMileStonesData: financialReadinessData,
      percentageOfmilesStones: percentageOfFinancialReadiness,
      mileStoneName: financialReadiness,
    } = mileStone(data ?? [], 'Financial Readiness');
  
    const {
      readinessMileStonesData: spaReadinessData,
      percentageOfmilesStones: percentageOfspaReadiness,
      mileStoneName: spaReadiness,
    } = mileStone(data ?? [], 'SPA Readiness');
  
    const {
      readinessMileStonesData: testBookingReadinessData,
      percentageOfmilesStones: percentageOfTestBookingReadiness,
      mileStoneName: testBookingReadiness,
    } = mileStone(data ?? [], 'Test Booking Readiness');
  
    const taskStatus = data?.reduce<TaskStatusCount>(
      (acc, item) => {
        acc[item.TaskStatus] = (acc[item.TaskStatus] || 0) + 1;
        return acc;
      },
      { Completed: 0, 'In progress': 0, New: 0 },
    ) ?? { Completed: 0, 'In progress': 0, New: 0 };
  
    const clusterPercentage = (taskStatus.Completed / 42) * 100;
  
    useEffect(() => {
      if (id) {
        dispatch(fetchSlaTasks(id));
      }
    }, [dispatch]);
    if (loading) {
      return <p className="flex h-screen justify-center items-center">LOADING</p>;
    }
  
    return (
      <>
        <div className="flex my-6">
          <h2 className="text-2xl font-medium ">
            Cluster Execution Command Center
          </h2>
        </div>
        <div className="my-6 flex flex-col gap-2  sm:flex-row sm:flex-wrap sm:gap-5 sm:px-0">
          <InfoBlock
            Icon={CircleCheckBig}
            title={'Cluster Readiness'}
            ValueColor="text-blue-700"
            value={`${clusterPercentage.toFixed(2)}% `}
            IconColor="text-white"
            IconBg="bg-blue-700"
            info={'On Track'}
          />
          <InfoBlock
            Icon={ClipboardList}
            title="Completed Steps"
            value={`${taskStatus.Completed} / 42`}
            IconColor="text-white"
            IconBg="bg-green-700"
            ValueColor="text-green-700"
            // info={'Steps'}
          />
          <InfoBlock
            Icon={Clock7}
            title="In Progess"
            value={taskStatus['In progress']}
            IconColor="text-white"
            IconBg="bg-yellow-500"
            ValueColor="text-yellow-500"
            info={'Steps'}
          />
          <InfoBlock
            Icon={HousePlus}
            title="New"
            value={taskStatus.New}
            IconColor="text-white"
            IconBg="bg-gray-500"
            ValueColor="text-gray-500"
            info={'Steps'}
          />
  
          <InfoBlock
            Icon={SkipForward}
            title="Skipped"
            value={10}
            IconColor="text-white"
            IconBg="bg-red-500"
            ValueColor="text-red-500"
            info={'Steps'}
          />
        </div>
        <div className="flex justify-center gap-4 items-center mb-6 px-4 text-wrap md:justify-start ">
          <div className="md:flex md:gap-4">
            <div className="flex items-center gap-3 md:w-auto">
              <p className="h-3 w-8 rounded bg-green-700"></p>
              <p className="text-base">Completed</p>
            </div>
            <div className="flex items-center gap-3 md:w-auto">
              <p className="h-3 w-8 rounded bg-yellow-500"></p>
              <p className="text-base">In Progress</p>
            </div>
          </div>
          <div className="md:flex md:gap-4">
            <div className="flex items-center gap-3 md:w-auto">
              <p className="h-3 w-8 rounded bg-gray-500"></p>
              <p className="text-base">New</p>
            </div>
            <div className="flex items-center gap-3 md:w-auto">
              <p className="h-3 w-8 rounded bg-red-500"></p>
              <p className="text-base">Skipped</p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <MileStoneWorkFlow
            title={initialTracker}
            percentage={percentageOfInitialTracker}
            steps={initialTrackerData}
            // textColor="text-gray-600"
            // bgColor="bg-gray-600"
            // bgLightColor="bg-gray-200"
            // tagColor="bg-gray-100"
            // borderColor="border-gray-700"
            mileStoneNo={1}
          />
          <MileStoneWorkFlow
            title={inventoryPricing}
            percentage={percentageOfInventoryPricing}
            steps={inventoryPricingData}
            mileStoneNo={2}
          />
          <MileStoneWorkFlow
            title={marketingReadiness}
            percentage={percentageOfMarketReadiness}
            steps={marketingReadinessData}
            mileStoneNo={3}
          />
          <MileStoneWorkFlow
            title={financialReadiness}
            percentage={percentageOfFinancialReadiness}
            steps={financialReadinessData}
            mileStoneNo={4}
          />
          <MileStoneWorkFlow
            title={spaReadiness}
            percentage={percentageOfspaReadiness}
            steps={spaReadinessData}
            mileStoneNo={5}
          />
          <MileStoneWorkFlow
            title={testBookingReadiness}
            percentage={percentageOfTestBookingReadiness}
            steps={testBookingReadinessData}
            mileStoneNo={6}
          />
        </div>
      </>
    );
  }
  
  export default Index;
  