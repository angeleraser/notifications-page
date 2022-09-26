import { getRandomImage } from './getRandomImage';
import { getRandomUsers } from './getRandomUsers';

const randomNotifications = [
	{
		context: {
			url: '#',
			name: 'My first tournament today!',
			previewImg: null,
		},
		id: '1a',
		message: 'reacted to your recent post',
		unread: true,
		stamp: '1m ago',
	},

	{
		context: {
			url: '#',
			name: '',
			previewImg: '',
		},
		id: '2b',
		message: 'followed you',
		unread: true,
		stamp: '5m ago',
	},

	{
		context: {
			url: '#',
			name: 'Chess club',
			previewImg: null,
		},
		id: '3c',
		message: 'has joined your group',
		unread: true,
		stamp: '1d ago',
	},

	{
		context: {
			url: '#',
			name: '',
			previewImg: getRandomImage(),
		},
		id: '4d',
		message: 'commented on your picture',
		unread: false,
		stamp: '1d ago',
	},

	{
		context: {
			url: '#',
			name: '5 end-game strategies to increase your win rate',
			previewImg: null,
		},
		id: '5e',
		message: 'reacted to your recent post',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: 'Chess Club',
			previewImg: null,
		},
		id: '6f',
		message: 'left the group',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: 'Chess Club',
			previewImg: null,
		},
		id: '7g',
		message: 'left the group',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: '',
		},
		id: '8h',
		message: 'lorem ipsum dolor',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: 'Amet',
			previewImg: getRandomImage(),
		},
		id: '9i',
		message: 'lorem ipsum dolor',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: '',
		},
		id: '10j',
		message: 'lorem ipsum dolor',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: '',
			previewImg: getRandomImage(),
		},
		id: '11k',
		message: 'lorem ipsum dolor',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: '',
		},
		id: '12l',
		message: 'lorem ipsum dolor',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: '',
			previewImg: null,
		},
		id: '10m',
		message: 'lorem ipsum dolor - ipsum',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: '',
			previewImg: getRandomImage(),
		},
		id: '14j',
		message: 'lorem ipsum dolor',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: '',
			previewImg: null,
		},
		id: '15j',
		message: 'lorem ipsum dolor - lorem',
		unread: false,
		stamp: '2 weeks ago',
	},
];

const getNotifications = async () => {
	const randomUsers = await getRandomUsers(randomNotifications.length);

	return randomNotifications.map((notification, index) => {
		return { author: randomUsers[index], ...notification };
	});
};

export { getNotifications };
