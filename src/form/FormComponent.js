import React from 'react';

const FormComponent = ({ exampleProp, type, onChange, value }) => {
  return (
    <div className="label">
      <label>
        {exampleProp}:<br />
        <input
          type={type}
          name={exampleProp}
          value={value}
          onChange={onChange}
          className="input-box"
        />
      </label>
    </div>
  );
};

export default FormComponent;
