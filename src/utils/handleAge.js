// * calculate user age
const calculateAge = (currentDate, birthDate) => {
	const diffMs = currentDate - birthDate
	const age = new Date(diffMs)

	const ageYears = Math.abs(age.getUTCFullYear() - 1970)
	return ageYears
}

// * set users age
const setUsersAge = (usersData) => {
	const currentDate = new Date()
	usersData.forEach((user) => {
		const [year, month, date] = user.date.split('-')

		user['age'] = calculateAge(
			currentDate,
			new Date(`${year}-${month}-${date}`)
		)
	})

	return usersData
}

export { setUsersAge, calculateAge }
