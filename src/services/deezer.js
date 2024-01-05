const axios = require('axios');

async function cherche(q){
    const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q},
        headers: {
          'X-RapidAPI-Key': '72f42da555msh61968467cb1973ep1a11bcjsn36932e53e306',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}
cherche('eminem')