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
            <div className="sub-heading">Product Information</div>
                <div className="parent-container">
                    <div className="product-infromation-component">
                        <DropDown_Structure
                            requirement={true}
                            label_value="Product Bentonite"
                            id_value="productBentonite" 
                            value={productBentonite}  
                            onchange_value={handleInputChange}
                            options_value={BentoniteOptions} />
                        <input disabled={(productBentonite === "Other")?false:true}
                            required={true}
                            id="productBentoniteOther"
                            type="text"
                            name="productBentoniteOther"
                            value={productBentoniteOther}
                            onChange={handleInputChange} />
                    </div>
                    <div className="product-infromation-component-checkbox">
                        <input required={true}
                        type="checkbox"
                        id="selects"
                        name='selects'
                        checked={(application.length !== 0)?true:false}
                        onChange={() => {}}
                        style={{height:"1px", width: "1px", margin: "0px"}}
                        />
                        <CheckList_Structure
                            label_value="Application"
                            id_value="selectedApplication" 
                            value={application}  
                            onchange_value={handleInputChange}
                            options_value={applicationOptions} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product_Information;