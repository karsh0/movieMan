import axios from "axios"
import { useEffect, useState } from "react"


const options = {
    method: 'GET',
    url: 'https://moviedatabase8.p.rapidapi.com/Search/Incep',
    headers: {
      'x-rapidapi-key': 'c6305b3a08msh15afaa54f44fd4ep14b051jsn30a30468e4a0',
      'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
    }
  };

export const useBanner = () =>{
    const [banners, setBanners] = useState([])

    useEffect(()=>{
        async function fetchResponse(){

            try{
                const bannerResponse = await axios.request(options)
                setBanners(bannerResponse.data)
            } 
            catch(e){
                console.log(e)
            }
        }
        fetchResponse()
        },[])

    return banners
}