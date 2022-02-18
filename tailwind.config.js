module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'blue-text': 'rgba(74,199,250,1)',
				'purple-text': 'rgba(230,73,245,1)',
				primary: '#303030',
				'stroke-input-text': 'rgba(180,201,207,0.5)',
				'stroke-dropdown': 'rgba(180,201,207,0.5)',
				'primary-card': 'rgba(0,0,0,0.35)',
				'stroke-card': '#344347',
				'input-text': 'rgba(29,33,34,0.3)',
				'placeholder-input': 'rgba(255,255,255,0.5)',
				'bg-radio-button': 'rgba(26,91,74,0.20)',
				'hover-card-item': 'rgba(255,255,255,0.07)',
			},
			fontFamily: {
				nunito: ['Nunito Sans', 'sans-serif'],
				'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
			},
			backdropBlur: {
				primary: '56px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
