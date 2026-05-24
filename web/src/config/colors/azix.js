import flatten from 'flat';
const options = { safe: true, delimiter: '_' };
const nestedColors = {
	base: {
		background: '#0A0C0A',
		'top-bar-navigation': '#111411',
		'secondary-navigation-bar': '#181C18',
		'wallet-sidebar-and-popup': '#1E231E',
		footer: '#0A0C0A',
	},
	labels: {
		'important-active-labels-text-graphics': '#F0EDE4',
		'secondary-inactive-label-text-graphics': '#C9A84C',
		fields: '#1A1F1A',
		'inactive-button': '#4A5A4A',
	},
	trading: {
		'selling-related-elements': '#C9A84C',
		'buying-related-elements': '#2D7A3A',
	},
	specials: {
		'buttons-links-and-highlights': '#C9A84C',
		'chat-messages': '#C9A84C',
		'my-username-in-chat': '#2D7A3A',
		'checks-okay-done': '#2D7A3A',
		'pending-waiting-caution': '#C9A84C',
		'notifications-alerts-warnings': '#c0392b',
	},
};
const color = flatten(nestedColors, options);
export default color;
