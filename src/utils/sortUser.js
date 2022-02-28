// * sort data users by ascending or descending
export const sortUserData = (data, condition) => {
	const compareMonth = (a, b) => {
		const monthA = Number(a.date.split('-')[1])
		const monthB = Number(b.date.split('-')[1])

		return monthA - monthB
	}
	const compareDate = (a, b) => {
		const dateA = Number(a.date.split('-')[2])
		const dateB = Number(b.date.split('-')[2])

		return dateA - dateB
	}
	const compareMonthAndDate = (a, b) => {
		const month = compareMonth(a, b)
		if (month !== 0) {
			return month
		}
		return compareDate(a, b)
	}

	return data.sort((a, b) => {
		if (condition === 'ascending') {
			return compareMonthAndDate(a, b)
		}
		if (condition === 'descending') {
			return compareMonthAndDate(b, a)
		}

		return 0
	})
}
