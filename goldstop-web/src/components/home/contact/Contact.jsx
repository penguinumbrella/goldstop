import './contact.css';
import mail from "../../../assets/contact/HiMail.svg";
import phone from "../../../assets/contact/Phone.svg";
import schedule from "../../../assets/contact/AiFillSchedule.svg";
import waypoint from "../../../assets/contact/BiMap.svg";
import shoerepairlogo from "../../../assets/contact/logo.svg";
import { useState, forwardRef} from 'react';
import emailjs from 'emailjs-com'; // Import emailjs

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iu4rr8a', 'template_g86zami', e.target, 'Ftt_GmD4OLn7-P2kJ')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <div ref={ref} className='contact'>
      
      <div className='bottom-contact'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <h1>Contact Form</h1>
          <h2>* Marked as Important</h2>
          <div className="form-group">
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Name *" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Email *" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              id="phonenumber" 
              name="phonenumber" 
              placeholder="Phone Number" 
              value={formData.phonenumber} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="Subject *" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group message">
            <textarea 
              id="message" 
              name="message" 
              placeholder="Type your message here! *" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
        <div>
        <div className='contact-info'>
          <div className='item'>
            <a href="mailto:goldstoprepair@gmail.com">
              <img src={mail} alt="Email" />
              <span>goldstoprepair@gmail.com</span>
            </a>
          </div>
          <div className='item'>
            <a href="tel:(604) 734-7477">
              <img src={phone} alt="Phone" />
              <span>(604) 734-7477</span>
            </a>
          </div>
          <div className='item'>
            <a href="https://www.google.com/maps?q=3308+Dunbar+Street,+Vancouver,+BC+V6S+2C1" target="_blank" rel="noopener noreferrer">
              <img src={waypoint} alt="Location" />
              <span>3308 Dunbar Street, Vancouver, BC V6S 2C1</span>
            </a>
          </div>
          <div className='item'>
            <img src={schedule} alt="Schedule" />
            <span>Hours: Tuesday - Saturday 9:30AM - 5:30PM</span>
          </div>
          <div className='contact-text'>
          <h2>CONTACT US!</h2>
          <p>We value your feedback and are here to assist you with any comments, questions, or concerns you may have. Whether you're seeking more information about our shoe products and repair services, need assistance with an order, or have suggestions on how we can improve, please do not hesitate to reach out!</p>
        </div>
        </div>
        </div>
        
      </div>
    </div>
  );
});

export default Contact;
