import React from "react";
import Input_Structure from "../components/Input_Structure"
import TextArea_Structure from "../components/TextArea_Structure";
import DropDown_Structure from "../components/DropDown_Structure";

import {
    countryOptions,
    stateOptions
  } from "./Names";

function Get_Sample({getSampleOnAddress, getSampleInCountry, getSampleInState, getSampleInCity, getSampleOnPincode, handleInputChange}) {
    return (
        <>
            <div className="getSample">
            <div className="sub-heading">Get Sample</div>
            <div className="parent-container">
                <div className="component">
                    <TextArea_Structure 
                        requirement={true}
                        label_value="Address"
                        id_value="getSampleOnAddress" 
                        value={getSampleOnAddress}  
                        onchange_value={handleInputChange} />
                </div>
                <div  className="component">
                    <DropDown_Structure
                        requirement={true}
                        label_value="Country"
                        id_value="getSampleInCountry" 
                        value={getSampleInCountry}  
                        onchange_value={handleInputChange}
                        options_value={countryOptions} />
                </div>
                <div className="component">
                    <DropDown_Structure
                        requirement={true}
                        label_value="State"
                        id_value="getSampleInState" 
                        value={getSampleInState}  
                        onchange_value={handleInputChange}
                        options_value={stateOptions} />
                </div>
                <div className="component">
                    <Input_Structure 
                        requirement={true}
                        label_value="City/Village"
                        id_value="getSampleInCity" 
                        value={getSampleInCity}  
                        onchange_value={handleInputChange} />
                </div>
                <div className="component">
                    <Input_Structure 
                        requirement={true}
                        label_value="Pin code"
                        type_value="number"
                        id_value="getSampleOnPincode" 
                        value={getSampleOnPincode}  
                        onchange_value={handleInputChange} />
                </div>
                </div>
            </div>
        </>
    )
}

export default Get_Sample;