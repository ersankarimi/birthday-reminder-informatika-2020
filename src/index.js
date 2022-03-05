import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './pages/App'

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path={'/'} element={<App />}></Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
)
