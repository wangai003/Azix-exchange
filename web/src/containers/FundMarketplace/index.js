import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './FundMarketplace.scss';

const FLAGS = {
	KE: '🇰🇪',
	NG: '🇳🇬',
	ZA: '🇿🇦',
	GH: '🇬🇭',
	EG: '🇪🇬',
	MA: '🇲🇦',
	ET: '🇪🇹',
	TZ: '🇹🇿',
	UG: '🇺🇬',
	RW: '🇷🇼',
};
const SECTOR_MAP = {
	fintech: 'Fintech',
	energy_renewables: 'Energy & Renewables',
	healthcare: 'Healthcare',
	agritech: 'Agritech',
	infrastructure: 'Infrastructure',
	real_estate: 'Real Estate',
	mining_resources: 'Mining',
	consumer_goods: 'Consumer',
	financial_services: 'Financial Services',
};
const TYPE_MAP = {
	equity_share: 'Equity',
	fund_unit: 'Fund Unit',
	bond: 'Bond',
	infrastructure: 'Infra',
	real_estate: 'Real Estate',
	crypto: 'Crypto',
	stablecoin: 'Stablecoin',
	native: 'Native Coin',
};

const COINGECKO_IDS = [
	'bitcoin',
	'ethereum',
	'binancecoin',
	'solana',
	'ripple',
	'cardano',
	'tron',
	'avalanche-2',
	'chainlink',
	'polkadot',
	'litecoin',
	'bitcoin-cash',
	'stellar',
	'dogecoin',
	'shiba-inu',
	'uniswap',
	'tether',
	'usd-coin',
];

const STABLE_IDS = new Set(['tether', 'usd-coin']);

const PE_ASSETS = [
	{
		symbol: 'AKOFA',
		name: 'Akofa Coin',
		category: 'akofa',
		type: 'native',
		price: '$0.84',
		change: '+5.2%',
		up: true,
		issuer: 'AZIX Foundation',
		jurisdiction: 'GH',
		status: 'live',
		statusLabel: 'Live',
		meta: {
			nav: 0.84,
			nav_currency: 'USD',
			sector: 'financial_services',
			asset_type: 'native',
			accreditation_required: false,
			fx_risk_disclosure: false,
			aml_risk_tier: 'low',
			fund_documents_url: '#',
			description:
				'AZIX native utility coin. Zero-fee PE subscriptions, governance voting, staking rewards.',
		},
	},
	{
		symbol: 'KEF1',
		name: 'Kenya Energy Fund I',
		category: 'pe',
		type: 'fund_unit',
		price: '$142.50',
		change: '+1.2%',
		up: true,
		issuer: 'Acacia Capital Partners',
		jurisdiction: 'KE',
		status: 'open',
		statusLabel: 'Open',
		meta: {
			nav: 142.5,
			nav_currency: 'USD',
			sector: 'energy_renewables',
			asset_type: 'fund_unit',
			min_investment: 25000,
			lock_up_period_days: 1825,
			fund_life_years: 10,
			vintage_year: 2024,
			target_fund_size: 50000000,
			hard_cap: 75000000,
			subscription_open: true,
			accreditation_required: true,
			fx_risk_disclosure: true,
			aml_risk_tier: 'medium',
			regulatory_framework: 'CMA_KE',
			fund_documents_url: '#',
		},
	},
	{
		symbol: 'NGFT',
		name: 'Nigeria Fintech Growth',
		category: 'pe',
		type: 'equity_share',
		price: '$88.20',
		change: '+0.8%',
		up: true,
		issuer: 'Lagos Growth Capital',
		jurisdiction: 'NG',
		status: 'open',
		statusLabel: 'Open',
		meta: {
			nav: 88.2,
			nav_currency: 'USD',
			sector: 'fintech',
			asset_type: 'equity_share',
			min_investment: 10000,
			lock_up_period_days: 1095,
			fund_life_years: 7,
			vintage_year: 2025,
			target_fund_size: 30000000,
			subscription_open: true,
			accreditation_required: true,
			fx_risk_disclosure: true,
			aml_risk_tier: 'medium',
			regulatory_framework: 'SEC_NG',
			fund_documents_url: '#',
		},
	},
	{
		symbol: 'ZAHC',
		name: 'SA Healthcare Bond',
		category: 'pe',
		type: 'bond',
		price: 'ZAR 1,000',
		change: '-0.2%',
		up: false,
		issuer: 'Ubuntu Capital Group',
		jurisdiction: 'ZA',
		status: 'closed',
		statusLabel: 'Closed',
		meta: {
			nav: 1000,
			nav_currency: 'ZAR',
			sector: 'healthcare',
			asset_type: 'bond',
			min_investment: 500000,
			lock_up_period_days: 730,
			fund_life_years: 5,
			vintage_year: 2023,
			target_fund_size: 200000000,
			subscription_open: false,
			redemption_open: true,
			accreditation_required: true,
			fx_risk_disclosure: true,
			aml_risk_tier: 'low',
			regulatory_framework: 'FSCA_ZA',
			fund_documents_url: '#',
		},
	},
	{
		symbol: 'GHAT',
		name: 'Ghana Agritech Ventures',
		category: 'pe',
		type: 'fund_unit',
		price: '$55.00',
		change: '+3.1%',
		up: true,
		issuer: 'Gold Coast Private Equity',
		jurisdiction: 'GH',
		status: 'open',
		statusLabel: 'Open',
		meta: {
			nav: 55,
			nav_currency: 'USD',
			sector: 'agritech',
			asset_type: 'fund_unit',
			min_investment: 15000,
			lock_up_period_days: 2555,
			fund_life_years: 8,
			vintage_year: 2025,
			target_fund_size: 20000000,
			subscription_open: true,
			accreditation_required: true,
			fx_risk_disclosure: true,
			aml_risk_tier: 'medium',
			regulatory_framework: 'SEC_GH',
			fund_documents_url: '#',
		},
	},
];

const formatPrice = (price) => {
	if (price >= 1000)
		return `$${price.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
	if (price >= 1)
		return `$${price.toLocaleString(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})}`;
	if (price >= 0.01) return `$${price.toFixed(4)}`;
	return `$${price.toFixed(6)}`;
};

const formatChange = (pct) => {
	if (pct === null || pct === undefined) return '0.00%';
	const sign = pct >= 0 ? '+' : '';
	return `${sign}${pct.toFixed(2)}%`;
};

const formatMarketCap = (mc) => {
	if (!mc) return '—';
	if (mc >= 1e12) return `$${(mc / 1e12).toFixed(2)}T`;
	if (mc >= 1e9) return `$${(mc / 1e9).toFixed(2)}B`;
	if (mc >= 1e6) return `$${(mc / 1e6).toFixed(2)}M`;
	return `$${mc.toLocaleString()}`;
};

const coinGeckoToAsset = (c) => ({
	symbol: c.symbol.toUpperCase(),
	name: c.name,
	category: STABLE_IDS.has(c.id) ? 'stable' : 'crypto',
	type: STABLE_IDS.has(c.id) ? 'stablecoin' : 'crypto',
	price: formatPrice(c.current_price),
	change: formatChange(c.price_change_percentage_24h),
	up: (c.price_change_percentage_24h || 0) >= 0,
	issuer: 'Decentralized',
	jurisdiction: null,
	status: 'live',
	statusLabel: 'Live',
	image: c.image,
	meta: {
		nav: c.current_price,
		nav_currency: 'USD',
		asset_type: STABLE_IDS.has(c.id) ? 'stablecoin' : 'crypto',
		market_cap: formatMarketCap(c.market_cap),
		volume_24h: formatMarketCap(c.total_volume),
		rank: `#${c.market_cap_rank}`,
		accreditation_required: false,
		fx_risk_disclosure: false,
		aml_risk_tier: 'low',
		description: `${
			c.name
		} (${c.symbol.toUpperCase()}) — live price from CoinGecko.`,
	},
});

const FILTERS = ['All', 'PE Funds', 'Crypto', 'Stablecoins', 'Akofa'];
const FILTER_MAP = {
	All: null,
	'PE Funds': 'pe',
	Crypto: 'crypto',
	Stablecoins: 'stable',
	Akofa: 'akofa',
};

const FundMarketplace = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [searchVal, setSearchVal] = useState('');
	const [selectedAsset, setSelectedAsset] = useState(null);
	const [cryptoAssets, setCryptoAssets] = useState([]);
	const [loading, setLoading] = useState(true);
	const [lastUpdated, setLastUpdated] = useState(null);
	const [apiError, setApiError] = useState(false);

	const fetchCrypto = () => {
		const ids = COINGECKO_IDS.join(',');
		const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h`;
		fetch(url)
			.then((r) => {
				if (!r.ok) throw new Error(`HTTP ${r.status}`);
				return r.json();
			})
			.then((data) => {
				setCryptoAssets(data.map(coinGeckoToAsset));
				setLastUpdated(new Date().toLocaleTimeString());
				setApiError(false);
				setLoading(false);
			})
			.catch(() => {
				setApiError(true);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchCrypto();
		const interval = setInterval(fetchCrypto, 60000);
		return () => clearInterval(interval);
	}, []);

	const allAssets = [...PE_ASSETS, ...cryptoAssets];
	const catFilter = FILTER_MAP[activeFilter];
	const filtered = allAssets.filter((a) => {
		const matchCat = !catFilter || a.category === catFilter;
		const matchSearch =
			!searchVal ||
			a.name.toLowerCase().includes(searchVal) ||
			a.symbol.toLowerCase().includes(searchVal);
		return matchCat && matchSearch;
	});

	const openCount = PE_ASSETS.filter(
		(a) => a.status === 'open' || a.status === 'live'
	).length;

	return (
		<div className="azix-marketplace">
			<div className="azix-marketplace__topbar">
				<div className="azix-marketplace__logo">
					<div className="azix-marketplace__logo-mark">AZIX</div>
					<div>
						<div className="azix-marketplace__logo-name">AZIX</div>
						<div className="azix-marketplace__logo-sub">
							African Zone · Int'l Exchange
						</div>
					</div>
				</div>
				<div className="azix-marketplace__nav">
					<div className="azix-marketplace__nav-item active">Marketplace</div>
					<div className="azix-marketplace__nav-item">Portfolio</div>
					<div className="azix-marketplace__nav-item">Trade</div>
				</div>
				<div className="azix-marketplace__actions">
					<button className="azix-marketplace__btn-outline">
						Verify Account
					</button>
					<button className="azix-marketplace__btn-gold">Connect Wallet</button>
				</div>
			</div>

			<div className="azix-marketplace__akofa-banner">
				<span>
					<strong>AKOFA</strong> — our native coin — is now live. Use AKOFA for
					zero-fee subscriptions to African PE funds.
				</span>
				{lastUpdated && (
					<span className="azix-marketplace__banner-link">
						Live prices · updated {lastUpdated}{' '}
						<button
							onClick={fetchCrypto}
							style={{
								background: 'none',
								border: 'none',
								color: '#C9A84C',
								cursor: 'pointer',
								fontSize: '12px',
							}}
						>
							↻ Refresh
						</button>
					</span>
				)}
				{apiError && (
					<span style={{ color: '#e74c3c', fontSize: '12px' }}>
						⚠ Live prices unavailable — retrying...
					</span>
				)}
			</div>

			<div className="azix-marketplace__hero">
				<div className="azix-marketplace__hero-left">
					<h1>
						African <span>Private Equity</span> Exchange
					</h1>
					<p>
						Institutional-grade PE funds, equity, crypto, and stablecoins —
						built for Africa's fastest-growing markets.
					</p>
				</div>
				<div className="azix-marketplace__stats">
					<div className="azix-marketplace__stat">
						<span className="azix-marketplace__stat-val">{openCount}</span>
						<span className="azix-marketplace__stat-label">Open funds</span>
					</div>
					<div className="azix-marketplace__stat">
						<span className="azix-marketplace__stat-val">14</span>
						<span className="azix-marketplace__stat-label">Jurisdictions</span>
					</div>
					<div className="azix-marketplace__stat">
						<span className="azix-marketplace__stat-val">
							{loading ? '...' : cryptoAssets.length + PE_ASSETS.length}
						</span>
						<span className="azix-marketplace__stat-label">Listed assets</span>
					</div>
				</div>
			</div>

			<div className="azix-marketplace__toolbar">
				<input
					className="azix-marketplace__search"
					placeholder="Search funds, coins..."
					value={searchVal}
					onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
				/>
				<div className="azix-marketplace__filters">
					{FILTERS.map((f) => (
						<button
							key={f}
							className={`azix-marketplace__filter-btn ${
								activeFilter === f ? 'active' : ''
							}`}
							onClick={() => setActiveFilter(f)}
						>
							{f}
						</button>
					))}
				</div>
			</div>

			<div className="azix-marketplace__grid">
				{loading && activeFilter !== 'PE Funds' && activeFilter !== 'Akofa' ? (
					<div className="azix-marketplace__loading">
						<div className="azix-marketplace__spinner" />
						<span>Fetching live prices from CoinGecko...</span>
					</div>
				) : filtered.length === 0 ? (
					<div className="azix-marketplace__empty">
						No assets match your search
					</div>
				) : (
					filtered.map((a) => {
						const m = a.meta || {};
						const flag = a.jurisdiction ? FLAGS[a.jurisdiction] || '🌍' : '';
						const minInv = m.min_investment
							? `${m.nav_currency || 'USD'} ${Number(
									m.min_investment
							  ).toLocaleString()}`
							: 'Open';
						const lockup = m.lock_up_period_days
							? `${(m.lock_up_period_days / 365).toFixed(1)}y`
							: '—';
						const sector = m.sector
							? SECTOR_MAP[m.sector] || m.sector
							: a.type === 'crypto'
							? 'Crypto'
							: a.type === 'stablecoin'
							? 'Stablecoin'
							: '';

						return (
							<div
								key={a.symbol}
								className={`azix-marketplace__card azix-marketplace__card--${a.category}`}
								onClick={() => setSelectedAsset(a)}
							>
								<div className="azix-marketplace__card-head">
									{a.image ? (
										<img
											src={a.image}
											alt={a.symbol}
											className="azix-marketplace__coin-img"
										/>
									) : (
										<div
											className={`azix-marketplace__coin azix-marketplace__coin--${a.category}`}
										>
											{a.symbol.slice(0, 3)}
										</div>
									)}
									<div className="azix-marketplace__card-title-group">
										<div className="azix-marketplace__card-name">{a.name}</div>
										<div className="azix-marketplace__card-issuer">
											{flag && <span>{flag}</span>}
											<span>{a.issuer}</span>
										</div>
									</div>
									<div
										className={`azix-marketplace__status azix-marketplace__status--${a.status}`}
									>
										{a.statusLabel}
									</div>
								</div>

								<div className="azix-marketplace__tags">
									{sector && (
										<span className="azix-marketplace__tag azix-marketplace__tag--sector">
											{sector}
										</span>
									)}
									<span className="azix-marketplace__tag azix-marketplace__tag--type">
										{TYPE_MAP[a.type] || a.type}
									</span>
									{a.jurisdiction && (
										<span className="azix-marketplace__tag azix-marketplace__tag--jur">
											{flag} {a.jurisdiction}
										</span>
									)}
									{m.rank && (
										<span className="azix-marketplace__tag azix-marketplace__tag--rank">
											{m.rank}
										</span>
									)}
								</div>

								<div className="azix-marketplace__metrics">
									<div>
										<div className="azix-marketplace__metric-label">Price</div>
										<div className="azix-marketplace__metric-val">
											{a.price}
										</div>
									</div>
									<div>
										<div className="azix-marketplace__metric-label">24h</div>
										<div
											className="azix-marketplace__metric-val"
											style={{ color: a.up ? '#3DA64F' : '#c0392b' }}
										>
											{a.change}
										</div>
									</div>
									<div>
										<div className="azix-marketplace__metric-label">
											{m.min_investment ? 'Min. invest' : 'Market Cap'}
										</div>
										<div className="azix-marketplace__metric-val">
											{m.min_investment ? minInv : m.market_cap || '—'}
										</div>
									</div>
									<div>
										<div className="azix-marketplace__metric-label">
											{m.lock_up_period_days ? 'Lock-up' : 'Volume 24h'}
										</div>
										<div className="azix-marketplace__metric-val">
											{m.lock_up_period_days ? lockup : m.volume_24h || '—'}
										</div>
									</div>
								</div>

								<div className="azix-marketplace__footer">
									<div className="azix-marketplace__badges">
										{m.accreditation_required && (
											<span className="azix-marketplace__badge azix-marketplace__badge--accred">
												Accredited
											</span>
										)}
										{m.fx_risk_disclosure && (
											<span className="azix-marketplace__badge azix-marketplace__badge--fx">
												FX Risk
											</span>
										)}
										{m.aml_risk_tier && (
											<span
												className={`azix-marketplace__badge azix-marketplace__badge--aml-${
													m.aml_risk_tier === 'low' ? 'low' : 'med'
												}`}
											>
												AML: {m.aml_risk_tier}
											</span>
										)}
									</div>
									<div className="azix-marketplace__reg">
										{m.regulatory_framework || ''}
									</div>
								</div>
							</div>
						);
					})
				)}
			</div>

			{selectedAsset && (
				<div
					className="azix-marketplace__modal-backdrop"
					onClick={() => setSelectedAsset(null)}
				>
					<div
						className="azix-marketplace__modal"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="azix-marketplace__modal-head">
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
							>
								{selectedAsset.image && (
									<img
										src={selectedAsset.image}
										alt={selectedAsset.symbol}
										style={{ width: 32, height: 32 }}
									/>
								)}
								<div className="azix-marketplace__modal-title">
									{selectedAsset.name} ({selectedAsset.symbol})
								</div>
							</div>
							<button
								className="azix-marketplace__modal-close"
								onClick={() => setSelectedAsset(null)}
							>
								✕
							</button>
						</div>
						<div className="azix-marketplace__modal-body">
							{selectedAsset.meta?.description && (
								<p
									style={{
										fontSize: '13px',
										color: '#E0D9CF',
										marginBottom: '1rem',
										lineHeight: 1.6,
									}}
								>
									{selectedAsset.meta.description}
								</p>
							)}
							{Object.entries(selectedAsset.meta || {})
								.filter(
									([k]) =>
										k !== 'description' &&
										k !== 'nav' &&
										k !== 'fund_documents_url'
								)
								.map(([k, v]) => (
									<div key={k} className="azix-marketplace__modal-row">
										<span className="azix-marketplace__modal-key">
											{k.replace(/_/g, ' ')}
										</span>
										<span className="azix-marketplace__modal-val">
											{v === null ? '—' : String(v)}
										</span>
									</div>
								))}
						</div>
						<div className="azix-marketplace__modal-actions">
							<button
								className={`azix-marketplace__subscribe-btn ${
									selectedAsset.status === 'open' ||
									selectedAsset.status === 'live'
										? 'active'
										: 'inactive'
								}`}
								disabled={
									selectedAsset.status !== 'open' &&
									selectedAsset.status !== 'live'
								}
							>
								{selectedAsset.category === 'pe'
									? selectedAsset.status === 'open'
										? 'Subscribe →'
										: 'Subscription Closed'
									: selectedAsset.status === 'live'
									? `Trade ${selectedAsset.symbol} →`
									: 'Not Available'}
							</button>
							{selectedAsset.meta?.fund_documents_url &&
								selectedAsset.meta.fund_documents_url !== '#' && (
									<button className="azix-marketplace__docs-btn">
										<span role="img" aria-label="document">
											📄
										</span>{' '}
										Docs
									</button>
								)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (store) => ({
	coins: store.app.coins,
	user: store.user,
});

export default connect(mapStateToProps)(FundMarketplace);
