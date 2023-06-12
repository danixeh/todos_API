const transporter = require("../utils/mailer");
const ejs = require("ejs");
const path = require("path");

const sanMail = (email, doc, attachments) => {
  transporter
    .sendMail({
      from: "danielcaro317@gmail.com",
      to: [email],
      subject: "welcome",
      text: "Test",
      html: doc,
      attachments,
    })
    .then(() => console.log("email send"))
    .catch((error) => console.log(error));
};

const sendWelcomeMail = async (email, data) => {
  const filePath = path.join(__dirname, "../views/welcomemail.ejs");
  const doc = await ejs.renderFile(filePath, data);
  const attachments = [
    {
      filename: "f938eb43-ab2e-41ad-bbde-59f56ddc934a.jpg",
      path: path.join(
        __dirname,
        "../views/images/f938eb43-ab2e-41ad-bbde-59f56ddc934a.jpg"
      ),
      cid: "onetest@forum-api.com",
    },
  ];
  sanMail(email, doc, attachments);
};

module.exports = {
  sendWelcomeMail: sendWelcomeMail,
};
