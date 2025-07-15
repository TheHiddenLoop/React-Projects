import React from 'react'

export default function Members() {
    const statsData = [
        {
            image: "/images/a1.svg",
            count: "2,245,341",
            label: "Members"
        },
        {
            image: "/images/a2.svg",
            count: "46,328",
            label: "Clubs"
        },
        {
            image: "/images/a4.svg",
            count: "828,867",
            label: "Event Bookings"
        },
        {
            image: "/images/a3.svg",
            count: "1,926,436",
            label: "Payments"
        }
    ];
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-28 py-12 gap-16 bg-[#f5f7fa]">
            <div className='max-w-xl space-y-6 text-center md:text-left ml-8'>
                <p className="text-3xl font-semibold text-gray-800">Helping a local <br /><span className='text-[#4caf4f]'>business reinvent itself</span></p>
                <p className='text-gray-600'>We reached here with our hard work and dedication</p>
            </div>
            <div className="grid grid-cols-2 ml-7 sm:ml-0 sm:grid-cols-2 gap-8 mr-[40px]">
                {statsData.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <img src={item.image} alt={item.label} className="w-10 h-10" />
                        <div>
                            <p className="text-xl font-bold text-gray-800">{item.count}</p>
                            <p className="text-sm text-gray-500">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
