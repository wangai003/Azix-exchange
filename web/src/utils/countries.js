// https://github.com/OpenBookPrices/country-data
import React from 'react';
import classnames from 'classnames';
import { countries } from 'country-data';
import STRINGS from '../config/localizedStrings';
import { DEFAULT_COUNTRY } from '../config/constants';

const convertCountry = (value = {}) => {
	return {
		value: value.alpha2,
		name: value.name,
		label: value.name,
		phoneCodes: value.countryCallingCodes,
		phoneCode: '', // Temporarily kept for compatibility purposes
		flag: (
			<span
				className={classnames(
					'flag-icon',
					`flag-icon-${value.alpha2.toLowerCase()}`,
					'icon'
				)}
			/>
		),
	};
};

const filterCountries = (country) =>
	(country.status === 'assigned' && country.alpha2) || country.alpha2 === 'XK';

// African countries prioritised for AZIX exchange
const AFRICA_FIRST = [
	'GH',
	'NG',
	'KE',
	'ZA',
	'ET',
	'TZ',
	'UG',
	'RW',
	'SN',
	'CM',
	'CI',
	'EG',
	'MA',
	'ZM',
	'ZW',
	'MZ',
	'AO',
	'SD',
	'TN',
	'DZ',
	'LY',
	'MG',
	'BJ',
	'BF',
	'ML',
	'NE',
	'GM',
	'SL',
	'LR',
	'GN',
	'MW',
	'LS',
	'BW',
	'NA',
	'SO',
	'DJ',
	'ER',
	'SS',
	'TD',
	'CF',
	'GQ',
	'GA',
	'CG',
	'CD',
	'ST',
	'CV',
	'KM',
	'MU',
	'SC',
];

const sortAfricaFirst = (a, b) => {
	const ai = AFRICA_FIRST.indexOf(a.value);
	const bi = AFRICA_FIRST.indexOf(b.value);
	if (ai !== -1 && bi !== -1) return ai - bi;
	if (ai !== -1) return -1;
	if (bi !== -1) return 1;
	return a.name.localeCompare(b.name);
};

export const initialCountry = convertCountry(countries[DEFAULT_COUNTRY]);
export const NATIONAL_COUNTRY_VALUE = initialCountry.value;

export const COUNTRIES = countries.all
	.filter(filterCountries)
	.map(convertCountry)
	.sort(sortAfricaFirst);

export default COUNTRIES;

export const COUNTRIES_OPTIONS = COUNTRIES.map((country) => ({
	label: country.name,
	value: country.value,
	icon: country.flag,
}));

const getPhoneOptions = () => {
	const phoneOptions = [];

	COUNTRIES.forEach((country) => {
		country.phoneCodes.forEach((phoneCode) => {
			phoneOptions.push({
				label: STRINGS.formatString(
					STRINGS[
						'USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.PHONE_CODE_DISPLAY'
					],
					phoneCode,
					country.name
				).join(''),
				value: phoneCode,
				icon: country.flag,
			});
		});
	});

	return phoneOptions;
};

export const PHONE_OPTIONS = getPhoneOptions();
