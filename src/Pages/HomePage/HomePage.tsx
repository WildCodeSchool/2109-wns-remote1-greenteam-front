import React from 'react';
import ContentComponent from './ContentComponent';
import { HomePageProps } from './HomePageProps';
import pic1 from '../../assets/pictures/homepage/pic1.svg'
import pic2 from '../../assets/pictures/homepage/pic2.svg'


export default function HomePage({ name }: Partial<HomePageProps>): JSX.Element {
  const contents = [{
    imgsrc: pic1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
  },
  {
    imgsrc: pic2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
  }]

  return (
    <div className='flex flex-col w-screen h-screen align-around justify-between'>

      <div className='flex flex-row w-full justify-end flex-initial'>
        <div className=''><span>a</span> <span>b</span></div>
      </div>
      <div className='font-poppins text-5xl flex justify-center items-center content-center   h-1/6'>
        <h1>Welcome {name} ! Ready to smash your goals?</h1></div>
      <div className='flex flex-row justify-around items-baseline h-4/6 '>
        {contents.map(({ imgsrc, text }) => <ContentComponent imgsrc={imgsrc} text={text} />
        )}


      </div>

    </div>


  );
}
