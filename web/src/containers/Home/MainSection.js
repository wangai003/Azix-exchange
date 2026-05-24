import React from 'react';
import { isMobile } from 'react-device-detect';
import { Input } from 'antd';
import classnames from 'classnames';
import withConfig from 'components/ConfigProvider/withConfig';
import { Button } from 'components';
import { isLoggedIn } from 'utils/token';

const MainSection = ({
	style = {},
	onClickTrade,
	onClickDemo,
	signupEmail,
	setSignupEmail,
	icons: ICONS,
}) => {
	const onHandleNavigate = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		onClickDemo();
		if (!emailRegex.test(signupEmail)) {
			setSignupEmail(null);
		}
	};

	return (
		<div className={classnames('azix-hero-section')} style={style}>
			<div className={classnames('azix-hero-content')}>
				<div className="azix-hero-text">
					{/* Main heading */}
					<h1 className="azix-hero-title">
						<span className="azix-hero-highlight">African</span> Private Equity
						<br />
						<span className="azix-hero-highlight">+ Global Crypto</span>
					</h1>

					{/* Subheading */}
					<p className="azix-hero-subtitle">
						Trade institutional-grade PE funds, equities, and digital assets on
						one unified exchange. Built for Africa's fastest-growing markets.
					</p>

					{/* Key stats / value props */}
					<div className="azix-hero-props">
						<div className="azix-prop">
							<span className="azix-prop-icon" role="img" aria-label="globe">
								🌍
							</span>
							<span className="azix-prop-text">14 African Jurisdictions</span>
						</div>
						<div className="azix-prop">
							<span
								className="azix-prop-icon"
								role="img"
								aria-label="money bag"
							>
								💰
							</span>
							<span className="azix-prop-text">PE Funds + Crypto</span>
						</div>
						<div className="azix-prop">
							<span className="azix-prop-icon" role="img" aria-label="lock">
								🔐
							</span>
							<span className="azix-prop-text">
								Institutional-Grade Security
							</span>
						</div>
					</div>

					{/* CTA Section */}
					{!isLoggedIn() ? (
						<div className={classnames('azix-cta-wrapper')}>
							<div className="azix-email-signup">
								<Input
									className="azix-signup-field"
									placeholder="Enter your email"
									onChange={(e) => setSignupEmail(e.target.value)}
									value={signupEmail}
									type="email"
								/>
								<Button
									label="Get Started"
									onClick={onHandleNavigate}
									className="azix-cta-btn azix-cta-primary"
								/>
							</div>
							<p className="azix-cta-subtext">
								Join thousands of institutional investors on AZIX
							</p>
						</div>
					) : (
						<div className={classnames('azix-cta-wrapper')}>
							<button
								onClick={onClickTrade}
								className="azix-cta-btn azix-cta-primary"
							>
								Go to Marketplace
							</button>
							<p className="azix-cta-subtext">
								Explore PE funds and crypto markets
							</p>
						</div>
					)}
				</div>

				{/* Right side visual - gradient or illustration hint */}
				{!isMobile && (
					<div className="azix-hero-visual">
						<div className="azix-hero-glow">
							<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<linearGradient
										id="azix-grad"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="100%"
									>
										<stop
											offset="0%"
											style={{ stopColor: '#C9A84C', stopOpacity: 0.3 }}
										/>
										<stop
											offset="100%"
											style={{ stopColor: '#2D7A3A', stopOpacity: 0.1 }}
										/>
									</linearGradient>
								</defs>
								<circle cx="200" cy="200" r="150" fill="url(#azix-grad)" />
								<path
									d="M 150 200 L 250 150 L 300 250 Z"
									fill="none"
									stroke="#C9A84C"
									strokeWidth="2"
									opacity="0.5"
								/>
								<circle
									cx="200"
									cy="200"
									r="80"
									fill="none"
									stroke="#2D7A3A"
									strokeWidth="1.5"
									opacity="0.4"
								/>
							</svg>
						</div>
					</div>
				)}
			</div>

			{/* Stats bar at bottom */}
			<div className="azix-hero-stats">
				<div className="azix-stat">
					<span className="azix-stat-number">$7B+</span>
					<span className="azix-stat-label">Deal Value</span>
				</div>
				<div className="azix-stat">
					<span className="azix-stat-number">50+</span>
					<span className="azix-stat-label">PE Funds</span>
				</div>
				<div className="azix-stat">
					<span className="azix-stat-number">10,000+</span>
					<span className="azix-stat-label">Investors</span>
				</div>
			</div>
		</div>
	);
};

export default withConfig(MainSection);
