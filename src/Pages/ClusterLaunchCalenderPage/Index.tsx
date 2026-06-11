import { useMemo, useState } from 'react';

import { fetchcalenderLaunch } from '../../store/calenderlaunchSlice';

import Timeline from '../../components/Timeline/Index';
import InfoBlock from '../../components/InfoBlock/Index';
import FormFilter from '../../components/Forms/Index';

import {
  Boxes,
  CalendarDays,
  CircleCheckBig,
  // Info,
  // InfoIcon,
  TriangleAlert,
} from 'lucide-react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../store';
import type { formStateType } from '../../Types';
import { Link } from 'react-router';
import { getYears, getFilterFormOptions, currentDate } from '../../utils';

function Index() {
  const { currentYear } = getYears();
  const [selected, setSelected] = useState<formStateType>({
    Year: currentYear,
    ProjectType: 'All',
    ClusterType: 'All',
    ClusterRegion: 'United Arab Emirates',
  });

  const [appliedFilter, setAppliedFilter] = useState({
    Year: currentYear,
    ProjectType: 'All',
    ClusterType: 'All',
    ClusterRegion: 'United Arab Emirates',
  });
  // console.log(appliedFilter, selected);
  const dispatch = useAppDispatch();
  const { data, loading } = useSelector(
    (state: RootState) => state.calenderLaunch,
  );
  function handleApplyClickButton() {
    setAppliedFilter(selected);
  }

  const timelineData = useMemo(() => {
    if (!data) return [];
    return data ? getFilterFormOptions(data, appliedFilter, currentYear) : [];
  }, [data, appliedFilter]);

  function handleResetClickButton() {
    const defaultFilter = {
      Year: currentYear,
      ProjectType: 'All',
      ClusterType: 'All',
      ClusterRegion: 'All',
    };

    setSelected(defaultFilter);
    setAppliedFilter(defaultFilter);
  }

  useEffect(() => {
    dispatch(fetchcalenderLaunch());
  }, []);

  if (loading) {
    return <p className="flex h-screen justify-center items-center">LOADING</p>;
  }

  return (
    <>
      <div className="my-6 flex flex-col justify-between items-start  sm:flex-row sm:px-0 sm:flex-center">
        <div className="flex items-center gap-1 sm:gap-2 sm:flex-row">
          <h2 className="text-2xl font-medium ">Cluster Launch Calender</h2>
          {/* <Info className="cursor-pointer" /> */}
        </div>
        <p className="text-base text-gray-400">{`Last Updated: ${currentDate}`}</p>
      </div>
      <div className="mb-6 flex flex-col gap-2  sm:flex-row sm:flex-wrap sm:gap-5 sm:px-0">
        <InfoBlock
          Icon={Boxes}
          title="Overall Clusters Getting Launched"
          value={42}
          IconColor="text-green-700"
          border
        />
        <InfoBlock
          Icon={CalendarDays}
          title={'Upcoming Launches'}
          value={23}
          IconColor="text-blue-700"
          border
        />
        <InfoBlock
          Icon={CircleCheckBig}
          title="Ready To Accept Bookings"
          value={10}
          IconColor="text-green-700"
          border
        />
        <InfoBlock
          Icon={TriangleAlert}
          title="Delayed Clusters"
          value={2}
          IconColor="text-red-700"
          border
        />
      </div>
      {/* <div className=""> */}
      <FormFilter
        selected={selected}
        setSelected={setSelected}
        handleApply={handleApplyClickButton}
        handleReset={handleResetClickButton}
      />
      {/* </div> */}

      <div className="mb-6 p-3 shadow rounded">
        {timelineData && timelineData.length === 0 ? (
          <p className="flex h-screen justify-center items-start font-bold">
            No Data Found!
          </p>
        ) : (
          <>
            <div className="flex items-center flex-col justify-between mb-10 md:flex-col lg:flex-row ">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium uppercase mb-3 sm:mb-0">
                  PROJECT & CLUSTER LAUNCH TIMELINE
                </h3>
                {/* <Info className="cursor-pointer" /> */}
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
                    <div className="h-full w-full rounded-full bg-yellow-500"></div>
                  </div>
                  <p className="text-xs sm:text-base">Marketing Launch Ready</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 border border-gray-400 rounded-full p-[2px]">
                    <div className="h-full w-full rounded-full bg-green-700"></div>
                  </div>
                  <p className="text-xs sm:text-base">Booking Launch Ready</p>
                </div>
              </div>
            </div>
            <div className="my-6 sm:p-3 rounded">
              {data && <Timeline timelineTasks={timelineData} />}
            </div>
          </>
        )}
      </div>
      <div className="mt-5 mb-10 ">
        <div className="flex gap-2 items-center">
          {/* <InfoIcon color="blue" /> */}
          <div>
            <Link to={'/cluster-overview'} className="text-blue-700 underline">
              Click Here{' '}
            </Link>
            <p className="inline">
              to know more about project wise cluster details{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
