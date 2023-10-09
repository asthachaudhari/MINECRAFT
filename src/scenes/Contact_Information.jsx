import React from "react";
import Input_Structure from "../components/Input_Structure"

function Contact_Information({contactPerson, designation, department, email, contactNumber, whatsappNumber, wechatNumber, handleInputChange}) {
    return (
        <>
            <div className="contact information">
                <h2>Contact Information</h2>
                <div>
                <Input_Structure 
                    label_value="Contact Person"
                    id_value="contactPerson" 
                    value={contactPerson}  
                    onchange_value={handleInputChange}
                    placeholder_value="Contact Person Name" />
                </div>
                <div>
                <Input_Structure 
                    label_value="Designation"
                    id_value="designation" 
                    value={designation}  
                    onchange_value={handleInputChange}
                    placeholder_value="Designation" />
                <Input_Structure 
                    label_value="Department"
                    id_value="department" 
                    value={department}  
                    onchange_value={handleInputChange}
                    placeholder_value="Department" />
                </div>
                <div>
                <Input_Structure 
                    label_value="Email"
                    type_value="email"
                    id_value="email" 
                    value={email}  
                    onchange_value={handleInputChange}
                    placeholder_value="abc@gmail.com" />
                </div>
                <div>
                <Input_Structure 
                    label_value="Contact Number"
                    type_value="number"
                    id_value="contactNumber" 
                    value={contactNumber}  
                    onchange_value={handleInputChange}
                    placeholder_value="989895956" />
                <Input_Structure 
                    label_value="WhatsApp Number"
                    type_value="number"
                    id_value="whatsappNumber" 
                    value={whatsappNumber}  
                    onchange_value={handleInputChange}
                    placeholder_value="989895956" />
                </div>
                <div>
                <Input_Structure 
                    label_value="We Chat Number"
                    type_value="number"
                    id_value="wechatNumber" 
                    value={wechatNumber}  
                    onchange_value={handleInputChange}
                    placeholder_value="989895956" />
                </div>
            </div>
        </>
    )
}

export default Contact_Information;