// * convert birth date to text
export const fullMonth = {
	'00': 'Semua',
	'01': 'Januari',
	'02': 'Februari',
	'03': 'Maret',
	'04': 'April',
	'05': 'Mei',
	'06': 'Juni',
	'07': 'Juli',
	'08': 'Agustus',
	'09': 'September',
	10: 'Oktober',
	11: 'November',
	12: 'Desember',
}
export const convertBirthDate = (userDate) => {
	const [year, month, date] = userDate.split('-')
	return `${date} ${fullMonth[month]} ${year}`
}
