import React from 'react';
import projectDetailsPic from '../assets/pictures/projectdetails/detailpic.svg';
import Loading from '../components/Loading';
import profilePic from '../assets/icons/profile-pic.svg';
import projects from './ProjectList/projects.json';

const project = projects[0];

export default function ProjectDetails(): JSX.Element {
  const progressBar = (progressPercentage: number) => {
    const progressStyle = {
      '--value': progressPercentage,
      '--size': '8rem',
    } as React.CSSProperties;
    return (
      <div
        className={`radial-progress ${
          progressPercentage < 70 ? 'text-error' : 'text-success'
        }`}
        style={progressStyle}
      >
        {progressPercentage}%
      </div>
    );
  };
  return (
    <div className="p-12">
      {project ? (
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-2 place-content-stretch justify-center">
          {/* Box 1 -- Details */}
          <div className="flex flex-col justify-evenly">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <h2 className="text-lg font-bold">
              Project Manager: {project.manager}
            </h2>
            <div>
              <p className="font-bold text-lg mb-2">Description</p>
              <p className="text-base italic">{project.description}</p>
            </div>
          </div>
          {/* Box 2 -- Project Picture */}
          <div className="flex justify-center">
            <img
              src={project.picture ? project.picture : projectDetailsPic}
              alt="projectDetailsPic"
            />
          </div>
          {/* Box 3 -- Stats */}
          <div className="grid grid-cols-2 gap-4 place-content-stretch">
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-lg mb-2">Start</p>
              <p className="text-base">{project.startDate}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-lg mb-2">End</p>
              <p className="text-base">{project.endDate}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-lg mb-4">Time spent</p>
              <div>{progressBar(project.timeSpent)}</div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-lg mb-4">Finished tasks</p>
              <div>{progressBar(project.finishedTickets)}</div>
            </div>
          </div>
          {/* Box 4 -- Members */}
          <div>
            <p className="font-bold text-lg flex justify-center mt-3 mb-5">
              Members
            </p>
            <div className="flex flex-row flex-wrap items-center">
              {project.members?.map((member) => (
                <div className="flex flex-row justify-center items-center m-2">
                  <div className="m-3">
                    <img
                      alt="profilePic"
                      src={member.picture ? member.picture : profilePic}
                    />
                  </div>
                  <p className="text-base">
                    {member.firstName} {member.lastName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
