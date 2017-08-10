import { HOST_URL } from './host_url';

const authConfig = {
	'facebookAuth' : {
		'clientID': '477930462582336',
		'clientSecret': '82387ab92926aea4cf0f673775cc4928',
		'callbackURL': `/auth/facebook/callback`
	},

	'googleAuth' : {
		'clientID': 'enter client id here',
		'clientSecret': 'enter client secret here',
		'callbackURL': 'enter callback here'
	}
};

export default authConfig;
