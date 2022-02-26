import React, { useEffect } from 'react'
import { useMyContext } from '../hooks/useMyContext'
import { List } from './../components/List/List'
import { Error } from './../components/Error/Error'

const ListUsers = () => {
	const { tempData, updateDataValue } = useMyContext()

	return tempData.length !== 0 ? (
		tempData.map((user) => {
			return <List {...user} key={user.id} />
		})
	) : (
		<Error />
	)
}

export { ListUsers }
