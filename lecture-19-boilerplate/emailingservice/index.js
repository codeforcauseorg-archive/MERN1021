const nodemailer = require("nodemailer");
const config = {
  email: {
    smtp: {
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "merndemo1021@gmail.com",
        pass: "WernDem@1021",
      },
    },
    from: "merndemo1021@gmail.com",
  },
};

const transport = nodemailer.createTransport(config.email.smtp);


const sendEmail = async (to, subject, text) => {
  const msg = { from: config.email.from, to, subject, text };
  await transport.sendMail(msg);
};


sendEmail("agni.bagchi2@gmail.com", "This is an epic email", "We are so awwesome in sending email");