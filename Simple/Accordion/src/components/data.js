const accordionData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It allows developers to create reusable UI components."
  },
  {
    id: 2,
    question: "What are components in React?",
    answer: "Components are the building blocks of a React application. They are reusable pieces of UI that can manage their own state and logic."
  },
  {
    id: 3,
    question: "What is the virtual DOM in React?",
    answer: "The virtual DOM is a lightweight representation of the real DOM. React uses it to optimize updates by comparing the virtual DOM with a previous version and applying changes efficiently to the real DOM."
  },
  {
    id: 4,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe what the UI should look like and is transformed into JavaScript at runtime."
  },
  {
    id: 5,
    question: "What is state in React?",
    answer: "State is a built-in object in React components used to store dynamic data. It allows components to respond to user actions, lifecycle events, and other changes by re-rendering the UI."
  },
  {
    id: 6,
    question: "What is a prop in React?",
    answer: "Props (short for properties) are arguments passed to React components, allowing data to be passed from parent to child components."
  },
  {
    id: 7,
    question: "What is the difference between state and props?",
    answer: "State is managed within a component and can change over time, while props are passed from parent components and are immutable within the child component."
  },
  {
    id: 8,
    question: "What are React hooks?",
    answer: "React hooks are functions that allow developers to use state and other React features in functional components. Examples include useState, useEffect, and useContext."
  }
];

export default accordionData;
