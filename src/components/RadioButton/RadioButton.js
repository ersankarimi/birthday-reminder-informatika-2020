import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMyContext } from '../../hooks/useMyContext'

const RadioButton = () => {
	const {
		filterData: { sort },
		updateDataValue,
	} = useMyContext()

	console.log(sort)
	const handleChange = (e) => {
		updateDataValue('sort', e.target.id)
	}

	useEffect(() => {
		const radioButon = document.querySelectorAll('input[type=radio]')
		radioButon.forEach((element) => {
			if (element.id === sort) element.checked = true
		})
	}, [sort])

	return (
		<div className='radio' id='radio'>
			<h2 className='text-white text-sm'>Sort By</h2>

			<div className='radio__radio flex mt-1.5'>
				{['none', 'ascending', 'descending'].map((item, i) => {
					return (
						<div
							className='flex items-center mr-2 mb-2'
							key={i + 1}
						>
							<input
								id={item}
								type='radio'
								name='radio'
								className='appearance-none hidden'
								onChange={handleChange}
								defaultChecked={i === 0 && true}
							/>
							<label
								htmlFor={item}
								className='flex items-center cursor-pointer text-white text-xs font-nunito'
							>
								<span
									className={`w-4 h-4 inline-block mr-1 border border-grey bg-no-repeat p-2 bg-center rounded-md border-stroke-input-text bg-bg-radio-button`}
								></span>
								{item.charAt(0).toUpperCase() + item.slice(1)}
							</label>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export { RadioButton }
