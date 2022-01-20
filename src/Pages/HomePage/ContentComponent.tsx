import React from 'react';
// 
export default function ContentComponent({ imgsrc, text }: Partial<any>): JSX.Element {

    return (<>
        <div className='h-4/6 flex flex-col justify-between'>
            <img className='w-homeimgwidth h-homeimgheight ' alt="" src={imgsrc} />
            <p className='text-textelementsize'>{text}</p>
        </div>
    </>)
}
