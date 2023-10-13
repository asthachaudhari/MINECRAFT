import React from "react";

function DropDown_Structure({requirement, label_value, options_value, id_value, value, onchange_value}) {
    return (
        <>
          <label htmlFor={id_value}>{label_value}</label>
          <select required={(requirement)?requirement:false}
            id={id_value}
            name={id_value}
            value={value}
            onChange={onchange_value}
          >
            <option key="selects" value="">Select</option>
            {options_value.map((values, index) => (
                <option key={values} value={values}>
                  {values}
                </option>
            ))}
          </select>
        </>
    )
}

export default DropDown_Structure;