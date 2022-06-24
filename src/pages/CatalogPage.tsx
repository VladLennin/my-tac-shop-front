import React from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

const CatalogPage = () => {
    return (
        <div>
            <Wrapper>
                <div>
                    CatalogPage
                    <Link to={"/product"}>Product</Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default CatalogPage;