import React from 'react';

export default function MembersComponent({ members }: any): JSX.Element {
    const memberz = [{ name: "a" }, { name: "b" }, { name: "c" }]

    return (<>
        <div className='flex flex-col'>
            <div className='flex flex-row'><p>project members</p><div>add members</div></div>
            <div className='flex flex-row flex-wrap'>
                {memberz.map((member, index: any) => <div>
                    <img alt={index} /><span>{member.name}</span>
                </div>)}
            </div>
        </div>
    </>);
}
