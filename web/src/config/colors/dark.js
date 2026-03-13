import flatten from 'flat';

const options = { safe: true, delimiter: '_' };
const nestedColors = {
	base: {
		background: '#0a0a0a',
		'top-bar-navigation': '#000000',
		'secondary-navigation-bar': '#141414',
		'wallet-sidebar-and-popup': '#1a1a1a',
		footer: '#000000',
	},

	labels: {
		'important-active-labels-text-graphics': '#ffffff',
		'secondary-inactive-label-text-graphics': '#b0b0b0',
		fields: '#1a1a1a',
		'inactive-button': '#666666',
	},

	trading: {
		'selling-related-elements': '#d4af37',
		'buying-related-elements': '#a0a0a0',
	},

	specials: {
		'buttons-links-and-highlights': '#d4af37',
		'chat-messages': '#888888',
		'my-username-in-chat': '#d4af37',
		'checks-okay-done': '#888888',
		'pending-waiting-caution': '#d4af37',
		'notifications-alerts-warnings': '#d4af37',
	},
};

const color = flatten(nestedColors, options);

export default color;
