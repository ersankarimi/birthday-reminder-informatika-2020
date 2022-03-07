// * find matching user by input
export const findUsersByInput = (inputValue, usersData) => {
	const regex = new RegExp(inputValue, 'gi')
	return usersData.filter((user) => user.name.match(regex))
}

//  * find matching user by birthday month
export const findUserByBirthdayMonth = (dropdownValue, users) => {
	const selectedMonth = Number(dropdownValue)

	if (selectedMonth < 0) return users

	return users.filter((user) => {
		const [year, month, date] = user.date.split('-')
		return Number(month) === selectedMonth + 1
	})
}
