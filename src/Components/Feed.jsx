import React, { useState, useEffect } from 'react';

function Feed() {
    const [feedList, setFeedList] = useState([]);
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const feedData = async () => {
            try {
                const response = await fetch('https://tasty.p.rapidapi.com/feeds/list?size=10&timezone=%2B0700&vegetarian=false&from=0', {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '46bdcb908amsh37465532556edf5p168cafjsn62a83629af8d',
                        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                    }
                });
                const data = await response.json();
                setFeedList(data.results);
                setApiData(data);
              } catch (error) {
                console.error(error);
            }
        };
        feedData();
    }, []);

    useEffect(() => {
        if (apiData) {
            console.log(apiData); // Log the entire API response
        }
    }, [apiData]);


    return (
    <div>
        {feedList.map(feed => (
                <div key={feed.id}>{feed.title}</div>
        ))}
    </div>
  );
}

export default Feed;