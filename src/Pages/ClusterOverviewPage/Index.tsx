import { Info, InfoIcon } from 'lucide-react';
import ClusterOverview from '../../components/ClusterOverview/Index';
import FormFilter from '../../components/Forms/Index';
import type { formStateType } from '../../Types';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../store';
import { fetchcalenderLaunch } from '../../store/calenderlaunchSlice';
import { currentDate, getFilterFormOptions, getYears } from '../../utils';

function Index() {
  const { currentYear } = getYears();
  const [selected, setSelected] = useState<formStateType>({
    Year: currentYear,
    ProjectType: 'All',
    ClusterType: 'All',
    ClusterRegion: 'United Arab Emirates',
  });

  const [appliedFilter, setAppliedFilter] = useState<formStateType>({
    Year: currentYear,
    ProjectType: 'All',
    ClusterType: 'All',
    ClusterRegion: 'United Arab Emirates',
  });
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
      ClusterRegion: 'United Arab Emirates',
    };

    setSelected(defaultFilter);
    setAppliedFilter(defaultFilter);
  }

  useEffect(() => {
    dispatch(fetchcalenderLaunch());
  }, [dispatch]);

  if (loading) {
    return <p className="flex h-screen justify-center items-center">LOADING</p>;
  }

  return (
    <>
      <div className="my-6 flex flex-col justify-between items-start sm:flex-row sm:px-0 sm:items-center">
        <div className="flex items-center gap-1 sm:gap-2 sm:flex-row">
          <h2 className="text-2xl font-medium">Cluster Launch Overview</h2>
          <Info className="cursor-pointer" />
        </div>
        <p className="text-base text-gray-400">{`Last Updated: ${currentDate}`}</p>
      </div>
      {/* <div className="px-10 py-8 mb-6 bg-gray-100 rounded "> */}
      <FormFilter
        selected={selected}
        setSelected={setSelected}
        handleApply={handleApplyClickButton}
        handleReset={handleResetClickButton}
      />
      {/* </div> */}
      {/* <div className="flex gap-4 justify-end items-center mb-4">
        <div className="flex items-center gap-2">
          <p className="bg-yellow-500  h-3 w-10 rounded"></p>
          <p className="text-xs sm:text-base">Marketing Ready</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="bg-green-700  h-3 w-10 rounded"></p>
          <p className="text-xs sm:text-base">Booking Ready</p>
        </div>
      </div> */}

      {timelineData && timelineData.length === 0 ? (
        <p className="flex h-screen justify-center items-start font-bold">
          No Data Found!
        </p>
      ) : (
        <>
          <div className="mt-10 mb-2">
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <InfoIcon color="blue" size={16} />
              Click! Get more details about cluster.
            </p>
          </div>
          <div className="mb-6">
            {data && <ClusterOverview timelineTasks={timelineData} />}
          </div>
        </>
      )}
    </>
  );
}

export default Index;
