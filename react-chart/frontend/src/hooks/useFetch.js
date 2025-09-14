import { useState } from "react"
import axios from "axios";

export default function useFetch() {
    const [data, setData]=useState();

    const getData=async()=>{
        try {
            const res=await axios.get("http://localhost:3000/lookup");
            setData(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    return {data, getData}
}
