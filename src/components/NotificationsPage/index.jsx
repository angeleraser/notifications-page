import './styles.css';
import React from 'react';
import { NotificationItem } from '../NotificationItem';

const NotificationProps = {
	author: {
		fullname: 'Angel Figuera',
		url: '#',
		avatar: '',
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

export const NotificationsPage = () => {
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
				<NotificationItem {...NotificationProps} />
			</main>
		</section>
	);
};
