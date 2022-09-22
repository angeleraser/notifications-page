/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useImage = (src = '') => {
	const [imgSrc, setImgSrc] = useState('');
	const [isLoadingImg, setIsLoadingImg] = useState(false);

	useEffect(() => {
		setIsLoadingImg(true);
		const img = new Image();
		img.src = src;

		img.onload = () => {
			setImgSrc(src);
			setIsLoadingImg(false);
		};

		img.onerror = () => {
			setIsLoadingImg(false);
		};

		return () => {
			setImgSrc(null);
			setIsLoadingImg(false);
		};
	}, []);

	return { imgSrc, isLoadingImg };
};

export { useImage };
