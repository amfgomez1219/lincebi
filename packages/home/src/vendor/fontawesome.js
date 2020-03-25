import Vue from 'vue';

Vue.component('font-awesome-icon', async () => {
	const [{ FontAwesomeIcon }, { config, library }] = await Promise.all([
		/* eslint-disable prettier/prettier */
		import('@fortawesome/vue-fontawesome'),
		import('@fortawesome/fontawesome-svg-core'),
		import('@fortawesome/fontawesome-svg-core/styles.css')
		/* eslint-enable */
	]);

	config.autoAddCss = false;

	const icons = await Promise.all([
		/* eslint-disable prettier/prettier */
		import('@fortawesome/free-regular-svg-icons/faCheckSquare'),
		import('@fortawesome/free-regular-svg-icons/faClock'),
		import('@fortawesome/free-regular-svg-icons/faFileAlt'),
		import('@fortawesome/free-regular-svg-icons/faSquare'),
		import('@fortawesome/free-regular-svg-icons/faWindowMaximize'),
		import('@fortawesome/free-regular-svg-icons/faWindowRestore'),
		import('@fortawesome/free-solid-svg-icons/faAngleDown'),
		import('@fortawesome/free-solid-svg-icons/faAngleUp'),
		import('@fortawesome/free-solid-svg-icons/faArchive'),
		import('@fortawesome/free-solid-svg-icons/faArrowsAlt'),
		import('@fortawesome/free-solid-svg-icons/faBalanceScale'),
		import('@fortawesome/free-solid-svg-icons/faBars'),
		import('@fortawesome/free-solid-svg-icons/faBook'),
		import('@fortawesome/free-solid-svg-icons/faBriefcase'),
		import('@fortawesome/free-solid-svg-icons/faBullhorn'),
		import('@fortawesome/free-solid-svg-icons/faCalendar'),
		import('@fortawesome/free-solid-svg-icons/faChartBar'),
		import('@fortawesome/free-solid-svg-icons/faChartPie'),
		import('@fortawesome/free-solid-svg-icons/faChevronLeft'),
		import('@fortawesome/free-solid-svg-icons/faChevronRight'),
		import('@fortawesome/free-solid-svg-icons/faClock'),
		import('@fortawesome/free-solid-svg-icons/faCog'),
		import('@fortawesome/free-solid-svg-icons/faCoins'),
		import('@fortawesome/free-solid-svg-icons/faDatabase'),
		import('@fortawesome/free-solid-svg-icons/faFileAlt'),
		import('@fortawesome/free-solid-svg-icons/faFilter'),
		import('@fortawesome/free-solid-svg-icons/faFlask'),
		import('@fortawesome/free-solid-svg-icons/faFolderOpen'),
		import('@fortawesome/free-solid-svg-icons/faGlobe'),
		import('@fortawesome/free-solid-svg-icons/faGlobeEurope'),
		import('@fortawesome/free-solid-svg-icons/faGraduationCap'),
		import('@fortawesome/free-solid-svg-icons/faHandsHelping'),
		import('@fortawesome/free-solid-svg-icons/faHardHat'),
		import('@fortawesome/free-solid-svg-icons/faHome'),
		import('@fortawesome/free-solid-svg-icons/faHourglassHalf'),
		import('@fortawesome/free-solid-svg-icons/faIndustry'),
		import('@fortawesome/free-solid-svg-icons/faLandmark'),
		import('@fortawesome/free-solid-svg-icons/faLayerGroup'),
		import('@fortawesome/free-solid-svg-icons/faLightbulb'),
		import('@fortawesome/free-solid-svg-icons/faLink'),
		import('@fortawesome/free-solid-svg-icons/faList'),
		import('@fortawesome/free-solid-svg-icons/faMapMarked'),
		import('@fortawesome/free-solid-svg-icons/faMedkit'),
		import('@fortawesome/free-solid-svg-icons/faPencilAlt'),
		import('@fortawesome/free-solid-svg-icons/faPlus'),
		import('@fortawesome/free-solid-svg-icons/faProjectDiagram'),
		import('@fortawesome/free-solid-svg-icons/faRocket'),
		import('@fortawesome/free-solid-svg-icons/faSatellite'),
		import('@fortawesome/free-solid-svg-icons/faSave'),
		import('@fortawesome/free-solid-svg-icons/faSearch'),
		import('@fortawesome/free-solid-svg-icons/faShoppingCart'),
		import('@fortawesome/free-solid-svg-icons/faSignOutAlt'),
		import('@fortawesome/free-solid-svg-icons/faSortAmountDown'),
		import('@fortawesome/free-solid-svg-icons/faSortAmountUp'),
		import('@fortawesome/free-solid-svg-icons/faStar'),
		import('@fortawesome/free-solid-svg-icons/faStore'),
		import('@fortawesome/free-solid-svg-icons/faSync'),
		import('@fortawesome/free-solid-svg-icons/faTable'),
		import('@fortawesome/free-solid-svg-icons/faTimes'),
		import('@fortawesome/free-solid-svg-icons/faTools'),
		import('@fortawesome/free-solid-svg-icons/faTruck'),
		import('@fortawesome/free-solid-svg-icons/faUser'),
		import('@fortawesome/free-solid-svg-icons/faUsers'),
		import('@fortawesome/free-solid-svg-icons/faWarehouse'),
		import('@fortawesome/free-solid-svg-icons/faWrench'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileAdhoc'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileCda'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileCdfde'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFilePdf'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFilePrpt'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileSta'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileStd'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileStolap'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileUrl'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileWcdf'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileXaction'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileXcdf'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileXjpivot'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facFileXml'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facToolCde'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facToolStadmin'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facToolStagile'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facToolStcard'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facToolStdashboard'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facToolStolap'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facToolStpivot'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facToolStreport'),
		import('@lincebi/biserver-frontend-common/src/fontawesome/facToolStsearch')
		/* eslint-enable */
	]);

	icons.map((icon) => {
		library.add(icon.definition);
	});

	return FontAwesomeIcon;
});
