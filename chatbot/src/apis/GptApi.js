// import axios from 'axios';

// const API_KEY = ""; // Your API key here
// console.log(API_KEY);

// export const getAIResponse = async (message) => {
//     const response = await axios.post(
//         'https://api.openai.com/v1/chat/completions',
//         {
//             model: 'gpt-3.5-turbo',
//             messages: [{ role: 'user', content: message }],
//         },
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${API_KEY}`,
//             },
//         }
//     );
//     return response.data.choices[0].message.content;
// };