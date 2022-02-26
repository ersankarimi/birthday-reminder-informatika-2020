import { useContext } from 'react'
import { MyContext } from './context'

export const useMyContext = () => {
	const context = useContext(MyContext)

	if (context === undefined) {
		throw new Error('useShop must be used within ShopContext')
	}

	return context
}
