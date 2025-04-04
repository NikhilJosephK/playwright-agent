# Playwright Agent

A llm agent created using playwright mcp(modal context protocol) and any LLM inside VSCode.

# What is a Playwright Agent? 

It is basically a llm(inside vscode in our case) connected to the playwright mcp which is
capable of doing the UI testing and will write the necessary test based on our command.
The playwright mcp gives the llm(gpt4o or claude sonnet) the ability to interact with the webpage,
like click buttons, write content inside input fields etc. This channels all the hard work
related to testing to the agent.

# What is a MCP(Modal Context Protocol)?

The simplest explanation would be that it is like api for llm's. You give the llm which is stupid on its 
own, the ability to do real work. Using mcp llm can click buttons, read content, write content on a webpage
if the mcp is providing all the abilities. Example: Airbnb-mcp can give an llm the superpower to book
a hotel, a vacation etc based on our command.

Finally i dont have to write tests! Laziness helps!



