import React, { useState } from 'react'
import Card from './Card';

export default function OnlineDelivey() {
    const [datas, setDatas] = useState([]);
  
    const fetchTopRestorent = async () => {
      const res = await fetch("http://localhost:5000/top-restaurant-chains");
      const data = await res.json();
      setDatas(data);
    };
  
    useState(() => {
      fetchTopRestorent();
    }, []);
  
    return (
      <div className="max-w-[1200px] mx-auto">
            <div className="flex my-3 items-center justify-between">
              <div className="text-xl font-bold mt-2">Restaurants with online food delivery in Chhindwara</div>
              
            </div>

            <div className="grid grid-cols-4 gap-5 gap-y-10 " >
                {datas.map((e, i)=>{
                            return <Card {...e} key={i}/>
                })}
            </div>
          </div>
  
  )
}
