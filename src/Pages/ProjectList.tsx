import React from 'react'
import './projectList.css'
import { calendarIcon, imgprojectlist } from '../assets'

export default function ProjectList(): JSX.Element {


  return <div className='projectlist-container'>
    <div className='projectlist-title'>
      <span>Project list</span>
      <img src={imgprojectlist} className='imgtitle' alt="" />
    </div>
    <div className="searchbar" >
      <div className='search'>a</div>
      <div className='status'>b</div>
      <div className='sort-date'>c</div>
    </div>
    <div className='projectlist'>
      <div className="project-slot">
        <div className="project-title">peroject title</div>
        <div className='progress'>progess</div>
        <div className='managedby'>managed by</div>
        <div className='date-start-end'>
          <div className='start-date'>
            <div className="date-img">
              <img src={calendarIcon} alt="" className='imgdate' />
              <span>Start Date</span>

            </div>
            <div>Details</div>
          </div>
          <div className='end-date'>
            <div className="date-img">
              <img src={calendarIcon} alt="" className='imgdate' />
              <span>end Date</span>

            </div>
            <div>Backlog</div>
          </div>
        </div>
      </div>

    </div>
  </div>
}
