import React from 'react';
import DetailComponent from './DetailComponent';

export default function ProjectDetails(): JSX.Element {
  return (
    <div className='flex flex-col w-screen h-screen justify-between'>
      <div className='flex justify-center align-center items-center h-1/6' >
        <p className='min-w-fitcontent max-w-full'>project title</p>
      </div>
      <div className='flex flex-row  w-full h-4/5 justify-around items-center'>
        <div className='flex-1 h-4/5'><img src="https://www.google.com/chrome/static/images/intl/fr_FR/homepage/laptop_desktop.png" alt="" /></div>
        <div className='flex-1 h-4/5 flex-col flex'><DetailComponent /></div>
      </div>
    </div>);
}
