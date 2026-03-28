import flatten from 'flat';

const options = { safe: true, delimiter: '_' };
const nestedColors = {
	base: {
		background: '#0b0d10',
		'top-bar-navigation': '#090b0d',
		'secondary-navigation-bar': '#12161a',
		'wallet-sidebar-and-popup': '#171c21',
		footer: '#000000',
	},

	labels: {
		'important-active-labels-text-graphics': '#f5f5f5',
		'secondary-inactive-label-text-graphics': '#c2a84a',
		fields: '#1a1a1a',
		'inactive-button': '#666666',
	},

	trading: {
		'selling-related-elements': '#d4af37',
		'buying-related-elements': '#0f6b3e',
	},

	specials: {
		'buttons-links-and-highlights': '#d4af37',
		'chat-messages': '#c2a84a',
		'my-username-in-chat': '#0f6b3e',
		'checks-okay-done': '#0f6b3e',
		'pending-waiting-caution': '#d4af37',
		'notifications-alerts-warnings': '#c0392b',
	},
};

const color = flatten(nestedColors, options);

export default color;
