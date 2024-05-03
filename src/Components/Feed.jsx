import React, { useState, useEffect } from 'react';

function About() {
    const [feedList, setFeedList] = useState([]);

    useEffect(() => {
        const feedData = async () => {
            const url = 'https://tasty.p.rapidapi.com/feeds/list';
            const queryParams = new URLSearchParams({
                from: '0',
                size: '5',
                tags: 'dairy_free,vegan' // Add the tags parameter
            });

            const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '46bdcb908amsh37465532556edf5p168cafjsn62a83629af8d',
                  'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(`${url}?${queryParams}`, options);
                const result = await response.json();
                console.log(result);
                setFeedList(result.results);
              } catch (error) {
                console.error(error);
            }
            
        };
        feedData();
    }, []);

    return (
    <div>

    </div>
  );
}

export default About;