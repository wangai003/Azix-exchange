import flatten from 'flat';

const options = { safe: true, delimiter: '_' };
const nestedColors = {
	base: {
		background: '#120f06',
		'top-bar-navigation': '#100d05',
		'secondary-navigation-bar': '#1b1609',
		'wallet-sidebar-and-popup': '#1e1709',
		footer: '#100d05',
	},

	labels: {
		'important-active-labels-text-graphics': '#f7f2e2',
		'secondary-inactive-label-text-graphics': '#d4af37',
		fields: '#221b0d',
		'inactive-button': '#8b6d22',
	},

	trading: {
		'selling-related-elements': '#d4af37',
		'buying-related-elements': '#0f6b3e',
	},

	specials: {
		'buttons-links-and-highlights': '#f0c95a',
		'chat-messages': '#d4af37',
		'my-username-in-chat': '#0f6b3e',
		'checks-okay-done': '#0f6b3e',
		'pending-waiting-caution': '#d4af37',
		'notifications-alerts-warnings': '#c0392b',
	},
};

const color = flatten(nestedColors, options);

export default color;
