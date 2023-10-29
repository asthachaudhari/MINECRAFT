import React, { useEffect, useRef } from "react";
import Company_Information from "../scenes/Company_Information";
import Contact_Information from "../scenes/Contact_Information";
import Product_Information from "../scenes/Product_Information";
import PackagingDelivery_Information from "../scenes/PackagingDelivery_Information";
import Get_Sample from "../scenes/Get_Sample";
import Other_Information from "../scenes/Other_Information";
import "./Forms_Structure.css";
import emailjs from '@emailjs/browser';


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
    Earthing: false,
  });

  const [formInfo, setformInfo] = React.useState({
    companyName: "",
    companyAddress: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    gender: "Mr",
    contactPerson: "",
    designation: "",
    department: "",
    email: "",
    contactNumber: "",
    whatsappNumber: "",
    wechatNumber: "",
    website: "",
    productBentonite: "",
    productBentoniteOther: "",
    application: "",
    packingType: "",
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
    if (name === "selectedApplication") {
      setProcessInfo({
        ...processInfo,
        [value]: !processInfo[value],
      });
    } else if (name === "productBentonite") {
      setformInfo({
        ...formInfo,
        [name]: value,
        productBentoniteOther: "",
      });
    } else {
      setformInfo({
        ...formInfo,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    const keys = Object.keys(processInfo);
    const selectedprocesses = keys.filter((key) => processInfo[key]);
    setformInfo({
      ...formInfo,
      application: selectedprocesses,
    });
  }, [processInfo]);

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("formInfo state:", formInfo);

    emailjs.sendForm('service_13rubp5', 'template_uynv3zo', form.current, '8Hu96Z53PEfkk6aMn')
    .then((result) => {
        console.log(result.text);
        alert("You have successfully submitted the form!");
        // Reset input fields
        setformInfo({
          companyName: "",
          companyAddress: "",
          country: "",
          state: "",
          city: "",
          pincode: "",
          gender: "Mr",
          contactPerson: "",
          designation: "",
          department: "",
          email: "",
          contactNumber: "",
          whatsappNumber: "",
          wechatNumber: "",
          website: "",
          productBentonite: "",
          productBentoniteOther: "",
          application: "",
          packingType: "",
          deliveryMode: "",
          getSampleOnAddress: "",
          getSampleInCountry: "",
          getSampleInState: "",
          getSampleInCity: "",
          getSampleOnPincode: "",
          notesOrRemarks: "",
          emailForQuotation: "",
        });

        // Reset dropdowns
        setProcessInfo({
          Piling: false,
          China_Clay: false,
          Foundry: false,
          Cat_Litter: false,
          Drilling: false,
          Calcium_Lumps: false,
          Water_Proofing: false,
          Sodium_Lumps: false,
          Earthing: false,
        });

    }, (error) => {
        console.log(error.text);
    });
    
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="heading">INQUIRY FORM</div>
      <div className="instructions">
        Fill out below Inquiry-form and get Quotation on Email, * Fields are
        mandatory
      </div>
      <hr />
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
        <hr />
        <Contact_Information
          contactPerson={formInfo.contactPerson}
          gender={formInfo.gender}
          designation={formInfo.designation}
          department={formInfo.department}
          email={formInfo.email}
          contactNumber={formInfo.contactNumber}
          whatsappNumber={formInfo.whatsappNumber}
          wechatNumber={formInfo.wechatNumber}
          website={formInfo.website}
          handleInputChange={handleInputChange}
        />
        <hr />
        <Product_Information
          productBentonite={formInfo.productBentonite}
          productBentoniteOther={formInfo.productBentoniteOther}
          application={formInfo.application}
          handleInputChange={handleInputChange}
        />
        <hr />
        <PackagingDelivery_Information
          packingType={formInfo.packingType}
          packingQty={formInfo.packingQty}
          packingQtyValue={formInfo.packingQtyValue}
          deliveryMode={formInfo.deliveryMode}
          handleInputChange={handleInputChange}
        />
        <hr />
        <Get_Sample
          getSampleOnAddress={formInfo.getSampleOnAddress}
          getSampleInCountry={formInfo.getSampleInCountry}
          getSampleInState={formInfo.getSampleInState}
          getSampleInCity={formInfo.getSampleInCity}
          getSampleOnPincode={formInfo.getSampleOnPincode}
          handleInputChange={handleInputChange}
        />
        <hr />
        <Other_Information
          notesOrRemarks={formInfo.notesOrRemarks}
          emailForQuotation={formInfo.emailForQuotation}
          handleInputChange={handleInputChange}
        />
      </div>
      <hr />
      <div className="submit-button">
        <input type="submit" id="submit-button" name="submit-button" />
      </div>
    </form>
  );
}

export default Forms_Structure;
