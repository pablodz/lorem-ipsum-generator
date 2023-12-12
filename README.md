# Vue 3 + Vite



```bash
# npm
npm i @pablodz/lorem-ipsum-generator@latest

# bun
bun install @pablodz/lorem-ipsum-generator@latest
```


Inside your vuejs project `src/main.js`
```js
import { createApp } from "vue";

// Lorem generator
import LoremIpsumGenerator from '@pablodz/lorem-ipsum-generator';


const app = createApp(App);

app.use(LoremIpsumGenerator);

app.mount("#app");
```
