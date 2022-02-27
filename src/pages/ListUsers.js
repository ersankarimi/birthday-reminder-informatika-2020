import React, { useEffect, useState } from 'react'
import { useMyContext } from '../hooks/useMyContext'
import { List } from './../components/List/List'
import { Error } from './../components/Error/Error'
import { useDebounce } from '../hooks/useDebounce'
import { findUsersByInput, findUserByBirthdayMonth } from '../utils/findUser'

const ListUsers = () => {
	const {
		data,
		filterData: { input, month },
		updateDataValue,
	} = useMyContext()
	const [result, setResult] = useState([])

	// search name by user input
	const [isSearching, setIsSearching] = useState(false)
	const debouncedSearchNameByInput = useDebounce(input, 500)

	// search name by month
	const debouncedSearchNameByMonth = useDebounce(month, 150)

	// for searh name by user input
	useEffect(() => {
		if (input) {
			setIsSearching(true)
			setResult(findUsersByInput(input, data))
			updateDataValue('month', '')
			setIsSearching(false)
		} else {
			setResult(data)
			setIsSearching(false)
		}
	}, [debouncedSearchNameByInput])

	// for searh name by month
	useEffect(() => {
		if (month) {
			setIsSearching(true)
			setResult(findUserByBirthdayMonth(month, data))
			setIsSearching(false)
		}
	}, [debouncedSearchNameByMonth])

	return result && result.map((user) => <List {...user} key={user.id} />)
}

export { ListUsers }
