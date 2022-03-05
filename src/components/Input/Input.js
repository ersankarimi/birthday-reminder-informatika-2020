import React, { useEffect } from 'react'
import { useMyContext } from '../../hooks/useMyContext'
import { useSearchParams } from 'react-router-dom'

const Input = () => {
	const {
		filterData: { input },
		updateDataValue,
	} = useMyContext()

	const [searchParams, setSearchParams] = useSearchParams()

	const handleChange = (e) => {
		const nama = e.target.value
		if (!nama) {
			setSearchParams({})
			updateDataValue('name', nama)
			return
		}

		setSearchParams({ nama })
		updateDataValue('name', nama)
		console.log(searchParams.get('nama'))
	}

	useEffect(() => {
		const nama = searchParams.get('nama')
		if (nama) {
			setSearchParams({ nama })
			updateDataValue('name', nama)
		}
	}, [searchParams])

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
				value={searchParams.get('nama') || ''}
			/>
		</>
	)
}

export { Input }
