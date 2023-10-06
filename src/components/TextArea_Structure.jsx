import React from "react";
  

function TextArea_Structure({label_value, id_value, value, onchange_value, placeholder_value}) {
    return (
        <>
            <label htmlFor={id_value}>{label_value}</label>
            <textarea
                id={id_value}
                name={id_value}
                value={value}
                onChange={onchange_value}
                placeholder={placeholder_value}
            ></textarea>
        </>
    )
}

export default TextArea_Structure;