import React from 'react';

function SliderItem({ item }) {
  return (
    <div role="sliderItem">
      {item && (
        <div>
          <div>{item.title}</div>
          <div>{item.author}</div>
          <div>{item.category}</div>
        </div>
      )}
    </div>
  );
}

export default SliderItem;
