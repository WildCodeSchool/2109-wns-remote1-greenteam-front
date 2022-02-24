import React from 'react'


import { calendarIcon, imgprojectlist, searchIcon } from '../../assets'
import ProjectBox from './ProjectBox'



export default function ProjectList(): JSX.Element {


  return <div className=' flex flex-col h-full w-full gap-2'>
    <div className='flex flex-row w-full h-fit items-center justify-center'>
      <h1 className='lg:text-3xl sm:text-sm md:text-2xl '>Project list</h1>
      <img src={imgprojectlist} className=' w-16 h-16' alt="" />
    </div>
    <div className='w-full flex flex-row justify-center items-center'>
      <div className="bg-cyan h-16 rounded-md lg:text-sm sm:text-xs md:text-xs text-xs  flex flex-row max-w-full box-border" >
        <div className='flex p-1  flex-col flex-1'>
          <span>Search</span>
          <div className='flex flex-row max-w-full box-border'>
            <input type="text" className='rounded-md w-full h-1/2 box-border' placeholder='entrer du text' />
            <img className='w-1/3 h-1/4' alt='' src={searchIcon} />
          </div>

        </div>
        <div className='flex p-1  flex-col flex-1'>
          <span>Search55</span>
          <div className=' flex flex-row max-w-full'>
            <input type="text" className='rounded-md w-full h-1/2' placeholder='entrer du text' />
            <img className=' w-1/3 h-1/4' alt='' src={searchIcon} />
          </div>
        </div>
        <div className='flex p-1 flex-col flex-1'>
          <span>Search</span>

          <div className=' flex flex-row max-w-full'>
            <input type="text" className='rounded-md w-full h-1/2' placeholder='entrer du text' />
            <img className='w-1/3 h-1/4' alt='' src={searchIcon} />
          </div>
        </div>
      </div>
    </div>

    <div className='w-full flex flex-row gap-5 p-2 justify-start flex-wrap '>
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />

    </div>
    <div>balls </div>
  </div>

}
