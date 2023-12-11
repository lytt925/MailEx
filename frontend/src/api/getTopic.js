const axios = require('axios');
const fs = require('fs');

const options = {
  method: 'GET',
  url: 'https://conversation-starter1.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'conversation-starter1.p.rapidapi.com'
  }
};

const getTopic = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data.question;
  } catch (error) {
    console.error(error);
  }
};

// get 90 times and saved to json file
const topics = [];
const getTopics = async () => {
  for (let i = 0; i < 8; i++) {
    const question = await getTopic();
    topics.push(question);
    // wait 0.5 sec
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  return topics;
}

getTopics().then((topics) => {
  fs.writeFileSync('topics.json', JSON.stringify(topics));
});

