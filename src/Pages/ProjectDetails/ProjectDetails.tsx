import React from 'react';
import DetailComponent from './DetailComponent';
import projectDetailsPic from '../../assets/pictures/projectdetails/detailpic.svg';

export default function ProjectDetails(): JSX.Element {
  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <div className="flex justify-center align-center items-center h-1/6">
        <p className="min-w-fitcontent max-w-full text-4xl">Project Title</p>
      </div>
      <div className="flex lg:flex-row gap-5 md:flex-row sm:flex-col flex-col w-full h-5/6 justify-around items-center">
        <div className="flex flex-row w-1/4 h-4/5">
          <img src={projectDetailsPic} alt="projectDetailsPic" />
        </div>
        <DetailComponent />
      </div>
    </div>
  );
}
