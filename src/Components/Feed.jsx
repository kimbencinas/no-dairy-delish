import React, { useState, useEffect } from 'react';

function Feed() {
    const [feedList, setFeedList] = useState([]);

    useEffect(() => {
        const feedData = async () => {
            const url = 'https://tasty.p.rapidapi.com/feeds/list?size=5&timezone=%2B0700&vegetarian=false&from=0';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '46bdcb908amsh37465532556edf5p168cafjsn62a83629af8d',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setFeedList(result);
            } catch(error) {
                console.error(error);
            }
        };

        feedData();
    }, []);

    return (
    <div>
        <h2>Feed List</h2>
        <ul>
            {feedList.map((item, index) => (
                <li key={index}>{item.title}</li>
            ))}
        </ul>
    </div>
  );
}

export default Feed;