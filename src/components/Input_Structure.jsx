import React from "react";

function Input_Structure({label_value, type_value, id_value, value, onchange_value, placeholder_value}) {
    return (
        <>
            <label htmlFor={id_value}>{label_value}</label>
            <input
                id={id_value}
                type={(type_value)?type_value:"text"}
                name={id_value}
                value={value}
                onChange={onchange_value}
                placeholder={placeholder_value}
            />
        </>
    )
}

export default Input_Structure;