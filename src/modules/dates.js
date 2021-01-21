import moment from 'moment'

export function formatDate(val) {
	return moment(val).format('MMMM Do, YYYY');
}