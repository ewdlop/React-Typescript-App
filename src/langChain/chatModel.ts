import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, ChatMessage, SystemMessage } from "langchain/schema";

const chat = new ChatOpenAI({
  temperature: 0,
  azureOpenAIApiKey: "",
});

const result = await chat.predictMessages([
  new HumanMessage("Translate this sentence from English to French. I love programming.")
]);

/*
  AIMessage {
    content: "J'adore la programmation."
  }
*/