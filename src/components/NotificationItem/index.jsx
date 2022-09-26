/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useImage } from '../../hooks/useImage';
import { classNames } from '../../utils/classNames';
import './styles.css';

const defaultAvatar =
	'https://john-mohamed.com/wp-content/uploads/2018/05/Profile_avatar_placeholder_large.png';

export const NotificationItem = ({
	author = {},
	context = {},
	message = '',
	stamp = '',
	unread = false,
	children,
}) => {
	const { imgSrc, isLoadingImg } = useImage(author.avatar);

	return (
		<article className={`notification${classNames({ unread })}`}>
			<section style={{ display: 'flex', alignItems: 'flex-start' }}>
				<div
					style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}
				>
					<div className='avatar'>
						{isLoadingImg && !imgSrc ? (
							<div className='avatar-skeleton'></div>
						) : (
							<img
								src={imgSrc ? imgSrc : defaultAvatar}
								alt={`${author.fullname} avatar`}
							/>
						)}
					</div>

					<div>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<p className='message'>
								<a href={author.url} className='author-name notification-link'>
									{author.fullname}
								</a>

								<span>{message}</span>

								{context.name ? (
									<a
										href={context.url}
										className='notification-context-link notification-link'
									>
										{context.name}
									</a>
								) : null}
							</p>

							<span
								role='strong'
								aria-label='Unread mark'
								className='unread-mark'
							></span>
						</div>

						<span
							role='time'
							aria-label='Notification time stamp'
							className='stamp'
						>
							{' '}
							{stamp}
						</span>
					</div>
				</div>

				{context.previewImg ? (
					<a
						href={context.url}
						aria-label='Notification preview image'
						className='notification-preview-photo notification-link'
					>
						<img src={context.previewImg} alt='Preview link' />
					</a>
				) : null}
			</section>

			{children ? (
				<section className='notification-content' style={{ marginTop: 12 }}>
					{children}
				</section>
			) : null}
		</article>
	);
};
