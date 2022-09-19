import './styles.css';
import React from 'react';
import { NotificationItem } from '../NotificationItem';
import { MessagePreview } from '../MessagePreview';

const NotificationProps = {
	author: {
		fullname: 'Angel Figuera',
		url: '#',
		avatar: 'https://picsum.photos/202',
	},
	context: {
		url: '#',
		name: '',
		previewImg: 'https://picsum.photos/200',
	},
	message: 'reacted to your photo',
	unread: false,
	stamp: '1 minute ago',
};

export const NotificationsPage = (props) => {
	return (
		<section className='notifications-page'>
			<header className='notifications-page-header'>
				<h1>
					Notifications
					<span className='notifications-unread-count'>3</span>
				</h1>

				<button className='mark-read-btn'>Mark all as read</button>
			</header>

			<main className='notifications-list'>
				<NotificationItem {...NotificationProps}>
					<MessagePreview>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
						quo architecto praesentium. Neque nobis ipsum laborum tempora quae,
						eveniet quam quas, dicta exercitationem consectetur, veniam a atque
						nisi temporibus ex!
					</MessagePreview>
				</NotificationItem>
			</main>
		</section>
	);
};
