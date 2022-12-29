import React from 'react';

const GiftItem = ({title,url}) => {
  return (
    <div className='card'>
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
}

export default GiftItem;