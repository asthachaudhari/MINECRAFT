import React from "react";

function CheckList_Structure({label_value, options_value, id_value, onchange_value}) {
    return (
        <>
          <div className="product-infromation-component-checkbox-label">
            <label htmlFor={id_value}>{label_value}</label>
          </div>
          <div className="product-infromation-component-checkbox-boxes">
            {options_value.map((product, index) => (
              <React.Fragment key={index}>
                <label htmlFor={id_value}>
                  <input
                    type="checkbox"
                    id={id_value}
                    name={id_value}
                    value={product.replace(" ", "_")}
                    onChange={onchange_value}
                  />
                  {product}
                </label>
              </React.Fragment>
            ))}
          </div>
        </>
    )
}

export default CheckList_Structure;