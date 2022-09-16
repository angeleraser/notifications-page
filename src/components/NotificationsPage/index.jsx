import './styles.css';
import React from 'react';
import { NotificationItem } from '../NotificationItem';

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
				<NotificationItem
					author={{
						fullname: 'Angel Figuera',
						profileUrl: '#',
						avatar: 'https://picsum.photos/202',
					}}
					source={{
						url: '#',
						name: '',
						previewImg: 'https://picsum.photos/200',
					}}
					actionMessage={'reacted to your photo'}
					timestamp='1 minute ago'
					isUnread
				/>

				<NotificationItem
					author={{
						fullname: 'John Doe',
						profileUrl: '#',
						avatar: 'https://picsum.photos/205',
					}}
					source={{
						url: '#',
						name: '',
						previewImg: 'https://picsum.photos/203',
					}}
					actionMessage={'reacted to your photo'}
					timestamp='1 week ago'
				/>
			</main>
		</section>
	);
};
