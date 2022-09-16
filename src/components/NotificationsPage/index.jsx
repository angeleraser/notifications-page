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
				<NotificationItem />
			</main>
		</section>
	);
};
