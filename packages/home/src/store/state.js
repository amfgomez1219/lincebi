import { initialGlobalUserSettings, initialUserSettings } from '@/userSettings';

export default () => ({
	userId: '',
	canCreate: false,
	canAdminister: false,
	canSchedule: false,
	hasDataAccess: false,
	plugins: new Set(),
	perspectives: new Set(),
	launchOverlays: new Map(),
	locales: new Set(),
	locale: 'en',
	isRepositoryLoading: true,
	repository: { path: '/', children: [] },
	globalUserSettings: initialGlobalUserSettings,
	userSettings: initialUserSettings,
	navbarExpanded: false,
	sidebarExpanded: window.matchMedia('(min-device-width: 576px)').matches,
});
