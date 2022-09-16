import './styles.css';
import React from 'react';

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
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
					provident tempora repudiandae delectus necessitatibus, illum
					consequuntur vero, molestiae in itaque suscipit autem placeat
					cupiditate soluta porro dolores rerum, quam velit!
				</p>
			</main>
		</section>
	);
};
