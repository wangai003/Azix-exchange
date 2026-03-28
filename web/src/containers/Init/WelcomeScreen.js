import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';

import { STATIC_ICONS } from 'config/icons';

const WelcomeScreen = ({ onChangeStep }) => {
	return (
		<div className="welcome-screen">
			<div className="content">
				<img
					src={STATIC_ICONS.HOLLAEX_INIT_LOGO}
					alt="AZIX logo"
					className="logo"
				/>
				<div className="body-content">
					<div className="header">
						First-time AZIX operator detected. Proceed with administrator
						account creation
					</div>
					<div className="description">
						This procedure should only be completed by the AZIX platform owner.
						When creating your operator administrator account, make sure to
						store the details securely because they may not be recoverable
						later.
					</div>
					<div className="btn-container">
						<Button onClick={() => onChangeStep('email')}>
							Begin AZIX setup
						</Button>
					</div>
				</div>
			</div>
			<div className="footer">
				Why am I seeing this page? This page is a one-time page for the original
				AZIX administrator. Upon admin account creation this page will no longer
				be reachable. For further assistance contact{' '}
				<Link>support@azix.world</Link>
			</div>
		</div>
	);
};

export default WelcomeScreen;
