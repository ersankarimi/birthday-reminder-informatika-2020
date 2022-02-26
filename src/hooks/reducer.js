import { data } from './../data'
import { setUsersAge } from './../utils/handleAge'

export const initialState = {
	data: data,
	tempData: setUsersAge(data),
	filterData: {
		input: '',
		month: '',
		sort: 'none',
	},
}

export const reducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case 'UPDATE_INPUT_VALUE':
			return {
				...state,
				filterData: { ...state.filterData, input: payload },
			}
		case 'UPDATE_SORT_VALUE':
			return {
				...state,
				filterData: { ...state.filterData, sort: payload },
			}
		case 'UPDATE_MONTH_VALUE':
			return {
				...state,
				filterData: { ...state.filterData, month: payload },
			}
		case 'UPDATE_TEMPDATA_VALUE':
			console.log(payload)
			return {
				...state,
				tempData: payload,
			}

		default:
			throw new Error()
	}
}
