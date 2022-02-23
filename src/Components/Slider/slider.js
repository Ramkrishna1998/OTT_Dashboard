import React from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import './slider.css';

function SliderComponent() {
    const ImgUrl = [
        {url: 'https://i.pinimg.com/originals/97/25/54/972554d4451f00c7bbe4bbb10f008eef.jpg'},
        {url: 'https://wallpaperaccess.com/full/13453.jpg'},
        {url: 'https://www.xtrafondos.com/wallpapers/resoluciones/21/iron-man-los-vengadores-4_2560x1440_7099.jpg'},
        {url: 'https://wallpaperaccess.com/full/546690.jpg'},

    ]        
    return (
        <div className="carousel__container">
            <CarouselProvider
                naturalSlideWidth={80}
                naturalSlideHeight={40}
                totalSlides={4}
                visibleSlides={1}
                currentSlide={1}
                className='bg-gray-100'
            >
                <Slider className="rounded">
                    {ImgUrl.map((item, index) => {
                        return (
                            <Slide key={index} index={index}><img className=" shadow-red-400 rounded-3xl h-full" src={item.url} /></Slide>
                        )
                    })}
                    {/* <Slide index={0}><img className=" shadow-red-400 rounded-3xl h-full" src='https://i.pinimg.com/originals/97/25/54/972554d4451f00c7bbe4bbb10f008eef.jpg' /></Slide>
                    <Slide index={1}><img className=" shadow-red-400 rounded-3xl h-full" src='' /></Slide>
                    <Slide index={2}><img className=" shadow-red-400 rounded-3xl h-full" src='' /></Slide>
                    <Slide index={3}><img className=" shadow-red-400 rounded-3xl h-full" src='' /></Slide> */}
                </Slider>
                <ButtonBack className="absolute block mt-10 h-2/4 w-1/5 top-0 left-0 opacity-0 ">Back</ButtonBack>
                <ButtonNext className="absolute block mt-10 h-2/4 w-1/5 top-0 right-0 opacity-0">Next</ButtonNext>
            </CarouselProvider>
        </div>
    );
}

export default SliderComponent;
