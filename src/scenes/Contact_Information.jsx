import React from "react";
import Input_Structure from "../components/Input_Structure"

function Contact_Information({contactPerson, designation, department, email, contactNumber, whatsappNumber, wechatNumber, website, handleInputChange}) {
    return (
        <>
            <div className="contact information">
                <h2>Contact Information</h2>
                <div>
                <Input_Structure 
                    label_value="Contact Person"
                    id_value="contactPerson" 
                    value={contactPerson}  
                    onchange_value={handleInputChange} />
                </div>
                <div>
                <Input_Structure 
                    label_value="Designation"
                    id_value="designation" 
                    value={designation}  
                    onchange_value={handleInputChange} />
                </div>
                <div>
                <Input_Structure 
                    label_value="Department"
                    id_value="department" 
                    value={department}  
                    onchange_value={handleInputChange} />
                </div>
                <div>
                <Input_Structure 
                    label_value="Email"
                    type_value="email"
                    id_value="email" 
                    value={email}  
                    onchange_value={handleInputChange} />
                </div>
                <div>
                <Input_Structure 
                    label_value="Contact Number"
                    type_value="number"
                    id_value="contactNumber" 
                    value={contactNumber}  
                    onchange_value={handleInputChange} />
                </div>
                <div>
                <Input_Structure 
                    label_value="WhatsApp Number"
                    type_value="number"
                    id_value="whatsappNumber" 
                    value={whatsappNumber}  
                    onchange_value={handleInputChange} />
                </div>
                <div>
                <Input_Structure 
                    label_value="We Chat Number"
                    type_value="number"
                    id_value="wechatNumber" 
                    value={wechatNumber}  
                    onchange_value={handleInputChange} />
                </div>
                <div>
                <Input_Structure 
                    label_value="Website"
                    id_value="website" 
                    value={website}  
                    onchange_value={handleInputChange} />
                </div>
            </div>
        </>
    )
}

export default Contact_Information;