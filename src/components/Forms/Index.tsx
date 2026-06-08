import type { Dispatch, SetStateAction } from 'react';
import Dropdown from './FormComponents/DropDown';
import type { formStateType } from '../../Types';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import {
  getProjectNames,
  getTaskNames,
  getYears,
  getRegionNames,
} from '../../utils';

type formStateValues = {
  selected: formStateType;
  setSelected: Dispatch<SetStateAction<formStateType>>;
  handleApply: () => void;
  handleReset: () => void;
};

function Index({
  selected,
  setSelected,
  handleApply,
  handleReset,
}: formStateValues) {
  const { data } = useSelector((state: RootState) => state.calenderLaunch);

  const { years } = getYears();
  const projectNames = data ? getProjectNames(data, selected.Year) : [];
  const clusterNames = data ? getTaskNames(data, selected.ProjectType) : [];
  const clusterRegion = data ? getRegionNames(data, selected.ProjectType) : [];
  return (
    <>
      <div className="mb-6 flex rounded p-8 bg-gray-200 flex-col items-center justify-between lg:flex-row md:flex-row md:items-center ">
        <div className="flex items-center gap-2 flex-col mb-4 sm:flex-row sm:mb-0 md:mb-3 ">
          <Dropdown
            label={'Year'}
            field="Year"
            values={years}
            setSelected={setSelected}
            selected={selected.Year}
          />
          <Dropdown
            label={'Project Type'}
            field="ProjectType"
            values={['All', ...projectNames]}
            setSelected={setSelected}
            selected={selected.ProjectType}
          />
          <Dropdown
            label={'Cluster Type'}
            field="ClusterType"
            values={['All', ...clusterNames]}
            setSelected={setSelected}
            selected={selected.ClusterType}
          />
          <Dropdown
            label={'Region'}
            field="ClusterRegion"
            values={['All', ...clusterRegion]}
            setSelected={setSelected}
            selected={selected.ClusterRegion}
          />
        </div>
        <div className="flex gap-2">
          <button
            className="py-3 px-8 border border-gray-500 text-gray-900 text-base rounded hover:bg-gray-900 hover:text-white cursor-pointer transition  "
            onClick={() => handleReset()}
          >
            Reset
          </button>
          <button
            className="py-3 px-8 border border-gray-500  bg-gray-800 text-white text-base rounded hover: hover:bg-gray-900 cursor-pointer transition  "
            onClick={() => handleApply()}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default Index;
