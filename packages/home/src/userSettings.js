import blankSvg from '@lincebi/biserver-frontend-common/src/blankSvg';
import generateSvg from '@lincebi/biserver-frontend-common/src/generateSvg';

export const namespace = 'lincebi';

export const globalUserSettings = {
	global: {
		initial: '[]',
		default: '[]',
	},
};

export const userSettings = {
	[`${namespace}.name`]: {
		initial: '',
		default: '',
	},
	[`${namespace}.email`]: {
		initial: '',
		default: '',
	},
	[`${namespace}.phone`]: {
		initial: '',
		default: '',
	},
	[`${namespace}.address`]: {
		initial: '',
		default: '',
	},
	[`${namespace}.avatar`]: {
		initial: blankSvg,
		default: generateSvg(navigator.userAgent),
	},
	[`${namespace}.show_menu_bar`]: {
		initial: 'false',
		default: 'false',
	},
	[`${namespace}.show_tool_bar`]: {
		initial: 'false',
		default: 'true',
	},
	[`${namespace}.tabs`]: {
		initial: '[]',
		default: '[]',
	},
	home: {
		initial: '[]',
		default: '[]',
	},
	favorites: {
		initial: '[]',
		default: '[]',
	},
	recent: {
		initial: '[]',
		default: '[]',
	},
	MANTLE_SHOW_HIDDEN_FILES: {
		initial: 'false',
		default: 'false',
	},
	MANTLE_SHOW_DESCRIPTIONS_FOR_TOOLTIPS: {
		initial: 'false',
		default: 'true',
	},
};

export const getUserSettings = (propName, isGlobal = false) => {
	const settingsObj = isGlobal ? globalUserSettings : userSettings;
	return Object.assign(
		...Object.entries(settingsObj).map(([key, value]) => ({
			[key]: value[propName],
		}))
	);
};

export const initialGlobalUserSettings = getUserSettings('initial', true);

export const defaultGlobalUserSettings = getUserSettings('default', true);

export const initialUserSettings = getUserSettings('initial', false);

export const defaultUserSettings = getUserSettings('default', false);
