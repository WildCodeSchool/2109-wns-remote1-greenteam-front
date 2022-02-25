import React from 'react';
import { useNavigate } from 'react-router-dom';
import { calendarIcon } from '../../assets';

export default function ProjectBox({
  title,
  manager,
}: {
  title: string;
  manager: string;
}): JSX.Element {
  const navigate = useNavigate();

  const goToProjectDetails = () => {
    navigate('/projectdetails');
  };
  return (
    <div className="shadow-lg rounded-xl flex p-2 lg:text-sm sm:text-xs md:text-sm text-xs flex-col gap-2 w-80 bg-lightgray">
      <span className="">Project title : {title}</span>
      <span className="">In Progress</span>
      <span className="">Managed by : {manager}</span>
      <div className="flex flex-row h-16  justify-around">
        <div className="flex flex-col justify-between">
          <div className=" flex flex-row gap-2">
            <img src={calendarIcon} alt="calendarIcon" className="flex-1" />
            <span className="flex-2 whitespace-nowrap">Start Date</span>
          </div>
          <button
            type="button"
            onClick={goToProjectDetails}
            className="bg-cyan rounded-md w-28 text-white"
          >
            Details
          </button>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-row gap-2">
            <img src={calendarIcon} alt="calenderIcon" className="flex-1" />
            <span className="flex-2 whitespace-nowrap">End Date</span>
          </div>
          <button className="bg-cyan rounded-md w-28 text-white" type="button">
            Backlog
          </button>
        </div>
      </div>
    </div>
  );
}
