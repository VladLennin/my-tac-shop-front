import React, {FC} from 'react';


interface ArrowProps{
    isCatalog:boolean;
}
const RightArrowSlider:FC<ArrowProps> = ({isCatalog}) => {
    return (
        <div className={(isCatalog?"text-xl":"text-3xl") + "  flex items-center justify-center hover:scale-110 duration-150 "}>
            <i className="bi bi-arrow-right-circle"></i>
        </div>
    );
};

export default RightArrowSlider;