const MILLISECONDS_TO_WEEKS = 6.048e8;

export default function useDate(date: Date) {
	const today = new Date() as any;
	const createdOn = new Date(date) as any;

	// Weeks back from today
	const weeks = (createdOn - today) / MILLISECONDS_TO_WEEKS;
	const nearestWeek = Math.ceil(weeks);
	if (nearestWeek === 0) {
		return 'this week';
	}

	if (nearestWeek > 52) {
		return 'a while ago';
	}

	// Intl Date
	const relativeTime = new Intl.RelativeTimeFormat('en-In');

	// Formats Weeks into relative weeks
	return relativeTime.format(nearestWeek, 'weeks');
}
