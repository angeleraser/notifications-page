/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { classNames } from '../../utils/classNames';
import './styles.css';

const defaultAvatar =
	'https://www.behrmancap.com/wp-content/uploads/2015/03/person-placeholder.jpg';

export const NotificationItem = ({
	author = {},
	source = {},
	isUnread = false,
	actionMessage = '',
	timestamp = '',
}) => {
	return (
		<article className={`notification-item${classNames({ unread: isUnread })}`}>
			<div
				className='notification-item-content'
				style={{ display: 'flex', alignItems: 'flex-start' }}
			>
				<section
					style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}
				>
					<div className='author-avatar'>
						<img src={author.avatar || defaultAvatar} alt='' />
					</div>

					<div>
						<div>
							<a
								href={author.profileUrl}
								className='author-name notification-item-link'
							>
								{author.fullname}
							</a>

							<span className='action-message'>{actionMessage}</span>

							{source.name ? (
								<a
									href={source.url}
									className='notification-ref-link notification-item-link'
								>
									{source.name}
								</a>
							) : null}

							<span className='unread-mark'></span>
						</div>

						<span className='timestamp'> {timestamp}</span>
					</div>
				</section>

				{source.previewImg ? (
					<a
						href={source.url}
						className='notification-ref-photo notification-item-link'
					>
						<img src={source.previewImg} alt='' />
					</a>
				) : null}
			</div>
		</article>
	);
};
