import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<div className='error flex flex-col justify-center items-center min-h-screen'>
			<div className='big'>
				<span
					className={
						'text-9xl font-bold block text-white tracking-wider'
					}
				>
					404
				</span>
				<span className={'text-4xl block text-white font-semibold'}>
					Page Not Found
				</span>
			</div>
			<div className='small text-center text-md md:text-xl text-white/80 font-nunito mt-4'>
				Halaman yang anda cari tidak ditemukan
			</div>
			<button
				type='button'
				className='bg-input-text p-2 mt-4 flex justify-center items-center border-2 border-stroke-dropdown text-placeholder-input text-sm backdrop-blur-primary rounded-lg active:bg-hover-card-item focus:outline-none focus:ring-2 focus:ring-stroke-dropdown'
			>
				<Link to={'/'}>Kembali ke beranda</Link>
			</button>
		</div>
	)
}

export { Error }
