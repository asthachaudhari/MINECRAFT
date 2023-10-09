import React, { useEffect } from "react";
import Company_Information from "../scenes/Company_Information";
import Contact_Information from "../scenes/Contact_Information";
import Product_Information from "../scenes/Product_Information";
import Product_Parameters from "../scenes/Product_Parameters";
import PackagingDelivery_Information from "../scenes/PackagingDelivery_Information";
import Get_Sample from "../scenes/Get_Sample";
import Other_Information from "../scenes/Other_Information";

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
    quality: "",
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
    if (name === "selectedProcess") {
      setProcessInfo({
        ...processInfo,
        [value]: !processInfo[value]
      });
    }
    else {
      setformInfo({
        ...formInfo,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    const keys = Object.keys(processInfo)
    const selectedprocesses = keys.filter((key) => processInfo[key])
    setformInfo({
      ...formInfo,
      process: selectedprocesses
    });
  }, [processInfo]);

  function onsubmit(){
    console.log("formInfo state:", formInfo);
  }

  return (
    <form>
      <h5>
        <strong>
          Fill out below Inquiry-form and get Quotation on Email, * Fields are
          mandatory
        </strong>
      </h5>
      <div className="formsInput">
        <Company_Information 
          companyName={formInfo.companyName}
          companyAddress={formInfo.companyAddress}
          country={formInfo.country}
          state={formInfo.state}
          city={formInfo.city}
          pincode={formInfo.pincode}
          handleInputChange={handleInputChange}
          />
        < Contact_Information 
          contactPerson={formInfo.contactPerson}
          designation={formInfo.designation}
          department={formInfo.department}
          email={formInfo.email}
          contactNumber={formInfo.contactNumber}
          whatsappNumber={formInfo.whatsappNumber}
          wechatNumber={formInfo.wechatNumber}
          handleInputChange={handleInputChange}
          />
        <Product_Information 
          productBentonite={formInfo.productBentonite}
          process={formInfo.process}
          handleInputChange={handleInputChange}
          />
        <Product_Parameters
          swelling={formInfo.swelling}
          viscosity={formInfo.viscosity}
          color={formInfo.color}
          plate={formInfo.plate}
          filterloss={formInfo.filterloss}
          quality={formInfo.quality}
          handleInputChange={handleInputChange}
          />
        <PackagingDelivery_Information 
          packingType={formInfo.packingType}
          packingQty={formInfo.packingQty}
          packingQtyValue={formInfo.packingQtyValue}
          deliveryMode={formInfo.deliveryMode}
          handleInputChange={handleInputChange}
          />
        <Get_Sample 
          getSampleOnAddress={formInfo.getSampleOnAddress}
          getSampleInCountry={formInfo.getSampleInCountry}
          getSampleInState={formInfo.getSampleInState}
          getSampleInCity={formInfo.getSampleInCity}
          getSampleOnPincode={formInfo.getSampleOnPincode}
          handleInputChange={handleInputChange}
          />
        <Other_Information 
          notesOrRemarks={formInfo.notesOrRemarks}
          emailForQuotation={formInfo.emailForQuotation}
          handleInputChange={handleInputChange}
          />
        </div>
        <button type='button' className="send-button" onClick={onsubmit}>Send</button>
    </form>
  );
}

export default Forms_Structure;