//using usestate for managing component level
import React, { useState, useEffect } from "react";
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

function Forms_Structure() {
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
    product: "",
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
          <label htmlFor="companyName">Name of Company</label>
          <input
            type="text"
            name="companyName"
            value={formInfo.companyName}
            onChange={handleInputChange}
            placeholder="Company Name"
          />
        </div>

        <div>
          <label htmlFor="companyAddress">Company Address</label>
          <textarea
            id="companyAddress"
            name="companyAddress"
            value={formInfo.companyAddress}
            onChange={handleInputChange}
            placeholder="Address of Company"
          ></textarea>
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formInfo.country}
            onChange={handleInputChange}
          >
            {countryOptions.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state"
            value={formInfo.state}
            onChange={handleInputChange}
          >
            {stateOptions.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>

          <label htmlFor="city">City/Village</label>
          <input
            type="text"
            name="city"
            value={formInfo.city}
            onChange={handleInputChange}
            placeholder="City/Village"
          />
        </div>

        <div>
          <label htmlFor="pincode">Pincode or Zipcode</label>
          <input
            type="number"
            name="pincode"
            value={formInfo.pincode}
            onChange={handleInputChange}
            placeholder="Pincode or Zipcode"
          />
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
          <label htmlFor="productBentonite">Name of Company</label>
          <select
            id="productBentonite"
            name="productBentonite"
            value={formInfo.productBentonite}
            onChange={handleInputChange}
          >
            {BentoniteOptions.map((productBentonite, index) => (
              <option key={index} value={productBentonite}>
                {productBentonite}
              </option>
            ))}
          </select>
        </div>

        <div>
          {productOptions.map((product, index) => (
            <React.Fragment key={index}>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="selectedProduct"
                  value={product}
                  onChange={handleInputChange}
                />
                {product}
              </label>
              {(index + 1) % 4 == 0 && <br />}
            </React.Fragment>
          ))}
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