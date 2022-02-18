import React, { useState } from 'react'
import { Dropdown } from './Dropdown'
import { GenerateData } from './GenerateData'
import { RadioButtonSort } from './RadioButtonSort'

const Form = () => {
	const [inputValue, setInputValue] = useState('')
	const [dropdownValue, setDropdownValue] = useState()
	const [sortBy, setSortBy] = useState('')

	const handleClickDropdown = (value) => {
		setDropdownValue(value)
	}

	const handleSortBy = (e) => {
		setSortBy(e)
	}

	const handleInputChange = (e) => {
		setInputValue(e.target.value)
		setDropdownValue()
	}

	return (
		<>
			<div className='flex justify-center'>
				<form>
					<div className='form-control flex flex-col'>
						<label
							htmlFor='name'
							className='font-nunito text-white text-lg my-2.5'
						>
							Cari Nama Teman
						</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Masukkan nama teman'
							className='w-52 md:w-96 text-white bg-input-text placeholder:text-sm placeholder:text-placeholder-input backdrop-blur-primary rounded-lg'
							onChange={handleInputChange}
						/>
					</div>

					<div className='form-control flex flex-col md:flex-row mt-2'>
						<Dropdown handleClickDropdown={handleClickDropdown} />
						<RadioButtonSort handleSortBy={handleSortBy} />
					</div>
				</form>
			</div>
			<div className='w-full m-auto p-4 my-4 bg  md:max-w-6xl md:grid md:gap-4 md:grid-cols-3 md:grid-rows-3 sm:grid sm:gap-3 sm:grid-cols-2 sm:grid-rows-2'>
				<GenerateData
					dropdownValue={dropdownValue}
					sortBy={sortBy}
					inputValue={inputValue}
				/>
			</div>
		</>
	)
}

export { Form }
