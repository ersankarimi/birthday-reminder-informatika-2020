import React from 'react'
import { convertBirthDate } from '../../utils/convertBirthDate'

const List = (props) => {
	const { name, date, age } = props
	const articleClasses =
		'p-4 bg-primary-card my-2 font-nunito rounded-md text-white backdrop-blur-primary border-stroke-card border-2'
	const h1Classes = 'text-lg'
	const h2Classes = 'text-md'
	return (
		<>
			<article className={articleClasses}>
				<h1 className={h1Classes}>{name}</h1>
				<h2 className={h2Classes}>
					Lahir &nbsp;: {convertBirthDate(date)}
				</h2>
				<h2 className={h2Classes}>Umur : {age} Tahun</h2>
			</article>
		</>
	)
}

export { List }
