import React from "react";

export default function FeatureCard() {
  const data = [
    { image: "images/Icon.svg", name: "Clubs And Groups" },
    { image: "images/Icon (1).svg", name: "Memberships" },
    { image: "images/Icon (2).svg", name: "Events Management" },
  ];

  return (
    <div className="bg-[#ffffff] px-4 md:px-24 py-12">
      <div className="flex flex-wrap justify-center gap-16">
        {data.map((e, i) => (
          <Card key={i} image={e.image} name={e.name} />
        ))}
      </div>
    </div>
  );
}

function Card({ image, name }) {
  return (
    <div className="rounded-xl shadow-[0px_-1px_28px_19px_rgba(0,_0,_0,_0.05)] flex flex-col justify-center items-center p-8 w-72 text-center transition-transform duration-300 hover:scale-105 border-b-4 border-transparent hover:border-b-green-600">
      <img src={image} alt={name} className="h-16 w-16" />
      <p className="font-semibold text-lg mt-4">{name}</p>
      <p className="text-gray-600 mt-2 text-sm">
        Our membership management software provides full automation of
        membership renewals and payments.
      </p>
    </div>
  );
}
