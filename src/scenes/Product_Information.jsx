import React from "react";
import DropDown_Structure from "../components/DropDown_Structure";
import CheckList_Structure from "../components/CheckList_Structure";

import {
    BentoniteOptions,
    applicationOptions
  } from "./Names";

function Product_Information({productBentonite, productBentoniteOther, application, handleInputChange}) {
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
                <input disabled={(productBentonite === "Other")?false:true}
                    id="productBentoniteOther"
                    type="text"
                    name="productBentoniteOther"
                    value={productBentoniteOther}
                    onChange={handleInputChange} />
                </div>
                <div>
                <CheckList_Structure
                    label_value="Application"
                    id_value="selectedApplication" 
                    value={application}  
                    onchange_value={handleInputChange}
                    options_value={applicationOptions} />
                </div>
            </div>
        </>
    )
}

export default Product_Information;