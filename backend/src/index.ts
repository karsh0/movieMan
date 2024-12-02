import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://ott-details.p.rapidapi.com/advancedsearch',
  params: {
    start_year: '1970',
    end_year: '2020',
    min_imdb: '6',
    max_imdb: '7.8',
    genre: 'action',
    language: 'english',
    type: 'movie',
    sort: 'latest',
    page: '1'
  },
  headers: {
    'x-rapidapi-key': 'Sign Up for Key',
    'x-rapidapi-host': 'ott-details.p.rapidapi.com'
  }
};

async function main(){
try{
    const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
    console.error(error);
}
}

main()