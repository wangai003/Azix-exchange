import flatten from 'flat';

const options = { safe: true, delimiter: '_' };
export const nestedColors = {
	base: {
		background: '#f5f5f5',
		'top-bar-navigation': '#1a1a1a',
		'secondary-navigation-bar': '#e8e8e8',
		'wallet-sidebar-and-popup': '#ffffff',
		footer: '#1a1a1a',
	},

	labels: {
		'important-active-labels-text-graphics': '#1a1a1a',
		'secondary-inactive-label-text-graphics': '#666666',
		fields: '#e0e0e0',
		'inactive-button': '#999999',
	},

	trading: {
		'selling-related-elements': '#b8922a',
		'buying-related-elements': '#666666',
	},

	specials: {
		'buttons-links-and-highlights': '#d4af37',
		'chat-messages': '#555555',
		'my-username-in-chat': '#b8922a',
		'checks-okay-done': '#666666',
		'pending-waiting-caution': '#b8922a',
		'notifications-alerts-warnings': '#b8922a',
	},
};

const color = flatten(nestedColors, options);

export default color;
