import React, { useEffect, useState } from 'react';
function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://69e05e1129c070e6597b67e3.mockapi.io/teachers")
      .then((response) => response.json()) 
      .then((resData) => {               
        setData(resData);
        console.log(resData);
      })
      // .catch((err) => console.error("Xatolik yuz berdi:", err)); 
  }, []);
  return (
    <div className='one'>
      {data.map((el) => (
        <div className="img" key={el.id}>
          <img src={el.avatar} alt={el.name}  />
          <h1>{el.name}</h1>
          <p>{el.createdAt}</p>
        </div>
      ))}
    </div>
  );
}
export default Card;