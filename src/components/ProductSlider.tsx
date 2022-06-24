import React, {FC, useEffect} from 'react';
import Slider from "react-slick"
import CustomModal from "./ProductPageBlocks/PhotoModal";

interface ProductSliderProps {
    images: string[]
}

const ProductSlider: FC<ProductSliderProps> = ({images}) => {


    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <Slider {...settings} className={"xl:h-[38vh] xl:w-1/2  h-[25vh] w-full "}>
            {images.map(img =>
                <div>
                    <div  className={" h-full w-full "}>
                        <img src={img} className={"mx-auto w-1/2 h-1/2"} alt=""/>
                    </div>
                </div>
            )}

        </Slider>

    );
};

export default ProductSlider;