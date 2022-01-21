import React from 'react';
// 
export default function ContentComponent({ imgsrc, text }: Partial<any>): JSX.Element {

    return (<>
        <div className='h-full w-1/3 flex flex-col   items-center flex-nowrap'>
            <img alt="home-img" src={imgsrc} />
            <p className='text-lg text-center mt-6'>{text}</p>
        </div>
    </>)
}
