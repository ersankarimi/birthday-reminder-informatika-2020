import React, { useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { useMyContext } from '../../hooks/useMyContext'
import { fullMonth } from '../../utils/convertBirthDate'

const Dropdown = () => {
	const dropdownItem = useRef('')
	const dropdownSvg = useRef('')
	const dropdownPath = useRef('')
	const {
		filterData: { month, input, sort },
		updateDataValue,
	} = useMyContext()

	const [searchBulan, setSearchBulan] = useSearchParams()

	const handleClick = () => {
		dropdownItem.current.classList.toggle('hidden')
	}

	const handleClickDropdownItem = (e) => {
		const kodeBulan = parseInt(e.target.id)

		const bulan =
			kodeBulan < 9
				? fullMonth[`0${kodeBulan + 1}`].toLowerCase()
				: fullMonth[kodeBulan + 1].toLowerCase()

		if (Number(kodeBulan) + 1 === 0) {
			setSearchBulan({})
			updateDataValue('month', String(kodeBulan))
			return
		}

		setSearchBulan({ bulan })
		updateDataValue('month', kodeBulan)
	}

	const handleWindowClick = (e) => {
		if (
			!dropdownItem.current.classList.contains('hidden') &&
			e.target.parentElement !== dropdownItem.current.parentElement &&
			e.target !== dropdownSvg.current &&
			e.target !== dropdownPath.current
		) {
			dropdownItem.current.classList.toggle('hidden')
		}
	}

	useEffect(() => {
		const bulan = searchBulan.get('bulan')

		if (!bulan) {
			return
		}

		for (const [key, value] of Object.entries(fullMonth)) {
			if (value.toLowerCase() === bulan) {
				setSearchBulan({ bulan })
				updateDataValue('month', Number(key) - 1)
			}
		}
	}, [searchBulan])

	useEffect(() => {
		const data = sort
		updateDataValue('sort', 'none')
		setTimeout(() => {
			updateDataValue('sort', data)
		}, 65)
	}, [month])

	useEffect(() => {
		window.addEventListener('click', handleWindowClick)

		return () => window.removeEventListener('click', handleWindowClick)
	})

	return (
		<div className='dropdown my-1.5 relative md:mr-4 z-50'>
			<button
				type='button'
				className='bg-input-text p-2 flex justify-center items-center border-2 border-stroke-dropdown text-placeholder-input text-sm backdrop-blur-primary rounded-lg active:bg-hover-card-item focus:outline-none focus:ring-2 focus:ring-stroke-dropdown'
				onClick={handleClick}
			>
				Pilih Bulan
				<svg
					className='-mr-1 ml-2 h-5 w-5'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					aria-hidden='true'
					ref={dropdownSvg}
				>
					<path
						fillRule='evenodd'
						d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
						clipRule='evenodd'
						ref={dropdownPath}
					/>
				</svg>
			</button>
			<div
				className='dropdown-item my-1 bg-black/50 absolute hidden'
				ref={dropdownItem}
			>
				{[
					'Semua',
					'Januari',
					'Febuari',
					'Maret',
					'April',
					'Mei',
					'Juni',
					'Juli',
					'Agustus',
					'September',
					'Oktober',
					'November',
					'Desember',
				].map((menu, i) => {
					return (
						<div
							className='w-full py-1 px-4 text-placeholder-input bg-black/30 backdrop-blur-primary cursor-pointer hover:bg-hover-card-item'
							key={i + 1}
							onClick={handleClickDropdownItem}
							id={i - 1}
						>
							{menu}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export { Dropdown }
