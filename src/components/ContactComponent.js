import React, {useState} from 'react';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prevData)=>({...prevData, [name]: value}) );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit logic goes here
    //console.log(formData);
    // Resets form after submission
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  return (
    <div className='home-content'>
    <form onSubmit={handleSubmit}>
    <input
      className="fullName"
      id="fullname"
      type="text"
      name="fullName"
      placeholder="Name"
      value={formData.fullName}
      onChange={handleChange}
    />
    <br />
    <input
      className="email"
      id="email"
      type="text"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <br />
    <input
      className="subject"
      id="subject"
      type="text"
      name="subject"
      placeholder="Subject"
      value={formData.subject}
      onChange={handleChange}
    />
    <br />
    <textarea
      className="message"
      id="message"
      name="message"
      placeholder="Message"
      rows="8"
      cols="48"
      value={formData.message}
      onChange={handleChange}
    ></textarea>
    <br />
    <input type="submit" value="Send" className="submit" />
    <input type="reset" value="Reset" className="reset" />
  </form>
  </div>
);
};

export default ContactComponent;