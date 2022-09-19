import React from 'react';
import './styles.css';

export const MessagePreview = ({ text = '', children }) => {
	return (
		<div className='message-preview'>{children && !text ? children : text}</div>
	);
};
