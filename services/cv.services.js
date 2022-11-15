const got = require('got');
const moment = require("moment")

const generate = async (req,res) => {
   
    const {position, type, title, company, skills, email, signature} = req.body
    const skills_push = []
    skills_push.push(skills)
    const prompt = `I am thrilled  to be applying for the ${position} position at ${company}. Since I am someone who thrives in fast-paced environments that are centered around positive leadership.\\n my skills are ${skills}`;
  const url = 'https://api.openai.com/v1/engines/davinci/completions';
  const params = {
    "prompt": prompt ,
    "max_tokens": 120,
    "temperature": 0.6,
    "frequency_penalty": 0.5,
    "n": 1
  };

  const headers = {
    'Authorization': `Bearer ${process.env.OPENAI_SECRET_KEY}`,
  };

  try {
    const response = await got.post(url, { json: params, headers: headers }).json();
    output = `${prompt}${response.choices[0].text}`;
    let date = moment()
    let currentDate = date.format('MMMM Do YYYY');
    let Title = `application for the post of ${title} at ${company}`
    return res.status(200).json({Title,output});
  } catch (err) {
    console.log(err);
  }
};


module.exports = {generate}