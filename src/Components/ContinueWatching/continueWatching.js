import React from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import './continueWatching.css';

function ContinueWatching() {
  
    const ImgUrl = [
        {url: 'https://i.pinimg.com/originals/97/25/54/972554d4451f00c7bbe4bbb10f008eef.jpg'},
        {url: 'https://www.xtrafondos.com/wallpapers/resoluciones/21/iron-man-los-vengadores-4_2560x1440_7099.jpg'},
        {url: 'https://wallpaperaccess.com/full/546690.jpg'},
        {url: 'https://wallpaperaccess.com/full/13453.jpg'},
        {url: 'https://www.xtrafondos.com/wallpapers/resoluciones/21/iron-man-los-vengadores-4_2560x1440_7099.jpg'},
        {url: 'https://wallpaperaccess.com/full/13453.jpg'},
        {url: 'https://wallpaperaccess.com/full/546690.jpg'},
    ]
    const movieImg=[
        {url: 'https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg'},
        {url: 'https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg'},
        {url: 'https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg'},
        {url: 'https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg'},
        {url: 'https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg'},
    ]
    return (
       <div className='px-24 w-full '>
            <div className="carousel__containers ">
            <CarouselProvider
                naturalSlideWidth={20}
                naturalSlideHeight={10}
                totalSlides={8}
                visibleSlides={4}
                currentSlide={0}
                className='bg-gray-100'
            >
                <div className='flex text-xl  text-gray-600 font-medium  justify-between'>
                    <div>Continue Watching</div>
                <div className='flex justify-end text-2xl text-gray-600 font-medium mr-10'>
                    <ButtonBack className="mr-7 ">{`<`}</ButtonBack>
                    <ButtonNext className="">{`>`}</ButtonNext>
                </div>
                </div>
                <Slider style={{paddingLeft: '0px'}} className="rounded">
                    {ImgUrl.map((item, index) => {
                        return (
                            <Slide key={index} index={index}><img className=" shadow-red-400 rounded-3xl h-full" src={item.url} /></Slide>
                        )
                    })}
                </Slider>
            </CarouselProvider>
        </div>
        <div className="bg-gray-100 text-gray-700 paddingClass text-xl font-medium">
             <div className="mx-auto py-12 px-4 ">
                     <div className="flex mb-10 justify-between">
                         <div className="" >Trending</div>
                         <div className="underline justify-end">
                             <div>More</div>
                         </div>
                     </div>
                     <div role="list" className="h-full flex  gap-8">
                         {movieImg.map((movie, index) => (
                             <div key={index} className="h-3/4 bg-gray-800 text-center rounded-lg xl:text-left">
                                 <div className=""><img className=" shadow-red-400 rounded-3xl h-full" src={movie.url} /></div>
                             </div>
                         ))}
                     </div>                 
             </div>
         </div>
       </div>
       
    );
}

export default ContinueWatching;
