const express = require('express');
const axios = require('axios');
const md5 = require('md5');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/signup', async (req, res) => {
  const { email, firstName, lastName, password, mobile } = req.body;
  if (!email || !firstName || !lastName || !password || !mobile) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const agentCode = 'TBC';
  const staticToken = 'eyJyNzMyZTEzNGMyMTg5NTEiiOjE1ODAzODQyNTA3MDN9';
  const securityKey = md5(agentCode + '|' + staticToken);

  const headers = {
    'Content-Type': 'application/json',
    'Security-Key': securityKey
  };

  try {
    const response = await axios.post('https://datacliq.co.uk/apis', {
      requestType: 'REGT',
      userMail: email,
      userPassword: password,
      userFullname: firstName + ' ' + lastName,
      userPhone: mobile,
      agentCode: agentCode,
      userAgent: 'Your User Agent'
    }, { headers });

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
    res.status(error.response.status).json({ message: error.response.data });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
