import React, { useState } from 'react';
import './MyForm.css';
import FormComponent from './FormComponent';

const MyForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions with the form data here
    console.log('Form Data:', formData);
  };

  return (
    <div className="form-container">
      <div className='back'>&lt;Back</div>
      <h2 className="heading">PERSONAL INFO</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <FormComponent exampleProp={'Name'} type="text" onChange={handleChange} value={formData.Name} />
        </div>

        <div>
          <FormComponent exampleProp={'Upi Id'} type="text" onChange={handleChange} value={formData.UpiId} />
        </div>

        <div>
          <FormComponent exampleProp={'Mobile No'} type="tel" onChange={handleChange} value={formData.MobileNo} />
        </div>

        <div>
          <FormComponent exampleProp={'Email Id'} type="email" onChange={handleChange} value={formData.email} />
        </div>

        <div>
          <FormComponent exampleProp={'Pin Code'} type="text" onChange={handleChange} value={formData.pin_code} />
        </div>

        <div className="content">
          Serving Areas are Chennai, Kelambakkam.
        </div>
        <button type="submit" className="button">
          Next
        </button>
        <div className="issues">
          <i>Any issues? Contact us at <a href="tel:+9163282273267" className='phone'>+9163282273267</a></i>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
