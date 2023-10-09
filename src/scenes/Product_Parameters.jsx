import React from "react";
import DropDown_Structure from "../components/DropDown_Structure";
import Input_Structure from "../components/Input_Structure"

import {
    colorOptions
  } from "./Names";

function Product_Parameters({swelling, viscosity, color, plate, filterloss, quality, handleInputChange}) {
    return (
        <>
            <div className="productParameters">
                <h2>Product Parameters</h2>
                <div>
                <Input_Structure 
                    label_value="Quality (Swelling)"
                    id_value="swelling" 
                    value={swelling}  
                    onchange_value={handleInputChange}
                    placeholder_value="Parameters of Swelling" />
                <Input_Structure 
                    label_value="Quality (Viscosity)"
                    id_value="viscosity" 
                    value={viscosity}  
                    onchange_value={handleInputChange}
                    placeholder_value="Parameters of Viscosity" />
                <DropDown_Structure
                    label_value="Quality (Color)"
                    id_value="color" 
                    value={color}  
                    onchange_value={handleInputChange}
                    options_value={colorOptions} />
                </div>
                <div>
                <Input_Structure 
                    label_value="Quality (Plate)"
                    id_value="plate" 
                    value={plate}  
                    onchange_value={handleInputChange}
                    placeholder_value="Parameters of Plate" />
                <Input_Structure 
                    label_value="Quality (filter loss)"
                    id_value="filterloss" 
                    value={filterloss}  
                    onchange_value={handleInputChange}
                    placeholder_value="Parameters of Filter Loss" />
                <Input_Structure 
                    label_value="Quality (MB)"
                    id_value="mb" 
                    value={quality}  
                    onchange_value={handleInputChange}
                    placeholder_value="Parameters of MB" />
                </div>
            </div>
        </>
    )
}

export default Product_Parameters;