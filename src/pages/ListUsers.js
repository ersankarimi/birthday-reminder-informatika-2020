import React, { useEffect, useState } from 'react'
import { useMyContext } from '../hooks/useMyContext'
import { List } from './../components/List/List'
import { Error } from './../components/Error/Error'
import { useDebounce } from '../hooks/useDebounce'
import { findUsersByInput } from '../utils/findUser'

const ListUsers = () => {
	const {
		data,
		filterData: { input },
	} = useMyContext()
	const [result, setResult] = useState([])

	// search name by user input
	const [isSearching, setIsSearching] = useState(false)
	const debouncedSearchTerm = useDebounce(input, 500)

	// for searh name by user input
	useEffect(() => {
		if (input) {
			setIsSearching(true)
			setResult(findUsersByInput(input, data))
			setIsSearching(false)
		} else {
			setResult(data)
			setIsSearching(false)
		}
	}, [debouncedSearchTerm])

	return result && result.map((user) => <List {...user} key={user.id} />)
}

export { ListUsers }
