import './projectList.css'

import React from 'react'
import { calendarIcon, imgprojectlist, searchIcon } from '../../assets'

export default function ProjectBox(): JSX.Element {

    return <div className=" rounded-md flex p-2 lg:text-sm sm:text-xs md:text-sm text-xs  flex-col gap-2 w-80 box-border bg-lightgray">
        <span className=''>project title</span>
        <span className=''>progess</span>
        <span className=''>managed by</span>
        <div className='flex flex-row h-16  justify-around' >
            <div className='flex flex-col justify-between'>
                <div className=" flex flex-row gap-2">
                    <img src={calendarIcon} alt="" className='flex-1' />
                    <span className='flex-2 whitespace-nowrap'>Start Date</span>

                </div>
                <input type="button" className='bg-cyan rounded-md w-28 text-white' value="Detail" />
            </div>
            <div className='flex flex-col justify-between'>
                <div className="flex flex-row gap-2">
                    <img src={calendarIcon} alt="" className='flex-1' />
                    <span className='flex-2 whitespace-nowrap'>end Date</span>

                </div>
                <input className="bg-cyan rounded-md w-28 text-white" type="button" value="Backlog" />
            </div>
        </div>
    </div>
}