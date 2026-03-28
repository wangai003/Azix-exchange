export const AZIX_PRIMARY_SYMBOL = 'akofa';
export const AFRICAN_PRIORITY_FIATS = ['kes', 'ngn', 'zar'];

const priorityIndex = (symbol = '') => {
	const normalized = String(symbol || '').toLowerCase();
	if (normalized === AZIX_PRIMARY_SYMBOL) return 0;
	const fiatIndex = AFRICAN_PRIORITY_FIATS.indexOf(normalized);
	if (fiatIndex > -1) return fiatIndex + 1;
	return 100;
};

export const sortCoinEntriesForDisplay = (coins = {}) =>
	Object.entries(coins).sort(([aKey, aValue = {}], [bKey, bValue = {}]) => {
		const aSymbol = (aValue.symbol || aValue.code || aKey || '').toLowerCase();
		const bSymbol = (bValue.symbol || bValue.code || bKey || '').toLowerCase();
		const aPriority = priorityIndex(aSymbol);
		const bPriority = priorityIndex(bSymbol);
		if (aPriority !== bPriority) return aPriority - bPriority;
		const aName = String(
			aValue.fullname || aValue.display_name || aSymbol
		).toLowerCase();
		const bName = String(
			bValue.fullname || bValue.display_name || bSymbol
		).toLowerCase();
		return aName.localeCompare(bName);
	});

export const sortCoinKeysForDisplay = (coins = {}) =>
	sortCoinEntriesForDisplay(coins).map(([key]) => key);

export const sortCoinValuesForDisplay = (coins = {}) =>
	sortCoinEntriesForDisplay(coins).map(([, value]) => value);
