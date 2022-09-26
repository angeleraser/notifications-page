class User {
	constructor({ fullname, url, avatar }) {
		this.fullname = fullname;
		this.url = url;
		this.avatar = avatar;
	}
}

const getRandomUsers = async (count = 10) => {
	const response = await fetch(`https://randomuser.me/api/?results=${count}`);
	const data = await response.json();

	if (!data.results) return [];

	return data.results.map(
		(user) =>
			new User({
				fullname: `${user.name.first} ${user.name.last}`,
				avatar: user.picture.thumbnail,
				url: '#',
			}),
	);
};

export { getRandomUsers };
