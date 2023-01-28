 import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//     organization: "org-CadFyZaDoYlvPY7n7zrBIoRI",
//     apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// export function fetchRedData() {

//   const url =`http://localhost:3232/Geomap?`;

//   return fetch(url)
//     .then((res) => res.json())
//     .then((json) => { 
//       if (isFeatureCollection(json.redLiningData)) {
//         return json.redLiningData;
//       }
//       return undefined;
//     });
// }

// const { Configuration, OpenAIApi } = require("openai");
// require('dotenv').config()

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export default async function Gpt3 (word1) {
const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "write a scary story about " + word1,
  max_tokens: 3500
});
console.log(completion.data.choices[0].text);

return completion
}
// export default Gpt3();




// const OpenAI = require('openai-api');

// // Load your key from an environment variable or secret management service
// // (do not include your key directly in your code)
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// const openai = new OpenAI('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');

// (async () => {
//     const gptResponse = await openai.complete({
//         engine: 'davinci',
//         prompt: 'create a scary story',
//         maxTokens: 5,
//         temperature: 0.9,
//         topP: 1,
//         presencePenalty: 0,
//         frequencyPenalty: 0,
//         bestOf: 1,
//         n: 1,
//         stream: false,
//         stop: ['\n', "testing"]
//     });
//     console.log("hello");

//     console.log(gptResponse.data);
// })();





// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
// apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion("text-davinci-002", {
// prompt: "Write a blog post on vadala onions",
// temperature: 0.7,
// max_tokens: 256,
// top_p: 1,
// frequency_penalty: 0,
// presence_penalty: 0,
// }); 

// export default function Gpt3(){
//   console.log(response.choices[0].text);
//   return <div>hello</div>
// }
