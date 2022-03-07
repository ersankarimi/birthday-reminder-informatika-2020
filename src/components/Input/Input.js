import React, { useEffect } from 'react'
import { useMyContext } from '../../hooks/useMyContext'
import { useSearchParams } from 'react-router-dom'

const Input = () => {
	const {
		filterData: { input, month },
		updateDataValue,
	} = useMyContext()

	const [searchName, setSearchName] = useSearchParams()

	const handleChange = (e) => {
		const nama = e.target.value

		updateDataValue('sort', 'none')

		if (!nama) {
			updateDataValue('name', nama)
			setSearchName({})
			return
		}

		setSearchName({ nama })
		updateDataValue('name', nama)
	}

	useEffect(() => {
		const nama = searchName.get('nama')
		if (nama) {
			setSearchName({ nama })
			updateDataValue('name', nama)
			return
		}
		updateDataValue('month', '-1')
	}, [searchName])

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
				value={searchName.get('nama') || ''}
			/>
		</>
	)
}

export { Input }
