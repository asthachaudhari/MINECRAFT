import React from "react";

function DropDown_Structure({label_value, options_value, id_value, value, onchange_value}) {
    return (
        <>
          <label htmlFor={id_value}>{label_value}</label>
          <select
            id={id_value}
            name={id_value}
            value={value}
            onChange={onchange_value}
          >
            {options_value.map((values, index) => (
              <option key={index} value={values}>
                {values}
              </option>
            ))}
          </select>
        </>
    )
}

export default DropDown_Structure;