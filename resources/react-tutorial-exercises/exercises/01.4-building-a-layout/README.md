---
tutorial: "https://www.youtube.com/watch?v=5Z12IWd4CI8"
---

# `01.4` Building a layout

Let's practice a little bit more about using JSX for creating HTML.

Now we have another object that is just a bit more complex than the last one.

# :pencil: Instructions:

You have a `data` object that contains Bob Dylan's information (image, title, etc).

```js
const data = {
  image: "https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true",
  cardTitle: "Bob Dylan",
  cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia"
  }
};
```

1. Use the information contained in `data` to render a bootstrap card, for example: The card's title will be the `data.cardTitle`, etc.

Here is the HTML code for creating a card in bootstrap:

```html
<div class="card m-5">
  <img class="card-img-top" src="..." alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```
Source: [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/#example)

### Expected result:

![Bob Dylan Card](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/66b097ba2f1812e3cabcce38566b633edd991638/.learn/assets/1.4-1.png?raw=true)



