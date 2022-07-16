import { useState, useEffect } from "react";
import axios from 'axios'


const useFetch = (url) => {
    const [data, setData] = useState([])
    const fetchData = async (setData, url) => {
        const { data } = await axios.get(url)
        setData(data)
    }
    useEffect(() => {
        fetchData(setData, url)
    }, [url])

    return [data]
}

export default useFetch
