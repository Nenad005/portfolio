import * as yup from "yup"

export const basicSchema = yup.object().shape({
    eMail : yup.string().email("Please enter a valid email").required(),
    fullName : yup.string("Please enter your full name").required(),
    subject : yup.string("Please enter the subject").required(),
    phoneNumber : yup.string(),
    message : yup.string("Please enter your message").required()
})