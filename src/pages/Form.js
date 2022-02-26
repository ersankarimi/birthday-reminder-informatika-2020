import React from 'react'
import { Dropdown } from './../components/Dropdown/Dropdown'
import { RadioButton } from '../components/RadioButton/RadioButton'
import { Input } from './../components/Input/Input'

const Form = () => {
	return (
		<>
			<div className='flex justify-center'>
				<form>
					<div className='form-control flex flex-col'>
						<Input />
					</div>

					<div className='form-control flex flex-col md:flex-row mt-2'>
						<Dropdown />
						<RadioButton />
					</div>
				</form>
			</div>
		</>
	)
}

export { Form }
