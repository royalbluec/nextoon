import SliderItem from './SliderItem';

function Slider({ data }) {
  return (
    <div role="slider">
      {data && data.map((item) => <SliderItem key={item.id} item={item} />)}
    </div>
  );
}

export default Slider;
