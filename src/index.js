import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './pages'
import { Error } from './components/Error/Error'

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path={'/'} element={<App />} />
			<Route path={'*'} element={<Error />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
)
