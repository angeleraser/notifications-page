import './styles.css';
import React from 'react';
import { NotificationItem } from '../NotificationItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { getNotifications } from '../../services/getNotifications';

export const NotificationsPage = () => {
	const [notifications, setNotifications] = useState([]);

	const fetchNotifications = async () => {
		const data = await getNotifications();
		setNotifications(data);
	};

	const handleMarkAllAsRead = () => {
		setNotifications(
			notifications.map((item) => {
				item.unread = false;
				return item;
			}),
		);
	};

	useEffect(() => {
		fetchNotifications();
	}, []);

	return (
		<section className='notifications-page'>
			<header className='notifications-page-header'>
				<h1>
					Notifications
					<span className='notifications-unread-count'>
						{notifications.length}
					</span>
				</h1>

				<button onClick={handleMarkAllAsRead} className='mark-read-btn'>
					Mark all as read
				</button>
			</header>

			<main className='notifications-list'>
				{notifications.map((item) => {
					return (
						<NotificationItem
							key={item.id}
							author={item.author}
							context={item.context}
							message={item.message}
							unread={item.unread}
							stamp={item.stamp}
						/>
					);
				})}
			</main>
		</section>
	);
};
