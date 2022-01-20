import React from 'react';
import MembersComponent from './MembersComponent';

export default function DetailComponent(): JSX.Element {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <div className='h-full w-4/5 flex flex-col p-6 justify-between border-solid border-2 rounded-xl border-lightgray '>
                <div><span>project owner :</span> <span>nameeeee</span></div>
                <div className=''><span>description :</span>
                    <p> alalalalalala htresm gmrmzemz l alalalalalala htresm gmrmzemz leezkzak eozasm fezka mgezks mfzk pla alalalalalala htresm gmrmzemz leezkzak eozasm fezka mgezks mfzk pla
                        alalalalalala htresm gmrmzemz leezkzak eozasm fezka mgezks mfzk pla</p>
                </div>


                <div className='flex flex-col'>
                    <div className='flex flex-row w-3/5 justify-between'><span className=''>pourcentage task accepted :</span><span className='text-right'>25 days</span></div>
                    <div className='flex flex-row w-3/5 justify-between'><span className=''>pourcentage task accepted :</span><span className='text-right'>25 days</span></div>
                    <div className='flex flex-row w-3/5 justify-between'><span className=''>pourcentage task accepted :</span><span className='text-right'>25 days</span></div>
                    <div className='flex flex-row w-3/5 justify-between'><span className=''>pourcentage task accepted :</span><span className='text-right'>25</span></div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row w-3/5 justify-between'><span className=''>date:</span><span className='text-right'>25 days</span></div>
                    <div className='flex flex-row w-3/5 justify-between'><span className=''>date:</span><span className='text-right'>25 days</span></div>
                </div>

                <MembersComponent />
            </div>



        </div>);
}
