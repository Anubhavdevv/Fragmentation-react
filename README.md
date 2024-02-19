# Task-Fragmentation
AN assignment to test the fragmentation ability of Developers

My Pick - Fragment the functionality into a custom hook that will be reusable through out the app.

## My Reasons for Fragmentating it like that

Write down your reasons here.
My decision to fragment the BurnPage component into a set of custom hooks and smaller, focused components was driven by several key considerations aimed at improving the maintainability, readability, and scalability of the codebase. By extracting the business logic and state management into custom hooks (useWalletState, useBurnTransactions, useSupplyInfo), I aimed to separate the concerns within the application. This approach allows the component code to focus solely on the UI logic, making it cleaner and easier to understand. The hooks handle the complexities of state management and interactions with external APIs or services, providing a clear interface to the components. One of the main goals of this refactoring was to increase the reusability of code within the application. Custom hooks offer a powerful way to encapsulate logic and state management in a reusable format. By designing hooks that manage wallet connections, burn transactions, and supply information, I created building blocks that can be easily reused across different components or features within the application