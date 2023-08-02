import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function News(){
	const [data, setData] = useState([]);
  	
  	useEffect(() => {
		const fetchData = async() => {
          const res = await fetch('https://jsonplaceholder.typicode.com/news');
          const result = res.json();
          return result;
        }	
        
        fetchData().then(res => setData(res));
    }, []);
  
  return (
    <div>
     	{data.map(d => (
                <Link key={d.id} to={`${d.id}`}>{d.title}</Link>
            ))}
    </div>
    )
}

function Api(){
  return(
    <div>
        <p>..</p>
    </div>
  )
};

export default Api;