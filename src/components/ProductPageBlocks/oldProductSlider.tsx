import React, {FC} from 'react';
import {IProduct} from "../../models/Models";
import ProductSlider from "./ProductSlider";

interface ProductSliderProps {
    product?: IProduct;
    indicators: boolean;
}

const OldProductSlider:FC<ProductSliderProps> = (indicators,product) => {
    return (
        <div id={"product" + String(product?.id)} className="carousel slide" data-bs-ride="true">

            {indicators
                ?
                <div className="carousel-indicators">
                    <button type="button" data-bs-target={String(product?.id)} data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={String(product?.id)} data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                </div>
                :
                ""
            }
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={product?.images[0]?.content} className="d-block w-100" alt="..."/>
                </div>
                {product?.images.slice(1).map((img:any) =>
                    <div key={product?.id} className="carousel-item ">
                        <img src={img?.content} className="d-block w-100" alt="..."/>
                    </div>
                )}
            </div>
            <button className="carousel-control-prev" type="button"
                    data-bs-target={"#product" + String(product?.id)}
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button"
                    data-bs-target={"#product" + String(product?.id)}
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default OldProductSlider;