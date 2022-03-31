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
    <div className="hero min-h-screen overflow-auto bg-base-600">
      {project ? (
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={project.picture ? project.picture : projectDetailsPic}
            alt="projectDetailsPic"
            className="w-260 h-400 max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p>{project.description}</p>

            <div className="flex flex-row">
              <div className="flex flex-col items-center">
                <p className="font-bold">Start</p>
                <p>{project.startDate}</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="font-bold">End</p>
                <p>{project.endDate}</p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col items-center">
                <p className="font-bold">Time spent</p>
                <div>{progressBar(project.timeSpent)}</div>
              </div>

              <div className="flex flex-col items-center">
                <p className="font-bold">Finished tasks</p>
                <div>{progressBar(project.finishedTickets)}</div>
              </div>
            </div>

            <div className="h-1/3">
              <p>Members</p>
              {project.members?.map((member) => (
                <div className="flex flex-col flex-wrap w">
                  <img
                    alt="profilePic"
                    src={member.picture ? member.picture : profilePic}
                    className="flex w-1/6 h-1/6"
                  />
                  <p>
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
