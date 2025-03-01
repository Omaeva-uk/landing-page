import { useState } from "react";
import "./cta.css"

const Cta = () => {

  const [submit, setSubmit] = useState("Submit");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(String(email).toLowerCase());
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.target);
    const email = formData.get("company");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Use the environment variable for the Web3Forms access key
    formData.append("access_key", import.meta.env.VITE_WEB3_FORM_ACCESS_KEY);
    formData.append("replyTo", "email");
    console.log(import.meta.env.VITE_WEB3_FORM_ACCESS_KEY);
  
    const json = JSON.stringify(Object.fromEntries(formData));
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const result = await response.json();
  
      if (result.success) {
        //console.log("Form submitted successfully:", result);
        //alert("Form submitted successfully!");
        setSubmit("Submitted Successfully!")
      } else {
        console.error("Form submission failed:", result);
        alert(result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Failed to submit. Please try again later.");
    }
  };



  return (
    <div className="w-full h-full border-4 border-black rounded-2xl flex max-lg:flex-col flex-wrap gap-7 p-6 max-sm:p-2">
      <div className="flex-1 pointer-events-none rounded-[60px] overflow-hidden h-full">
        <img src="https://omaeva.s3.eu-north-1.amazonaws.com/Get+in+Touch+.jpg" alt="normal image" className="w-full h-full object-cover " />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="font-bold text-[40px] sm:text-[60px] leading-[100%] max-w-xl tracking-tighter ">Have a Vision? Let’s Make It a Reality Together!</h2>
        <p className="text-xl max-sm:text-lg max-sm:leading-[120%] leading-tight max-w-md mt-2">Share your ideas, and let’s collaborate to design impactful solutions tailored just for you</p>
        <form onSubmit={onSubmit} className="mt-3 cta-form">
          
          <input type="text" placeholder="Your name" name="name" required />
          
          <input type="email" placeholder="you@company.com" name="email" required />
          
          <input type="message" placeholder="Tell us a little about your project" name="idea" required/>
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-xl font-medium my-4">How can we help?</p>
          <div className="flex gap-3 flex-wrap text-lg ">
            <div>
              <input type="checkbox" id="Website-design" name="ui/ux-design"/>
              <label htmlFor="Website-design" className="ml-2 accent-main">UI/UX Design</label>
            </div>
            <div>
              <input type="checkbox"   id="content-creation" name="branding-marketing"/>
              <label htmlFor="content-creation" className="ml-2 accent-main">Branding & Digital Marketing</label>
            </div>
            <div>
              <input type="checkbox"  id="ux-design" name="software-development" />
              <label htmlFor="ux-design" className="ml-2 accent-main">Software Development</label>
            </div>
            <div>
              <input type="checkbox"  id="strategy" name="web-development"/>
              <label htmlFor="strategy" className="ml-2 accent-main">Web development</label>
            </div>
            <div>
              <input type="checkbox"  id="micro-interaction" name="app-development"/>
              <label htmlFor="micro-interaction" className="ml-2 accent-main">App development</label>
            </div>
            <div>
              <input type="checkbox"  id="micro-interaction" name="it-consulting-services"/>
              <label htmlFor="micro-interaction" className="ml-2 accent-main">IT Consulting Services</label>
            </div>
            <div>
              <input type="checkbox" id="other" name="other"/>
              <label htmlFor="other" className="ml-2 accent-main">Other</label>
            </div>
          </div>
        <button type="submit" className="w-full bg-main font-semibold text-white p-2 mt-5 rounded-2xl">{submit}</button>
          
        </form>
        
      </div>
    </div>
  )
}

export default Cta;
