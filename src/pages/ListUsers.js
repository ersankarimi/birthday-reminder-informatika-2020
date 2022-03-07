import React, { useEffect, useState } from 'react'
import { useMyContext } from '../hooks/useMyContext'
import { List } from './../components/List/List'
import { Error } from './../components/Error/Error'
import { useDebounce } from '../hooks/useDebounce'
import { findUsersByInput, findUserByBirthdayMonth } from '../utils/findUser'
import { sortUserData } from '../utils/sortUser'

const ListUsers = () => {
	const {
		data,
		filterData: { input, month, sort },
		updateDataValue,
	} = useMyContext()
	const [result, setResult] = useState([])
	const [resultSort, setResultSort] = useState([])

	// *  search name by user input
	const [isSearching, setIsSearching] = useState(false)
	const debouncedSearchNameByInput = useDebounce(input, 50)

	// *  search name by month
	const debouncedSearchNameByMonth = useDebounce(month, 50)

	// * sort user data
	const debouncedSortUserData = useDebounce(sort, 50)

	// * for search name by user input
	useEffect(() => {
		setIsSearching(true)
		if (input) {
			setResult(findUsersByInput(input, data))
			updateDataValue('month', '')
			setIsSearching(false)
		} else {
			setResult(data)
			setIsSearching(false)
		}
	}, [debouncedSearchNameByInput])

	// * for search name by month
	useEffect(() => {
		setIsSearching(true)
		setResult(findUserByBirthdayMonth(month, data))
		setIsSearching(false)
	}, [debouncedSearchNameByMonth])

	// * for sort name by ascending, descending ,and none
	useEffect(() => {
		setIsSearching(true)
		if (sort !== 'none') {
			// setResult(sortUserData(result, sort))
			setResultSort(sortUserData([...result], sort))
			setIsSearching(false)
		} else {
			setResultSort([])
			setIsSearching(false)
		}
	}, [debouncedSortUserData])

	const renderList = () => {
		if (resultSort.length !== 0) {
			return resultSort.map((user) => <List {...user} key={user.id} />)
		}
		// default return
		return result && result.map((user) => <List {...user} key={user.id} />)
	}

	return renderList()
}

export { ListUsers }
