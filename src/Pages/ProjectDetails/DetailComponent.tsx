import React from 'react';
import MembersComponent from './MembersComponent';

export default function DetailComponent(): JSX.Element {
  return (
    <div className="h-full overflow-y-auto gap-4 text-sm sm:text-sm md:text-xs lg:text-sm w-11/12 flex mr-10 flex-col p-6 justify-between border-solid border-2 rounded-xl border-lightgray ">
      <div>
        <span>Project owner :</span> <span>greenteam</span>
      </div>
      <div className="">
        <span>description :</span>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ante
          sapien. Aliquam non cursus odio. Morbi finibus, ligula eget mattis
          mollis, nibh eros efficitur arcu, at mollis ex eros eu quam. Mauris
          varius nec mauris at accumsan. In iaculis ullamcorper nisl id
          volutpat. Etiam luctus consequat elit, eget accumsan mi pellentesque
          quis. Vestibulum mollis maximus tortor, rutrum feugiat nisi tempor
          nec. Maecenas non mi orci. Aenean vestibulum metus lobortis quam
          egestas suscipit. Nunc lacinia tristique metus. Vestibulum luctus nisi
          a libero efficitur mattis.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row w-3/5 justify-between">
          <span className="">Initial Time Spent Estimee :</span>
          <span className="text-right">25 days</span>
        </div>
        <div className="flex flex-row w-3/5 justify-between">
          <span className="">Total Time Spent :</span>
          <span className="text-right">20 Days</span>
        </div>
        <div className="flex flex-row w-3/5 justify-between">
          <span className="">Percentage Time Spent :</span>
          <span className="text-right">80%</span>
        </div>
        <div className="flex flex-row w-3/5 justify-between">
          <span className="">Percentage Tasks Accomplished :</span>
          <span className="text-right">80%</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row w-3/5 justify-between">
          <span className="">Date Start :</span>
          <span className="text-right">01/11/2021</span>
        </div>
        <div className="flex flex-row w-3/5 justify-between">
          <span className="">Date End :</span>
          <span className="text-right">01/05/2022</span>
        </div>
      </div>

      <MembersComponent />
    </div>
  );
}
