import React from 'react';
import ContentComponent from './ContentComponent';
import { HomePageProps } from './HomePageProps';


export default function HomePage({ name }: Partial<HomePageProps>): JSX.Element {
  const contents = [{
    imgsrc: "https://www.google.com/chrome/static/images/intl/fr_FR/homepage/laptop_desktop.png",
    text: "hello"
  },
  {
    imgsrc: "https://www.google.com/chrome/static/images/intl/fr_FR/homepage/laptop_desktop.png",
    text: "hey"
  }]

  return (
    <div className='flex flex-col w-screen h-screen align-around justify-between'>

      <div className='flex flex-row w-full justify-end flex-initial'>
        <div className=''>auth</div>
      </div>
      <div className='font-poppins flex text-titlesize justify-center items-center content-center   h-2/6'>
        <p>Welcome {name} ! Ready to smash your goals?</p></div>
      <div className='flex flex-row justify-around flex-wrap  h-3/5 content-start'>
        {contents.map(({ imgsrc, text }) => <ContentComponent imgsrc={imgsrc} text={text} />
        )}


      </div>

    </div>


  );
}
