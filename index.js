import openai from "./config/open-ai.js";
import readlineSync from "readline-sync";

const main = async() => {

    const chatHistory = []; // Store conversation history

    while (true) {
        const userInput = readlineSync.question("You: ");

        try {
            // Construct messages by iterating over the history
            const messages = chatHistory.map(([role, content]) => ({ role, content }));

            // Add latest user input
            messages.push({ role: 'user', content: userInput });

            // Call the API with user input
            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: messages
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