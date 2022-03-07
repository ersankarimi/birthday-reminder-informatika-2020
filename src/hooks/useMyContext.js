import { useContext } from 'react'
import { MyContext } from './../context/context'

export const useMyContext = () => {
	const context = useContext(MyContext)

	if (context === undefined) {
		throw new Error('useMyContext must be used within MyContext')
	}

	return context
}
