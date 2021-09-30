---
tutorial: "https://www.youtube.com/watch?v=EdpPIo_JNVc"
---

# `03` Render with Functions

JSX allows using functions to render HTML, and that is awesome!

It is a strongly recommended practice because it lets you create templates and re-use your code, e.g.:

```js

// WHAT: This function returns a string that will be rendered
const PrintHello = () => {
    return <h1>Hello World</h1>;
}
               //what           //where
ReactDOM.render(PrintHello(), myDiv);
```

:mag_right: Important: The function `PrintHello` starts with a capital letter because we are going to converted into a [React Component](https://reactjs.org/docs/react-component.html) in the next exercise.

## :pencil: Instructions:

1. Make the function `PrintHello` return `<h1>I Love React</h1>` instead of `<h1>Hello World</h1>`.
