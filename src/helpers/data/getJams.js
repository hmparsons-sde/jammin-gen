import axios from 'axios';

const dbUrl = 'https://api.lyrics.ovh/v1/';

const getJams = (artist, title) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}${artist}/${title}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getJams;
