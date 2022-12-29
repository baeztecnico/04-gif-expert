import React from 'react';
import { getGiff } from '../helpers/getGifs';
import{useState,useEffect} from 'react';


const useFetchGifts = (category) => {
 const [images, setImages] = useState([]);
 const [isLoading, setIsLoading] = useState([]);
    const getImages = async()=>{
        const newImages = await getGiff(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() =>{
        getImages();
    },[])      
return{
    images,
    isLoading
}
}

export default useFetchGifts;
