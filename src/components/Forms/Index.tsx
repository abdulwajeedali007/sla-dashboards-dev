import type { Dispatch, SetStateAction } from 'react';
import Dropdown from './FormComponents/DropDown';
import type { formStateType } from '../../Types';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { getProjectNames, getTaskNames, getYears } from '../../utils';

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

  const tasksNames = data ? getTaskNames(data, selected.ProjectType) : [];
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
            values={['All', ...tasksNames]}
            setSelected={setSelected}
            selected={selected.ClusterType}
          />
        </div>
        <div className="flex gap-2">
          <button
            className="py-3 px-8 border border-blue-500 text-blue-500 text-base rounded hover:bg-blue-500 hover:text-white cursor-pointer transition  "
            onClick={() => handleReset()}
          >
            Reset
          </button>
          <button
            className="py-3 px-8 border border-blue-500  bg-blue-500 text-white text-base rounded hover: hover:bg-blue-600 cursor-pointer transition  "
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
