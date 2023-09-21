import { PromptTemplate } from "langchain/prompts";
import {
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate
} from "langchain/prompts";
  
const template = "You are a helpful assistant that translates {input_language} to {output_language}.";
const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(template);
const humanTemplate = "{text}";
const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(humanTemplate);

// You can also pass ["{role}", "{template}"] tuples into the `.fromMessages()` method
// and they will be automatically converted into message prompts.
// const systemMessagePrompt = ["system", template];
// const humanMessagePrompt = ["user", humanTemplate];

const chatPrompt = ChatPromptTemplate.fromMessages([systemMessagePrompt, humanMessagePrompt]);

const formattedPrompt = await chatPrompt.formatMessages({
input_language: "English",
output_language: "French",
text: "I love programming."
});

const prompt = PromptTemplate.fromTemplate("What is a good name for a company that makes {product}?");

const llmFormattedPrompt = await prompt.format({
  product: "colorful socks"
});