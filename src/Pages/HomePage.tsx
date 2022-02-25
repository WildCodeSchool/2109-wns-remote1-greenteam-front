import React from 'react';
import pic1 from '../assets/pictures/homepage/pic1.svg';
import pic2 from '../assets/pictures/homepage/pic2.svg';

interface HomePageProps {
  name: string;
}

export default function HomePage({ name }: HomePageProps): JSX.Element {
  const contents = [
    {
      key: 0,
      imgsrc: pic1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      key: 1,
      imgsrc: pic2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="w-full">
        <h1 className="text-5xl text-center mt-14">
          Welcome {name} ! Ready to smash your goals?
        </h1>
      </div>

      <div className="flex h-full w-full justify-center items-center">
        <div className="flex flex-row justify-around items-center">
          {contents.map(({ imgsrc, text, key }) => (
            <div key={key} className="w-1/3 flex flex-col items-center">
              <img alt="home-img" src={imgsrc} />
              <p className="text-lg text-center mt-6">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
