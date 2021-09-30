# `02.2` Mapeando funciones

Cuando estás mapeando un arreglo de datos para convertirlo en un arreglo HTML tienes que especificar una **"función de mapeo"** que recibirá cada elemento del arreglo original y lo transformará e insertará en el nuevo arreglo. Ej:

```js

const originalData = [];

const mappingFunction = (item, index) => {
  // devolver algo en JSX.
};

const htmlList = originalData.map(mappingFunction);
// la variable htmlList ahora contiene un nuevo arreglo.
```

## :pencil: Instrucciones:

1. Usa el componente [list-group de bootstrap](https://getbootstrap.com/docs/4.1/components/list-group/#basic-example) para renderizar una lista de planetas de un arreglo dado:

```js
const planets = [ 'Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune' ];
```

2. Usa la [función .map](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) y haz que la salida de tu algoritmo sea el siguiente HTML:

```jsx
<ul class="list-group m-5">
  <li class="list-group-item">Mars</li>
  <li class="list-group-item">Venus</li>
  <li class="list-group-item">Jupiter</li>
  <li class="list-group-item">Earth</li>
  <li class="list-group-item">Saturn</li>
  <li class="list-group-item">Neptune</li>
</ul>
```

3. Incluye todo junto en tu sitio web.

## Resultado esperado:

![list-group](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/66b097ba2f1812e3cabcce38566b633edd991638/.learn/assets/02.2-1.png?raw=true)
