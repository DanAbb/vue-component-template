# Vue Component Template

[Vue.js](https://vuejs.org/) boilerplate for setting up your own component library

## Structure

All components are stored in the `src/components` directory.

The `docs` directory is a vue application in which you can use your new components and create documentation.

Styles are in the `src/scss` directory and are compiled into 1 file.

Download or fork this repo and start building your own components.

## Using your component library

### Install via npm

```bash
npm install YOUR_LIBRARY
```

### Import and use your library. You can also enable individual components

```javascript
import Vue from 'vue';
import YOUR_LIBRARY from 'THE_NAME_OF_YOUR_LIBRARY';
import 'THE_NAME_OF_YOUR_LIBRARY/lib/main.css';

Vue.use(YOUR_LIBRARY);

// OR

Vue.component(YOUR_LIBRARY.Test.name, YOUR_LIBRARY.Test);
...
```
