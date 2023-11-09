//code related to contacting the Unsplash API
import axios from 'axios';

const searchImages = async(term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Ik4w4GFkp-h4oXIVzj9Tb_4iH6qTJnOZ-LiteIYoFbo', 
        },
        params: {
           query: term, 

        },
    });

    return response.data.results;
};

export default searchImages;