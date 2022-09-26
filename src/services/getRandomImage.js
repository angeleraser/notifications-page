const getRandomImage = () => {
	const index = Math.floor(Math.random() * 1000);
	return `https://picsum.photos/${index}`;
};

export { getRandomImage };
