import React, { useEffect } from "react";
import Input_Structure from "../components/Input_Structure"
import TextArea_Structure from "../components/TextArea_Structure";
import DropDown_Structure from "../components/DropDown_Structure";

import {
  countryOptions,
  stateOptions,
  BentoniteOptions,
  productOptions,
  colorOptions,
  packingTypeOptions,
  packingQtyOptions,
  deliveryModeOptions,
} from "./Names";
import CheckList_Structure from "../components/CheckList_Structure";

function Forms_Structure() {
  const [processInfo, setProcessInfo] = React.useState({
    Piling: false,
    China_Clay: false,
    Foundry: false,
    Cat_Litter: false,
    Drilling: false,
    Calcium_Lumps: false,
    Water_Proofing: false,
    Sodium_Lumps: false,
    Earthing: false
  });
  const [formInfo, setformInfo] = React.useState({
    companyName: "",
    companyAddress: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    contactPerson: "",
    designation: "",
    department: "",
    email: "",
    contactNumber: "",
    whatsappNumber: "",
    wechatNumber: "",
    productBentonite: "",
    process: "",
    swelling: "",
    viscosity: "",
    color: "",
    plate: "",
    filterloss: "",
    packingType: "",
    packingQty: "",
    packingQtyValue: "",
    deliveryMode: "",
    getSampleOnAddress: "",
    getSampleInCountry: "",
    getSampleInState: "",
    getSampleInCity: "",
    getSampleOnPincode: "",
    notesOrRemarks: "",
    emailForQuotation: "",
  });

  const handleInputChangeProcess = (e) => {
    const { name, value } = e.target;
    setProcessInfo({
      ...processInfo,
      [value]: !processInfo[value]
    });
  };

  useEffect(() => {
    const keys = Object.keys(processInfo)
    const selectedprocesses = keys.filter((key) => processInfo[key])
    setformInfo({
      ...formInfo,
      process: selectedprocesses
    });
  }, [processInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformInfo({
      ...formInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("formInfo state:", formInfo);
  }, [formInfo]);

  return (
    <form>
      <h5>
        <strong>
          Fill out below Inquiry-form and get Quotation on Email, * Fields are
          mandatory
        </strong>
      </h5>
      <div className="companyInformation">
        <h2>Company Information</h2>
        <div>
          <Input_Structure 
            label_value="Name of Company"
            id_value="companyName" 
            value={formInfo.companyName}  
            onchange_value={handleInputChange}
            placeholder_value="Company Name" />
        </div>
        <div>
          <TextArea_Structure 
            label_value="Company Address"
            id_value="companyAddress" 
            value={formInfo.companyAddress}  
            onchange_value={handleInputChange}
            placeholder_value="Address of Company" />
        </div>
        <div>
          <DropDown_Structure
            label_value="Country"
            id_value="country" 
            value={formInfo.country}  
            onchange_value={handleInputChange}
            options_value={countryOptions} />
        </div>
        <div>
          <DropDown_Structure
            label_value="State"
            id_value="state" 
            value={formInfo.state}  
            onchange_value={handleInputChange}
            options_value={stateOptions} />
        </div>
        <div>
          <Input_Structure 
            label_value="City/Village"
            id_value="city" 
            value={formInfo.city}  
            onchange_value={handleInputChange}
            placeholder_value="City/Village" />
        </div>
        <div>
          <Input_Structure 
            label_value="Pin Code or Zip Code"
            type_value="number"
            id_value="pincode" 
            value={formInfo.pincode}  
            onchange_value={handleInputChange}
            placeholder_value="Pin Code or Zip Code" />
        </div>
      </div>

      <div className="contact">
        <h2>Contact</h2>
        <div>
          <Input_Structure 
            label_value="Contact Person"
            id_value="contactPerson" 
            value={formInfo.contactPerson}  
            onchange_value={handleInputChange}
            placeholder_value="Contact Person Name" />
        </div>
        <div>
          <Input_Structure 
            label_value="Designation"
            id_value="designation" 
            value={formInfo.designation}  
            onchange_value={handleInputChange}
            placeholder_value="Designation" />
          <Input_Structure 
            label_value="Department"
            id_value="department" 
            value={formInfo.department}  
            onchange_value={handleInputChange}
            placeholder_value="Department" />
        </div>
        <div>
          <Input_Structure 
            label_value="Email"
            type_value="email"
            id_value="email" 
            value={formInfo.email}  
            onchange_value={handleInputChange}
            placeholder_value="abc@gmail.com" />
        </div>
        <div>
          <Input_Structure 
            label_value="Contact Number"
            type_value="number"
            id_value="contactNumber" 
            value={formInfo.contactNumber}  
            onchange_value={handleInputChange}
            placeholder_value="989895956" />
          <Input_Structure 
            label_value="WhatsApp Number"
            type_value="number"
            id_value="whatsappNumber" 
            value={formInfo.whatsappNumber}  
            onchange_value={handleInputChange}
            placeholder_value="989895956" />
        </div>
        <div>
          <Input_Structure 
            label_value="We Chat Number"
            type_value="number"
            id_value="wechatNumber" 
            value={formInfo.wechatNumberr}  
            onchange_value={handleInputChange}
            placeholder_value="989895956" />
        </div>
      </div>

      <div className="productInfo">
        <h2>Product Information</h2>
        <div>
          <DropDown_Structure
            label_value="Product Bentonite"
            id_value="productBentonite" 
            value={formInfo.productBentonite}  
            onchange_value={handleInputChange}
            options_value={BentoniteOptions} />
        </div>
        <div>
          <CheckList_Structure
            label_value="Processes"
            id_value="selectedProcess" 
            value={formInfo.process}  
            onchange_value={handleInputChangeProcess}
            options_value={productOptions} />
        </div>
      </div>

      <div className="productParameters">
        <h2>Product Parameters</h2>
        <div>
          <Input_Structure 
            label_value="Quality (Swelling)"
            id_value="swelling" 
            value={formInfo.swelling}  
            onchange_value={handleInputChange}
            placeholder_value="Parameters of Swelling" />
          <Input_Structure 
            label_value="Quality (Viscosity)"
            id_value="viscosity" 
            value={formInfo.viscosity}  
            onchange_value={handleInputChange}
            placeholder_value="Parameters of Viscosity" />
          <DropDown_Structure
            label_value="Quality (Color)"
            id_value="color" 
            value={formInfo.color}  
            onchange_value={handleInputChange}
            options_value={colorOptions} />
        </div>
        <div>
          <Input_Structure 
            label_value="Quality (Plate)"
            id_value="plate" 
            value={formInfo.plate}  
            onchange_value={handleInputChange}
            placeholder_value="Parameters of Plate" />
          <Input_Structure 
            label_value="Quality (filter loss)"
            id_value="filterloss" 
            value={formInfo.filterloss}  
            onchange_value={handleInputChange}
            placeholder_value="Parameters of Filter Loss" />
          <Input_Structure 
            label_value="Quality (MB)"
            id_value="mb" 
            value={formInfo.mb}  
            onchange_value={handleInputChange}
            placeholder_value="Parameters of MB" />
        </div>
      </div>

      <div className="packingDelivery">
        <h2>Packing & Delivery</h2>
        <div>
          <DropDown_Structure
            label_value="Packing Type"
            id_value="packingType" 
            value={formInfo.packingType}  
            onchange_value={handleInputChange}
            options_value={packingTypeOptions} />
          <DropDown_Structure
            label_value="Packing Qty"
            id_value="packingQty" 
            value={formInfo.packingQty}  
            onchange_value={handleInputChange}
            options_value={packingQtyOptions} />
        </div>
        <div>
          <Input_Structure 
            label_value="Packing Qty Value"
            id_value="packingQtyValue" 
            value={formInfo.packingQtyValue}  
            onchange_value={handleInputChange}
            placeholder_value="Packing Quantity Value" />
          <DropDown_Structure
            label_value="Delivery Mode"
            id_value="deliveryMode" 
            value={formInfo.deliveryMode}  
            onchange_value={handleInputChange}
            options_value={deliveryModeOptions} />
        </div>
      </div>

      <div className="getSample">
        <h2>Get Sample</h2>
        <div>
          <TextArea_Structure 
            label_value="Get Sample on Address"
            id_value="getSampleOnAddress" 
            value={formInfo.getSampleOnAddress}  
            onchange_value={handleInputChange}
            placeholder_value="" />
        </div>
        <div>
          <DropDown_Structure
            label_value="Country"
            id_value="getSampleInCountry" 
            value={formInfo.getSampleInCountry}  
            onchange_value={handleInputChange}
            options_value={countryOptions} />
        </div>
        <div>
          <DropDown_Structure
            label_value="State"
            id_value="getSampleInState" 
            value={formInfo.getSampleInState}  
            onchange_value={handleInputChange}
            options_value={stateOptions} />
          <Input_Structure 
            label_value="City/Village"
            id_value="getSampleInCity" 
            value={formInfo.getSampleInCity}  
            onchange_value={handleInputChange}
            placeholder_value="City/Village" />
        </div>
        <div>
          <Input_Structure 
            label_value="Pin code or Zip code"
            type_value="number"
            id_value="getSampleOnPincode" 
            value={formInfo.getSampleOnPincode}  
            onchange_value={handleInputChange}
            placeholder_value="Pincode or Zipcode" />
        </div>
      </div>

      <div className="otherInfo">
        <h2>Other Information</h2>
        <div>
          <TextArea_Structure 
            label_value="Notes/Remarks"
            id_value="notesOrRemarks" 
            value={formInfo.notesOrRemarks}  
            onchange_value={handleInputChange}
            placeholder_value="" />
        </div>
        <div>
          <Input_Structure 
            label_value="Email for Quotation"
            id_value="emailForQuotation" 
            value={formInfo.emailForQuotation}  
            onchange_value={handleInputChange}
            placeholder_value="Give Email to get Quotation" />
        </div>
      </div>

      <button className="send-button">Send</button>
    </form>
  );
}

export default Forms_Structure;