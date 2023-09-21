import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
    MessagesPlaceholder,
} from "langchain/prompts";

const model = new OpenAI({});
const memoryLLM = new BufferMemory();
const chainLLM = new ConversationChain({
  llm: model,
  memory: memoryLLM,
  verbose: true,
});
const res1LLM = await chainLLM.call({ input: "Hi! I'm Jim." });

const chat = new ChatOpenAI({ temperature: 0 });

const chatPrompt = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know."
  ),
  new MessagesPlaceholder("history"),
  HumanMessagePromptTemplate.fromTemplate("{input}"),
]);

// Return the current conversation directly as messages and insert them into the MessagesPlaceholder in the above prompt.
const memoryChatModels = new BufferMemory({
  returnMessages: true,
  memoryKey: "history"
});

const chainChatModels = new ConversationChain({
  memory: memoryChatModels,
  prompt: chatPrompt,
  llm: chat,
  verbose: true,
});

const resChatModels = await chainChatModels.call({
  input: "My name is Jim.",
});