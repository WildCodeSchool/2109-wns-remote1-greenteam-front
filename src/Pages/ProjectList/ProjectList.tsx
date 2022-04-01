/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { useState } from 'react';
import {
  activeNextPageButton,
  imgprojectlist,
  inactiveNextPageButton,
} from '../../assets';
import ProjectBox from './ProjectBox';
import Dropdown from '../../components/Dropdown';
import projects from './projects.json';

export default function ProjectList(): JSX.Element {
  const status = [
    {
      id: 1,
      type: 'Not started',
    },
    {
      id: 2,
      type: 'In Progress',
    },
    {
      id: 3,
      type: 'Finished',
    },
  ];

  const date = [
    {
      id: 1,
      type: 'Least recent',
    },
    {
      id: 2,
      type: 'Most recent',
    },
  ];

  type Item = {
    id: number;
    type: string;
  };

  const [statusArray] = useState<Item[]>(status);
  const [dateArray] = useState<Item[]>(date);

  return (
    <div className=" flex flex-col w-screen h-screen gap-5 p-12">
      <div className="flex flex-row justify-evenly text-sm">
        <div className="flex flex-row h-fit items-center justify-center">
          <h1 className="lg:text-3xl sm:text-sm md:text-2xl ">Project list</h1>
          <img
            src={imgprojectlist}
            className=" w-16 h-16"
            alt="imgprojectlist"
          />
        </div>
        <div className="bg-cyan h-14 object-cover rounded-lg lg:text-sm sm:text-xs md:text-xs text-xs p-0.5 flex justify-around box-border">
          <div className="flex justify-center mx-3">
            <div className="mb-3">
              <label
                htmlFor="exampleSearch2"
                className="form-label inline-block text-cream font-bold"
              >
                Search
              </label>
              <input
                type="search"
                className="form-control block w-full p-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan focus:outline-none"
                id="exampleSearch2"
                placeholder="Type here"
              />
            </div>
          </div>

          <Dropdown items={statusArray} />
          <Dropdown items={dateArray} />
        </div>
      </div>

      <div className="w-full flex flex-row gap-5 p-2 justify-center flex-wrap">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectBox
              title={project.title}
              manager={project.manager}
              startDate={project.startDate}
              endDate={project.endDate}
            />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-row justify-center">
        <img src={activeNextPageButton} alt="activeNextPageButton" />
        <img src={inactiveNextPageButton} alt="inactiveNextPageButton" />
        <img src={inactiveNextPageButton} alt="inactiveNextPageButton" />
        <img src={inactiveNextPageButton} alt="inactiveNextPageButton" />
      </div>
    </div>
  );
}
