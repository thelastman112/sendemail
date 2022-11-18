import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    //email pengirim
    user: '',
    //password pengirim (password ini dibuat di gmail setting bisa dilihat caranya di "https://help.warmupinbox.com/en/articles/4934806-configure-for-google-workplace-with-two-factor-authentication-2fa")
    pass: "",
  },
});

export const mailOptions = {
  //email pengirim
  from: '' ,
  // email penerima
  to: '',
};
