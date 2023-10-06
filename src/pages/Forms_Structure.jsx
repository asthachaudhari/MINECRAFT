//using usestate for managing component level
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
    country: "India",
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
              label_value="Pincode or Zipcode"
              type_value="number"
              id_value="pincode" 
              value={formInfo.pincode}  
              onchange_value={handleInputChange}
              placeholder_value="Pincode or Zipcode" />
        </div>
      </div>

      <div className="contact">
        <h2>Contact</h2>
        <div>
          <label htmlFor="contactPerson">Contact Person</label>
          <input
            type="text"
            name="contactPerson"
            value={formInfo.contactPerson}
            onChange={handleInputChange}
            placeholder="Contact Person Name"
          />
        </div>
        <div>
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            name="designation"
            value={formInfo.designation}
            onChange={handleInputChange}
            placeholder="Designation"
          />

          <label htmlFor="department">Department</label>
          <input
            type="text"
            name="department"
            value={formInfo.department}
            onChange={handleInputChange}
            placeholder="Department"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={formInfo.email}
            onChange={handleInputChange}
            placeholder="abc@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="number"
            name="contactNumber"
            value={formInfo.contactNumber}
            onChange={handleInputChange}
            placeholder="9898595956"
          />

          <label htmlFor="whatsappNumber">WhatsApp Number</label>
          <input
            type="number"
            name="whatsappNumber"
            value={formInfo.whatsappNumber}
            onChange={handleInputChange}
            placeholder="9898595956"
          />
        </div>

        <div>
          <label htmlFor="wechatNumber">We Chat Number</label>
          <input
            type="number"
            name="wechatNumber"
            value={formInfo.wechatNumber}
            onChange={handleInputChange}
            placeholder="9898595956"
          />
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
          <label htmlFor="swelling">Quality (Swelling)</label>
          <input
            type="text"
            name="swelling"
            value={formInfo.swelling}
            onChange={handleInputChange}
            placeholder="Parameters of Swelling"
          />

          <label htmlFor="viscosity">Quality (Viscosity)</label>
          <input
            type="text"
            name="viscosity"
            value={formInfo.viscosity}
            onChange={handleInputChange}
            placeholder="Parameters of Viscosity"
          />

          <label htmlFor="color">Quality (Color)</label>
          <select
            id="color"
            name="color"
            value={formInfo.color}
            onChange={handleInputChange}
          >
            {colorOptions.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="plate">Quality (Plate)</label>
          <input
            type="text"
            name="plate"
            value={formInfo.plate}
            onChange={handleInputChange}
            placeholder="Parameters of Plate"
          />
          <label htmlFor="filterloss">Quality (filter loss)</label>
          <input
            type="text"
            name="filterloss"
            value={formInfo.filterloss}
            onChange={handleInputChange}
            placeholder="Parameters of Filter Loss"
          />
          <label htmlFor="mb">Quality (MB)</label>
          <input
            type="text"
            name="mb"
            value={formInfo.mb}
            onChange={handleInputChange}
            placeholder="Parameters of MB"
          />
        </div>
      </div>

      <div className="packingDelivery">
        <h2>Packing & Delivery</h2>
        <div>
          <label htmlFor="packingType">Packing Type</label>
          <select
            id="packingType"
            name="packingType"
            value={formInfo.packingType}
            onChange={handleInputChange}
          >
            {packingTypeOptions.map((packingType, index) => (
              <option key={index} value={packingType}>
                {packingType}
              </option>
            ))}
          </select>

          <label htmlFor="packingQty">Packing Qty</label>
          <select
            id="packingQty"
            name="packingQty"
            value={formInfo.packingQty}
            onChange={handleInputChange}
          >
            {packingQtyOptions.map((packingQty, index) => (
              <option key={index} value={packingQty}>
                {packingQty}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="packingQtyValue">Packing Qty Value</label>
          <input
            type="text"
            name="packingQtyValue"
            value={formInfo.packingQtyValue}
            onChange={handleInputChange}
            placeholder="Packing Quantity Value"
          />

          <label htmlFor="deliveryMode">Delivery Mode</label>
          <select
            id="deliveryMode"
            name="deliveryMode"
            value={formInfo.deliveryMode}
            onChange={handleInputChange}
          >
            {deliveryModeOptions.map((deliveryMode, index) => (
              <option key={index} value={deliveryMode}>
                {deliveryMode}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="getSample">
        <h2>Get Sample</h2>
        <div>
          <label htmlFor="getSampleOnAddress">Get Sample on Address</label>
          <textarea
            id="getSampleOnAddress"
            name="getSampleOnAddress"
            value={formInfo.getSampleOnAddress}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="getSampleInCountry">Country</label>
          <select
            id="getSampleInCountry"
            name="getSampleInCountry"
            value={formInfo.getSampleInCountry}
            onChange={handleInputChange}
          >
            {countryOptions.map((getSampleInCountry, index) => (
              <option key={index} value={getSampleInCountry}>
                {getSampleInCountry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="getSampleInState">State</label>
          <select
            id="getSampleInState"
            name="getSampleInState"
            value={formInfo.getSampleInState}
            onChange={handleInputChange}
          >
            {stateOptions.map((getSampleInState, index) => (
              <option key={index} value={getSampleInState}>
                {getSampleInState}
              </option>
            ))}
          </select>

          <label htmlFor="getSampleInCity">City/Village</label>
          <input
            type="text"
            name="getSampleInCity"
            value={formInfo.getSampleInCity}
            onChange={handleInputChange}
            placeholder="City/Village"
          />
        </div>

        <div>
          <label htmlFor="getSampleOnPincode">Pin code or Zip code</label>
          <input
            type="number"
            name="getSampleOnPincode"
            value={formInfo.getSampleOnPincode}
            onChange={handleInputChange}
            placeholder="Pin code or Zip code"
          />
        </div>
      </div>

      <div className="otherInfo">
        <h2>Other Information</h2>
        <div>
          <label htmlFor="notesOrRemarks">Notes/Remarks</label>
          <textarea
            id="notesOrRemarks"
            name="notesOrRemarks"
            value={formInfo.notesOrRemarks}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="emailForQuotation">Email for Quotation</label>
          <input
            type="text"
            name="emailForQuotation"
            value={formInfo.emailForQuotation}
            onChange={handleInputChange}
            placeholder="Give Email to get Quotation"
          />
        </div>
      </div>

      <button className="send-button">Send</button>
    </form>
  );
}

export default Forms_Structure;