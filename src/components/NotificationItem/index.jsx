/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.css';

export const NotificationItem = () => {
	return (
		<article className='notification-item'>
			<main className='notification-primary-content'>
				<div className='notification-author-photo'>
					<img
						src='https://www.mountsinai.on.ca/wellbeing/our-team/team-images/person-placeholder/image'
						alt=''
					/>
				</div>

				<div className='notification-primary-content-body'>
					<div>
						<a href='#' className='notification-author-name'>
							Angel Figuera
						</a>

						<span className='notification-action-msg'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</span>
					</div>

					<div className='notification-time'> 1m ago</div>
				</div>
			</main>
		</article>
	);
};
