import React from 'react'
import { ContextProvider } from './../context/context'
import { Header } from '../components/Header/Header'
import { Form } from './Form'
import { ListUsers } from './ListUsers'

const App = () => {
	return (
		<ContextProvider>
			<div className='container min-h-screen min-w-full p-4'>
				<Header />

				<div className='w-full m-auto p-4'>
					<Form />
				</div>

				<div className='w-full m-auto p-4 my-4 bg  md:max-w-6xl md:grid md:gap-4 md:grid-cols-3 md:grid-rows-3 sm:grid sm:gap-3 sm:grid-cols-2 sm:grid-rows-2'>
					<ListUsers />
				</div>
			</div>
		</ContextProvider>
	)
}

export { App }
