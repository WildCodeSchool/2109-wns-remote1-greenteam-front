import React from "react";
import { verticalShowIcon } from "../../assets";
import profilpic from '../../assets/icons/profile-pic.svg'

export default function MembersComponent({ members }: any): JSX.Element {
    const memberz = [{ name: "amine" }, { name: "anojan" }, { name: "nora" }, { name: "valere" }, { name: "sarah" }, { name: "benoit" }, { name: "c" }]

    return (<>
        <div className='flex flex-col justify-between gap-10 h-80 border-solid border-2 rounded-xl border-lightgray p-2 '>
            <div className="flex flex-row justify-between"><span className=''>project members :</span>
                <div className='flex flex-row border-2 rounded-sm justify-end'>
                    <input className='bg-white text-right' type="button" value="add member" />
                    <img className="border-l-2" src={verticalShowIcon} alt="" />
                </div>
            </div>

            <div className='flex flex-wrap box-border pl-1 lg:flex-row md:flex-row flex-col justify-between overflow-y-auto'>
                {memberz.map((member, index: any) => <div className='flex flex-row flex-wrap w-1/3'>
                    <img alt={index} src={profilpic} className='flex w-1/3 h-1/3' /><span className='flex-2'>{member.name}</span>
                </div>)}
            </div>
        </div>
    </>);
}
