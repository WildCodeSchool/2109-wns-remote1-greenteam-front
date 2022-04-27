import React from 'react';
import { useNavigate } from 'react-router-dom';
import { calendarIcon } from '../../assets';

interface Project {
  title: string;
  manager: string;
  startDate: string;
  endDate: string;
}

export default function ProjectBox({
  title,
  manager,
  startDate,
  endDate,
}: Project): JSX.Element {
  const navigate = useNavigate();

  const goToProjectDetails = () => {
    navigate('/projectdetails');
  };

  const goToBacklog = () => {
    navigate('/backlog');
  };
  return (
    <div className="shadow-lg rounded-xl flex p-2 lg:text-sm sm:text-xs md:text-sm text-xs flex-col gap-2 w-18 bg-lightgray">
      <p>{title}</p>
      <p className="font-bold">In Progress</p>
      <div className="flex">
        <p className="font-bold">Lead:&nbsp;</p>
        <p>{manager}</p>
      </div>
      <div className="flex flex-row h-16 justify-around">
        <div className="flex flex-col justify-between">
          <div className=" flex flex-row gap-2">
            <img src={calendarIcon} alt="calendarIcon" />
            <div className="flex flex-col">
              <p className="whitespace-nowrap font-bold">Start Date</p>
              <p className="whitespace-nowrap">{startDate}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={goToProjectDetails}
            className="bg-cyan hover:bg-orange rounded-md w-28 text-white font-bold"
          >
            Details
          </button>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-row gap-2">
            <img src={calendarIcon} alt="calenderIcon" />
            <div className="flex flex-col">
              <p className="whitespace-nowrap font-bold">End Date</p>
              <p className="whitespace-nowrap">{endDate}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={goToBacklog}
            className="bg-cyan hover:bg-orange rounded-md w-28 text-white font-bold"
          >
            Backlog
          </button>
        </div>
      </div>
    </div>
  );
}
