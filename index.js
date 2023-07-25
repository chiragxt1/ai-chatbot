import openai from "./config/open-ai.js";
import readlineSync from "readline-sync";

const main = async() => {
    while (true) {
        const userInput = readlineSync.question("You: ");

        try {
            if (userInput.toLowerCase() === "exit") {
                return;
            }
        } catch (error) {
            console.log(error);
        }
    }
    // const userName = readlineSync.question("Create a username: ");
    // console.log(`Hey ${userName}`);
    
    // const chatCompletion = await openai.createChatCompletion({
    //     model: 'gpt-3.5-turbo',
    //     messages: [
    //         { role: 'user', content: 'What is the capital of United Arab Emirates?' }
    //     ]
    // });
    // console.log(chatCompletion.data.choices[0].message.content);
}

main();