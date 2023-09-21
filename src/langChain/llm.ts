import { OpenAI } from "langchain/llms/openai";

const llm = new OpenAI({
  temperature: 0.9,
  azureOpenAIApiKey: "",
});