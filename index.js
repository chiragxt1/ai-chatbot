import openai from "./config/open-ai.js";
import readlineSync from "readline-sync";

const main = async() => {
    while (true) {
        const userInput = readlineSync.question("You: ");

        try {
            // Call the API with user input
            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userInput }]
            });
            
            // Get completion text/content
            const completionText = completion.data.choices[0].message.content;

            if (userInput.toLowerCase() === "exit") {
                console.log("Bot: " + completionText);
                return;
            }

            console.log("Bot: " + completionText);
        } catch (error) {
            console.log(error);
        }
    }
}

main();