/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { classNames } from '../../utils/classNames';
import './styles.css';

const defaultAvatar =
	'https://www.behrmancap.com/wp-content/uploads/2015/03/person-placeholder.jpg';

export const NotificationItem = ({
	author = {},
	context = {},
	message = '',
	stamp = '',
	unread = false,
	children,
}) => {
	return (
		<article className={`notification${classNames({ unread })}`}>
			<section style={{ display: 'flex', alignItems: 'flex-start' }}>
				<div
					style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}
				>
					<div className='avatar'>
						<img src={author.avatar || defaultAvatar} alt='' />
					</div>

					<div>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<p className='message'>
								<a href={author.url} className='author-name notification-link'>
									{author.fullname}
								</a>

								<span>{message}</span>

								<span className='unread-mark'></span>
							</p>

							{context.name ? (
								<a
									href={context.url}
									className='notification-context-link notification-link'
								>
									{context.name}
								</a>
							) : null}
						</div>

						<span className='stamp'> {stamp}</span>
					</div>
				</div>

				{context.previewImg ? (
					<a
						href={context.url}
						className='notification-preview-photo notification-link'
					>
						<img src={context.previewImg} alt='' />
					</a>
				) : null}
			</section>

			{children ? (
				<section style={{ marginTop: 12 }}>{children}</section>
			) : null}
		</article>
	);
};
