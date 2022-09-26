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
			previewImg: null,
			message:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quasi suscipit impedit eos molestiae sed quidem.',
		},
		id: '3h',
		message: 'sent you a message',
		unread: true,
		stamp: '2d ago',
	},

	{
		context: {
			url: '#',
			name: '',
			previewImg: getRandomImage(),
		},
		id: '4d',
		message: 'commented on your picture',
		unread: true,
		stamp: '2d ago',
	},

	{
		context: {
			url: '#',
			name: '5 end-game strategies to increase your win rate',
			previewImg: null,
		},
		id: '5e',
		message: 'reacted to your recent post',
		unread: true,
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
			name: '',
			previewImg: null,
			message:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quasi suscipit impedit eos molestiae sed quidem.',
		},
		id: '7g',
		message: 'sent you a message',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: '',
			previewImg: null,
		},
		id: '9i',
		message: 'followed you',
		unread: false,
		stamp: '2 weeks ago',
	},

	{
		context: {
			url: '#',
			name: '',
			previewImg: getRandomImage(),
		},
		id: '10j',
		message: 'commented on your picture',
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
