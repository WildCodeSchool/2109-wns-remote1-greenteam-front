import React from "react";
import profilpic from '../../assets/icons/profile-pic.svg'

export default function MembersComponent({ members }: any): JSX.Element {
    const memberz = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "c" }, { name: "c" }, { name: "c" }, { name: "c" }]

    return (<>
        <div className='flex flex-col justify-between h-2/6 border-solid border-2 rounded-xl border-lightgray p-2 overflow-y-auto'>
            <div className='flex flex-row justify-between w-full flex-1'><span className=''>project members :</span> <span className='text-right'>add members :</span></div>
            <div className='flex flex-row flex-wrap flex-2'>
                {memberz.map((member, index: any) => <div className='flex flex-row flex-wrap  w-1/3'>
                    <img alt={index} src={profilpic} className='flex w-1/3 h-1/3' /><span className='flex-2'>{member.name}</span>
                </div>)}
            </div>
        </div>
    </>);
}
