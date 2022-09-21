
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import { styled } from "@mui/system";   

import { bannerData } from "../../constants/Data";  



const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: 280,
    [theme.breakpoints.down('md')] : {
        objectFit: 'cover',
        height: 180
    }
}));



const responsive = {
    destop: {
        breakpoint: { max:3000, min: 1024 },
        items:1,
    },

    tablet: {
        breakpoint: { max:1024, min: 464 },
        items:1,
    },

    mobile: {
        breakpoint: { max:464, min: 0 },
        items:1,
    },
};




const Banner = () => {
    
    return(
        
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                slidesToSlide={1}
                dotListClass="custom-dot-list-style"
                itemClass="curosel-team-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    bannerData.map(data => (
                        <Image src={data.URL} alt="banner" />
                    ))
                }
    
            </Carousel>
       
    )
}

export default Banner;