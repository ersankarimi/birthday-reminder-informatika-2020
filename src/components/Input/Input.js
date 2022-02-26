import React from 'react'
import { useMyContext } from '../../hooks/useMyContext'

const Input = () => {
	const {
		filterData: { input },
		updateDataValue,
	} = useMyContext()

	const handleChange = (e) => {
		updateDataValue(e.target.id, e.target.value)
	}

	return (
		<>
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
				onChange={handleChange}
				value={input}
			/>
		</>
	)
}

export { Input }
