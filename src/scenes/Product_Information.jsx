import React from "react";
import DropDown_Structure from "../components/DropDown_Structure";
import CheckList_Structure from "../components/CheckList_Structure";

import {
    BentoniteOptions,
    productOptions
  } from "./Names";

function Product_Information({productBentonite, process, handleInputChange}) {
    return (
        <>
            <div className="productInfo">
                <h2>Product Information</h2>
                <div>
                <DropDown_Structure
                    label_value="Product Bentonite"
                    id_value="productBentonite" 
                    value={productBentonite}  
                    onchange_value={handleInputChange}
                    options_value={BentoniteOptions} />
                </div>
                <div>
                <CheckList_Structure
                    label_value="Processes"
                    id_value="selectedProcess" 
                    value={process}  
                    onchange_value={handleInputChange}
                    options_value={productOptions} />
                </div>
            </div>
        </>
    )
}

export default Product_Information;