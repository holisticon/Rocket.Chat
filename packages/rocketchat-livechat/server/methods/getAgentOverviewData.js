import { Meteor } from 'meteor/meteor';
import { RocketChat } from 'meteor/rocketchat:lib';
import { Livechat } from '../lib/Livechat';

Meteor.methods({
	'livechat:getAgentOverviewData'(options) {
		if (!Meteor.userId() || !RocketChat.authz.hasPermission(Meteor.userId(), 'view-livechat-manager')) {
			throw new Meteor.Error('error-not-allowed', 'Not allowed', {
				method: 'livechat:getAgentOverviewData',
			});
		}

		if (!(options.chartOptions && options.chartOptions.name)) {
			console.log('Incorrect analytics options');
			return;
		}

		return Livechat.Analytics.getAgentOverviewData(options);
	},
});
