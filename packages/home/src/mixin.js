import Vue from 'vue';

import defaultTo from 'lodash/defaultTo';
import uniqueId from 'lodash/uniqueId';

import isTouchDevice from '@lincebi/biserver-frontend-common/src/isTouchDevice';
import overlayColor from '@lincebi/biserver-frontend-common/src/overlayColor';
import truncate from '@lincebi/biserver-frontend-common/src/truncate';

import { namespace } from '@/userSettings';

export const mixin = {
	data() {
		return {
			uniqueId: uniqueId(),
			namespace,
			isTouchDevice,
		};
	},
	methods: {
		defaultTo: (v, d) => defaultTo(v, d),
		defaultToReq: (v, d) => defaultTo(v, require(`@/${d}`)),
		overlayColor,
		truncate,
	},
};

Vue.mixin(mixin);
