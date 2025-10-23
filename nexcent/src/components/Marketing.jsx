import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function Marketing() {
  const setDatas = [
    {
      image: 'images/image 18.png',
      name: 'Creating Streamlined Safeguarding Processes with OneRen',
    },
    {
      image: 'images/image 19.png',
      name: 'What are your safeguarding responsibilities and how can you manage them?',
    },
    {
      image: 'images/image 20.png',
      name: 'Revamping the Membership Model with Triathlon Australia',
    },
  ];

  return (
    <div className="bg-white px-4 md:px-24 py-12">
      <p className="text-3xl text-center font-semibold my-3">
        Caring is the new marketing
      </p>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 line-clamp-4">
        The Nextcent blog is the best place to read about the latest membership insights,
        trends and more. See who's joining the community, read about how our community
        are increasing their membership income and lot's more.
      </p>

      <div className="flex flex-wrap justify-center gap-16">
        {setDatas.map((e, i) => (
          <Card key={i} {...e} />
        ))}
      </div>
    </div>
  );
}

function Card({ image, name }) {
  return (
    <div className="w-full max-w-[320px]">
      <div className="relative">
        <img
          src={image}
          alt="Card"
          className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-105"
        />

        <div className="relative -mt-8 z-10 mx-auto w-[280px] bg-white rounded-xl shadow-lg p-4 text-center">
          <p className="text-gray-800 font-medium text-sm mb-2">{name}</p>
          <p className="text-[#4caf4f] font-semibold text-sm flex justify-center items-center gap-2 cursor-pointer hover:underline">
            Readmore
            <ArrowRight size={16} />
          </p>
        </div>
      </div>
    </div>
  );
}
