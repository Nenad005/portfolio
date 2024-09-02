import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { useRef } from "react";

function Contact({nameRef}){
    const [result, setResult] = useState("");
    const targetRef = useRef(null)

    const onSubmit = async (event) => {
        // console.log("TEST", event)

        // console.log(targetRef)
        setResult("Sending....");
        const formData = new FormData(targetRef.current);

        formData.append("access_key", "7f76a7a0-8544-4f70-9df7-8e72713bfeb8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    const {values, errors, touched, handleChange, handleSubmit} = useFormik({
        initialValues: {
            eMail: '',
            fullName : "",
            subject : "",
            phoneNumber : "",
            message : ""
        },
        validationSchema: basicSchema,
        onSubmit
    })

    // console.log(errors)

    return <section id="contact">
        <div id="section-icon" className="test-el"><FontAwesomeIcon icon={faEnvelope}/>CONTACT</div>
        <h1 id="contact-title" className="mb-7">Let's work <span>Together!</span></h1>
        <form onSubmit={handleSubmit} id="contact-form" ref={targetRef}>
            <div className="lg:grid grid-cols-2 lg:gap-x-10">
                <div id="contact-box">
                    <div className="flex items-center">
                        <label>FULL NAME</label>
                        {errors.fullName && touched.fullName && <p className="error">*{errors.fullName}</p>}
                    </div>
                    <input  value={values.fullName} ref={nameRef}
                            onChange={handleChange} 
                            type="text" id="fullName" 
                            name="fullName" placeholder="your full name"
                            className={errors.fullName && touched.fullName ? 'input-error' : ''}>
                    </input>
                </div>
                <div id="contact-box">
                    <div className="flex items-center">
                        <label>E-MAIL</label>
                        {errors.eMail && touched.eMail && <p className="error">*{errors.eMail}</p>}
                    </div>
                    <input  value={values.eMail} 
                            onChange={handleChange} 
                            type="text" id="eMail" 
                            name="eMail" placeholder="your e-mail"
                            className={errors.eMail && touched.eMail ? 'input-error' : ''}>
                    </input>
                </div>
                <div id="contact-box">
                    <div className="flex items-center">
                        <label>SUBJECT</label>
                        {errors.subject && touched.subject && <p className="error">*{errors.subject}</p>}
                    </div>
                    <input  value={values.subject}
                            onChange={handleChange}
                            type="text" id="subject"
                            name="subject" placeholder="message subject"
                            className={errors.subject && touched.subject ? 'input-error' : ''}>
                    </input>
                </div>
                <div id="contact-box">
                    <div className="flex items-center">
                        <label>PHONE NUMBER</label>
                        {errors.phoneNumber && touched.phoneNumber && <p className="error">*{errors.phoneNumber}</p>}
                    </div>
                    <input  value={values.phoneNumber} 
                            onChange={handleChange} 
                            type="text" id="phoneNumber" 
                            name="phoneNumber" placeholder="your phone number"
                            className={errors.phoneNumber && touched.phoneNumber ? 'input-error' : ''}>
                    </input>
                </div>
                <div id="contact-box">
                <div className="flex items-center">
                        <label>MESSAGE</label>
                        {errors.message && touched.message && <p className="error">*{errors.message}</p>}
                    </div>
                    <textarea   value={values.message} 
                                onChange={handleChange} 
                                type="text" className={`h-[100px] flex 
                                justify-start items-start ${errors.message && touched.message ? 'input-error' : ''}`} id="message" 
                                name="message" placeholder="message content">
                    </textarea>
                </div>
            </div>
            <button type="submit" className="action-button w-[200px] mb-[20px] group">
                <FontAwesomeIcon icon={faEnvelope} className='mr-2 [&>*]:fill-black group-hover:[&>*]:fill-accent
                                                                  transition-all duration-200 ease-linear'/>
                    SEND MESSAGE</button>
        </form>
    </section>   
}

export default Contact