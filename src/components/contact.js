import React, { useRef, useState } from "react";
import "./contact.css";
import elsa_pic from "./images/Elsa_SnowQueen.png";
import emailjs from "@emailjs/browser";

function Contact_view() {
  const form = useRef();

  const public_service = process.env.REACT_APP_EMAIL_SERVICE;
  const public_API = process.env.REACT_APP_EMAIL_API;
  const [formdata, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [Errors, setErrors] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formdata.user_name.trim()) {
      validationErrors.user_name = "Name is require";
    }
    if (!formdata.user_email.trim()) {
      validationErrors.user_email = "email is require";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formdata.user_email)) {
      validationErrors.user_email = "email is not valid";
    }
    if (!formdata.message.trim()) {
      validationErrors.message = "message is require";
    } else if (formdata.message.length < 10) {
      validationErrors.message = "message minimum have 10 number";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm(public_service, "template_gq4a7zs", form.current, public_API).then(
        (result) => {
          console.log(result.text);
          alert("Your message have been sent!");
          form.current.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };
  return (
    <div id="Contact" className="flex flex-row bg-[#053B50] w-full items-center justify-center h-100% pt-8 pb-8">
      <img src={elsa_pic} className="elsa" />
      <div className="md:w-3/5 sm:w-4/5 w-full flex flex-col md:p-12 p-6">
        <h1 className="font-kanit lg:text-7xl md:text-5xl text-3xl text-[#EEEEEE] mb-6">Contact Me!</h1>
        <form className="flex flex-col items-center" ref={form} onSubmit={sendEmail}>
          <label className="font-martian text-xl text-[#eeeeee] p-1">Name</label>
          <input className={!Errors.user_name ? "input_bar mb-7 p-2 z-10" : "input_bar p-2 z-10"} type="text" id="user_name" name="user_name" onChange={handleFormChange} />
          {Errors.user_name && <span className="mb-1 text-left text-red-500">{Errors.user_name}</span>}

          <label className="font-martian text-xl text-[#eeeeee] p-1">Email</label>
          <input className={!Errors.user_email ? "input_bar mb-7 p-2 z-10" : "input_bar p-2 z-10"} type="email" id="email" name="user_email" onChange={handleFormChange} />
          {Errors.user_email && <span className="mb-1 text-left text-red-500">{Errors.user_email}</span>}

          <label className="font-martian text-xl text-[#eeeeee] p-1">Message</label>
          <textarea className={!Errors.message ? "input_bar mb-7 h-48 p-2 z-10" : "input_bar h-48 p-2 z-10"} type="text" id="message" name="message" onChange={handleFormChange} />
          {Errors.message && <span className="mb-1 text-left text-red-500">{Errors.message}</span>}
          <input className="submit_bar bg-orange-400 hover:bg-orange-300 w-4/5 h-12 z-10 mt-2" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact_view;
