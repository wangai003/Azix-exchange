import flatten from 'flat';

const options = { safe: true, delimiter: '_' };
const nestedIcons = {
	EXCHANGE: {
		LOADER: '/assets/light-spinner.gif',
		BOARDING_IMAGE: '/assets/background.png',
		LANDING_PAGE:
			"data:image/svg+xml;utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20320%2096'%3E%0A%3Crect%20width='320'%20height='96'%20rx='18'%20fill='%23ffffff'/%3E%0A%3Ctext%20x='26'%20y='58'%20font-size='42'%20font-family='Arial,%20Helvetica,%20sans-serif'%20font-weight='700'%20letter-spacing='6'%20fill='%230b0b0b'%3EAZIX%3C/text%3E%0A%3Crect%20x='24'%20y='68'%20width='128'%20height='6'%20rx='3'%20fill='%23d4af37'/%3E%0A%3Crect%20x='158'%20y='68'%20width='36'%20height='6'%20rx='3'%20fill='%230f6b3e'/%3E%0A%3C/svg%3E",
		LOGO:
			"data:image/svg+xml;utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20320%2096'%3E%0A%3Crect%20width='320'%20height='96'%20rx='18'%20fill='%23ffffff'/%3E%0A%3Ctext%20x='26'%20y='58'%20font-size='42'%20font-family='Arial,%20Helvetica,%20sans-serif'%20font-weight='700'%20letter-spacing='6'%20fill='%230b0b0b'%3EAZIX%3C/text%3E%0A%3Crect%20x='24'%20y='68'%20width='128'%20height='6'%20rx='3'%20fill='%23d4af37'/%3E%0A%3Crect%20x='158'%20y='68'%20width='36'%20height='6'%20rx='3'%20fill='%230f6b3e'/%3E%0A%3C/svg%3E",
	},

	SUMMARY: {
		LEVEL_1: '/assets/summary/level-1.png',
		LEVEL_2: '/assets/summary/level-2.png',
		LEVEL_3: '/assets/summary/level-3.png',
		LEVEL_4: '/assets/summary/level-4.png',
	},

	DEMO_LOGIN_ICON: '/assets/icons/demo-login-icon-light.svg',
	CANCEL_WITHDRAW: '/assets/icons/cancel-withdraw-light-02.svg',

	CHECK: '/assets/images/Orderbook scrolling-01.svg',
	VERIFICATION_SENT: '/assets/images/resend-email-light.svg',

	STAKING_AMOUNT_MODAL: '/assets/stake/staking-modal-background-light.jpg',
	STAKING_PERIOD_ITEM:
		'/assets/stake/staking-period-option-background-light.png',
	STAKING_MODAL_BACKGROUND: '/assets/stake/modal_background_light.png',
	STAKING_SUCCESSFUL_MESSAGE: '/assets/stake/stake-unstake-light.png',
	STAKING_PANEL_BACKGROUND: '/assets/stake/stake-unstake-light.png',
	STAKING_BACKGROUND: '/assets/stake/stake-background-light.png',
	WITHDRAWAL_BLOCK: '/assets/images/withdrawal-block-light.svg',
};

const icons = flatten(nestedIcons, options);

export default icons;
