import React from "react";
import Input_Structure from "../components/Input_Structure"
import TextArea_Structure from "../components/TextArea_Structure";
import DropDown_Structure from "../components/DropDown_Structure";

import {
    countryOptions,
    stateOptions
  } from "./Names";

function Company_Information({companyName, companyAddress, country, state, city, pincode, handleInputChange}) {
    return (
        <>
            <div className="companyInformation">
                <h2>Company Information</h2>
                <div>
                <Input_Structure 
                    label_value="Name of Company"
                    id_value="companyName" 
                    value={companyName}  
                    onchange_value={handleInputChange}
                    placeholder_value="Company Name" />
                </div>
                <div>
                <TextArea_Structure 
                    label_value="Company Address"
                    id_value="companyAddress" 
                    value={companyAddress}  
                    onchange_value={handleInputChange}
                    placeholder_value="Address of Company" />
                </div>
                <div>
                <DropDown_Structure
                    label_value="Country"
                    id_value="country" 
                    value={country}  
                    onchange_value={handleInputChange}
                    options_value={countryOptions} />
                </div>
                <div>
                <DropDown_Structure
                    label_value="State"
                    id_value="state" 
                    value={state}  
                    onchange_value={handleInputChange}
                    options_value={stateOptions} />
                </div>
                <div>
                <Input_Structure 
                    label_value="City/Village"
                    id_value="city" 
                    value={city}  
                    onchange_value={handleInputChange}
                    placeholder_value="City/Village" />
                </div>
                <div>
                <Input_Structure 
                    label_value="Pin Code or Zip Code"
                    type_value="number"
                    id_value="pincode" 
                    value={pincode}  
                    onchange_value={handleInputChange}
                    placeholder_value="Pin Code or Zip Code" />
                </div>
            </div>
        </>
    )
}

export default Company_Information;