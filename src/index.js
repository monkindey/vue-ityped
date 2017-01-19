// import getCssPath from './get-css-path.js';
import oa from 'object-assign';

export default {
	inserted: function(el, binding) {
		var strings = el.innerText;
		var modifiers = binding.modifiers;
		var options = {
			strings: strings.split('\n'),
			loop: modifiers.loop,
			showCursor: modifiers.showcursor || false
		};

		el.innerHTML = '';
		ityped.init(el, oa(options, binding.value))
	}
}