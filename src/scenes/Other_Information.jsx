import React from "react";
import Input_Structure from "../components/Input_Structure"
import TextArea_Structure from "../components/TextArea_Structure";


function Other_Information({notesOrRemarks, emailForQuotation, handleInputChange}) {
    return (
        <>
            <div className="otherInfo">
                <h2>Other Information</h2>
                <div>
                <TextArea_Structure 
                    label_value="Notes/Remarks"
                    id_value="notesOrRemarks" 
                    value={notesOrRemarks}  
                    onchange_value={handleInputChange}
                    placeholder_value="" />
                </div>
                <div>
                <Input_Structure 
                    label_value="Email for Quotation"
                    id_value="emailForQuotation" 
                    value={emailForQuotation}  
                    onchange_value={handleInputChange}
                    placeholder_value="Give Email to get Quotation" />
                </div>
            </div>
        </>
    )
}

export default Other_Information;