import React from "react";
import Input_Structure from "../components/Input_Structure"
import { genderOptions } from "./Names";

function Contact_Information({contactPerson, gender, designation, department, email, contactNumber, whatsappNumber, wechatNumber, website, handleInputChange}) {
    return (
        <>
            <div className="contact information">
            <div className="sub-heading">Contact Information</div>
                <div className="parent-container">
                    <div className="component">
                        <label htmlFor="contactPerson">Contact Person</label>
                        <select style={{width:"12%", marginRight:"2%"}}
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={handleInputChange}>
                                {genderOptions.map((values, index) => (
                                <option key={index} value={values}>
                                    {values}
                                </option>
                                ))}
                        </select>
                        <input style={{width:"46%"}}
                            required={true}
                            id="contactPerson"
                            type="text"
                            name="contactPerson"
                            value={contactPerson}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="component">
                        <Input_Structure 
                            label_value="Designation"
                            id_value="designation" 
                            value={designation}  
                            onchange_value={handleInputChange} />
                    </div>
                    <div className="component">
                        <Input_Structure 
                            label_value="Department"
                            id_value="department" 
                            value={department}  
                            onchange_value={handleInputChange} />
                    </div>
                    <div className="component">
                        <Input_Structure 
                            requirement={true}
                            label_value="Email"
                            type_value="email"
                            id_value="email" 
                            value={email}  
                            onchange_value={handleInputChange} />
                    </div>
                    <div className="component">
                        <Input_Structure 
                            requirement={true}
                            label_value="Contact Number"
                            type_value="number"
                            id_value="contactNumber" 
                            value={contactNumber}  
                            onchange_value={handleInputChange} />
                    </div>
                    <div className="component">
                        <Input_Structure 
                            label_value="WhatsApp Number"
                            type_value="number"
                            id_value="whatsappNumber" 
                            value={whatsappNumber}  
                            onchange_value={handleInputChange} />
                    </div>
                    <div className="component">
                        <Input_Structure 
                            label_value="We Chat Number"
                            type_value="number"
                            id_value="wechatNumber" 
                            value={wechatNumber}  
                            onchange_value={handleInputChange} />
                    </div>
                    <div className="component">
                        <Input_Structure 
                            label_value="Website"
                            id_value="website" 
                            value={website}  
                            onchange_value={handleInputChange} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact_Information;