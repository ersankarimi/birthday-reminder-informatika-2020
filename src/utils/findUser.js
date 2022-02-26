// * find matching user by input
export const findUsersByInput = (inputValue, usersData) => {
	const regex = new RegExp(inputValue, 'gi')
	return usersData.filter((user) => user.name.match(regex))
}
