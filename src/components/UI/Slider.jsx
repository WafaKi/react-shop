import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Loader from "./Loader/Loader";
import "../../styles/ProductPage.css"

const Slider = ({images}) => {
    const [index, setIndex] = useState(0)

    if(!images) {
        return <Loader/>
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    return (
        <Carousel className="slider" activeIndex={index} onSelect={handleSelect}>
            {images.map((image, index) => {
                return(
                    <Carousel.Item key={image}>
                        <img
                            className="d-block slider__item"
                            src={image}
                            alt={`${index} slide`}
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
};

export default Slider;