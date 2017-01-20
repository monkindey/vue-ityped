## Vue-ityped

> awesome [ityped](https://github.com/luisvinicius167/ityped) for vue

## Example

[Live Demo](https://monkindey.github.io/vue-ityped/example/index.html)

## Dependencies

* Vue
* ityped@0.0.8

## Usage

### HTML
```html
<span v-typed.showCursor="{typeSpeed: 100}">
	<span>Dead simple animated typing</span><br>
	<span>No jQuery dependency.</span><br>
	<span>Tiny size: <3kb.</span><br>
	<span>Just install and Enjoy!</span>
</span>
```

### Vue
```javascript
import vueTyped from 'vue-ityped';

var vm = new Vue({
	el: '#app',
	directives: {
		typed: vueTyped
	}
});
```

## Configuration 

Almost same to [ityped Configuration](https://github.com/luisvinicius167/ityped#api), but a little different is

* Put the configuartion in different place, you can pass the configuration to the directive value, like that:

```html
<span v-typed="{typeSpeed: 100, backSpeed: 50, startDelay: 500}">
</span>
```

* `showCursor` and `loop` use in vue directive modifiers, like that: 

```html
<span v-typed.showCursor="">
</span>
```
just like make the ityped configuration showCursor is true, so do loop.

* the directive element's children text will be equal to ityped `strings`,
when you have multi children, you should make them line break, for example the `<br>` tag

## Thanks

Powered by [vue.js](https://github.com/vuejs/vue) and [ityped](https://github.com/luisvinicius167/ityped)