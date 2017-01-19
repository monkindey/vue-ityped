## Vue-ityped

> awesome [ityped](https://github.com/luisvinicius167/ityped) for vue

## Usage

```html
<span v-typed.showCursor="{typeSpeed: 100}">
	<span>Dead simple animated typing</span><br>
	<span>No jQuery dependency.</span><br>
	<span>Tiny size: <3kb.</span><br>
	<span>Just install and Enjoy!</span>
</span>
```

```javascript
import vueTyped from 'vue-ityped';

var vm = new Vue({
	el: '#app',
	directives: {
		typed: vueTyped
	}
});
```