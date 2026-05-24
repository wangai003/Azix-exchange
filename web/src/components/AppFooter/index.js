import React from 'react';
import classnames from 'classnames';
import { isMobile } from 'react-device-detect';
import withConfig from 'components/ConfigProvider/withConfig';
import { Image } from 'components';
import withEdit from 'components/EditProvider/withEdit';
import STRINGS from 'config/localizedStrings';

const AZIX_FOOTER_SECTIONS = [
	{
		TITLE: 'Exchange',
		LINKS: [
			{ text: 'Login', link: 'https://azix.world/login' },
			{ text: 'Sign Up', link: 'https://azix.world/signup' },
			{ text: 'Markets', link: 'https://azix.world/markets' },
			{ text: 'Marketplace', link: 'https://azix.world/marketplace' },
		],
	},
	{
		TITLE: 'About',
		LINKS: [
			{ text: 'Website', link: 'https://azix.world' },
			{ text: 'Contact Us', link: 'https://azix.world/contact' },
			{ text: 'Terms of Use', link: 'https://azix.world/terms' },
			{ text: 'Privacy Policy', link: 'https://azix.world/privacy' },
		],
	},
	{
		TITLE: 'Developers',
		LINKS: [
			{ text: 'GitHub', link: 'https://github.com/wangai003' },
			{ text: 'API Docs', link: 'https://azix.world/api-docs' },
		],
	},
	{
		TITLE: 'Resources',
		LINKS: [
			{ text: 'FAQ', link: 'https://azix.world/faq' },
			{ text: 'Blog', link: 'https://azix.world/blog' },
			{ text: 'Support', link: 'https://azix.world/support' },
		],
	},
	{
		TITLE: 'Social',
		LINKS: [
			{ text: 'Twitter / X', link: 'https://x.com/azixworld' },
			{ text: 'Telegram', link: 'https://t.me/azixworld' },
			{ text: 'LinkedIn', link: 'https://linkedin.com/company/azixworld' },
			{ text: 'Instagram', link: 'https://instagram.com/azixworld' },
		],
	},
];

const AppFooter = ({
	className,
	constants = { description: '' },
	constants: { links = {} },
	icons: ICONS,
	isEditMode,
}) => {
	return (
		<div
			className={classnames(
				'app_footer-container',
				'd-flex',
				'flex-column',
				'apply_rtl',
				{ 'deep-footer': isEditMode },
				className
			)}
		>
			<div
				className={classnames(
					'd-flex',
					'justify-content-around',
					'footer-row-content',
					'mx-auto'
				)}
			>
				<div
					className={classnames(
						'd-flex',
						'justify-content-center',
						'align-items-start',
						'footer-links-section'
					)}
				>
					<div
						className={classnames('d-flex', 'flex-1', {
							'flex-column': isMobile,
						})}
					>
						<div
							className={classnames('d-flex', 'flex-wrap', {
								'flex-column': isMobile,
							})}
						>
							{AZIX_FOOTER_SECTIONS.filter(({ LINKS }) => LINKS.length).map(
								({ TITLE, LINKS }, index) => (
									<div
										key={index}
										className={classnames(
											'd-flex',
											'flex-column',
											'footer-links-group'
										)}
									>
										<div className="footer-links-section--title">{TITLE}</div>
										<div
											className={classnames(
												'd-flex',
												'flex-column',
												'footer-links-section--list'
											)}
										>
											{LINKS.map(({ link, text, icon }, indexLink) => (
												<div key={indexLink} className="link-section d-flex">
													<a
														href={link || '#'}
														target="_blank"
														rel="noopener noreferrer"
													>
														<div
															className={classnames(
																'd-flex',
																'f-1',
																'flex-row'
															)}
														>
															<div>
																{icon ? (
																	<img
																		src={icon}
																		className="social_icon"
																		alt="social_icons"
																	/>
																) : null}
															</div>
															<span>{text}</span>
														</div>
													</a>
												</div>
											))}
										</div>
									</div>
								)
							)}
						</div>
						<div className="footer_separter">
							<div className="footer-content">
								<div className="d-flex footer-img-wrapper">
									<Image
										iconId="EXCHANGE_LOGO"
										icon={ICONS['EXCHANGE_LOGO']}
										wrapperClassName="footer-logo"
									/>
								</div>
								<div className="footer-txt">{constants.description || ''}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className={classnames(
					'footer-row-bottom',
					'd-flex',
					'justify-content-between',
					'align-center'
				)}
			>
				<div className="pt-2">
					{!links.hide_referral_badge && (
						<a
							href={links.referral_link || 'https://azix.world'}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>{links.referral_label || 'Powered by AZIX'}</span>
						</a>
					)}
				</div>
				<div className="d-flex pt-2">
					<div className="pr-2">
						<a
							href="https://azix.world/terms"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<span>{STRINGS['FOOTER.TERMS_OF_SERVICE']}</span>
							</span>
						</a>
					</div>
					<span>|</span>
					<div className="pl-2">
						<a
							href="https://azix.world/privacy"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>{STRINGS['FOOTER.PRIVACY_POLICY']}</span>
						</a>
					</div>
				</div>
				<div className="px-4 mx-4" />
			</div>
		</div>
	);
};

AppFooter.defaultProps = {
	className: '',
	onChangeLanguage: () => () => {},
	activeLanguage: '',
};

export default withEdit(withConfig(AppFooter));
