import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

const model = new OpenAI({
    temperature: 0,
    openAIApiKey: ""
});

const tools = [
    new SerpAPI("", {
      location: "Austin,Texas,United States",
      hl: "en",
      gl: "us",
    }),
    new Calculator(),
];

//This agent uses the ReAct framework (Synergizing Reasoning and Acting in Language Models) 
const executorLLM = await initializeAgentExecutorWithOptions(tools,model,{
    agentType: "zero-shot-react-description",
    verbose: true,
    
})

const input = "What was the high temperature in SF yesterday in Fahrenheit? What is that number raised to the .023 power?";

const resultLLM = await executorLLM.call({
  input,
});

const executorChatModels = await initializeAgentExecutorWithOptions(
    [new Calculator(), new SerpAPI()],
    new ChatOpenAI({ modelName: "gpt-4-0613", temperature: 0 }),
    {
      agentType: "openai-functions",
      verbose: true,
    }
  );
  
  const resultChatMdoels = await executorChatModels.run("What is the temperature in New York?");