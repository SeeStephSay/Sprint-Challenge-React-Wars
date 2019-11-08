# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library (for the web) made up of reusable components that make it easier to scale as your project grows.

1. What does it mean to think in react?

Thinking in React means to make sure to create each of your components to do one really specific thing, and for them not to overlap into each others' territory. 

1. Describe state.

State is an object built into React that determines how a component renders and behaves, which allows us to create components that are interactive. State stores property values (not the value of your house, lol) that belong to the component, and when these values change, the component re-renders. It is also considered private, and fully controlled by the component.

1. Describe props.

"Props" stands for properties, and are inputs built into React. They are like function arguments in JavaScript. We pass them into React components as arguments, via HTML attributes, like "source" for an img, and can also pass them from one function, into another. Props are read-only, so you would get an error if you tried to change their value.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are things that happen when a component is rendered. We sync these effects by declaring the state or prop we want to sync it to in an array, as the second parameter of the useEffect hook.
