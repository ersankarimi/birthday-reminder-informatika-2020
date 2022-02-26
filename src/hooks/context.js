import React, { createContext, useReducer } from 'react'
import { reducer, initialState } from './reducer'

export const MyContext = createContext(initialState)

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const updateDataValue = (id, value) => {
		switch (id) {
			case 'name':
				return dispatch({
					type: 'UPDATE_INPUT_VALUE',
					payload: value,
				})

			case 'sort':
				return dispatch({
					type: 'UPDATE_SORT_VALUE',
					payload: value,
				})
			case 'month':
				return dispatch({
					type: 'UPDATE_MONTH_VALUE',
					payload: value,
				})
			case 'tempData':
				return dispatch({
					type: 'UPDATE_TEMPDATA_VALUE',
					tempData: value,
				})
			default:
				break
		}
	}

	const value = {
		...state,
		updateDataValue,
	}

	return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}
