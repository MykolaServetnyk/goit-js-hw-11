'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const BASE_URI = 'https://pixabay.com/api/';
const KEY = '42459298-1821cc9c9c9d24f5ec127ca7c';

const fetchImages = (userInput) => {
    const searchLink = `${BASE_URI}?key=${KEY}&q=${userInput}&image-type=photo&orientation=horizontal&safesearch=true`;

    return fetch(searchLink)
        .then(response => {
            if (!response.ok) {
                throw new Error('Image error!');
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.show({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    messageColor: '#FAFAFB',
                    backgroundColor: '#EF4040',
                    iconColor: '#FAFAFB',
                    position: "topRight",
                    iconUrl: "https://fonts.google.com/icons?selected=Material%20Icons%3Adangerous%3A"
                });
            }
            return data.hits;
        })
        .catch(error => {
            console.error('Error fetching data:');
        });
};

export default fetchImages;
