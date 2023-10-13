import React from "react";
  

function TextArea_Structure({requirement, label_value, id_value, value, onchange_value}) {
    return (
        <>
            <label htmlFor={id_value}>{label_value}</label>
            <textarea required={(requirement)?requirement:false}
                id={id_value}
                name={id_value}
                value={value}
                onChange={onchange_value} 
            ></textarea>
        </>
    )
}

export default TextArea_Structure;