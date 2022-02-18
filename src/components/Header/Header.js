import React from 'react'

const Header = () => {
	const gradientTextClass =
		'text-transparent bg-clip-text bg-gradient-to-r from-blue-text via-purple-text to-purple-text'
	return (
		<header className='container font-roboto-condensed flex flex-col items-center justify-center my-16'>
			<h1 className={`text-4xl sm:text-5xl ${gradientTextClass}`}>
				Birthday Reminder
			</h1>
			<h2 className={`text-3xl sm:text-4xl ${gradientTextClass}`}>
				Informatika 2020
			</h2>
			<h3 className='text-2xl sm:text-3xl'>🎉🎉🎉</h3>
		</header>
	)
}

export { Header }
