// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Pranav',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon',
	greetingEvening: 'Good evening',
	greetingNight: 'Sleep well King!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'f028371db03f057bb2bf95d8618412a3', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '21.194145339909028',
	defaultLongitude: '72.78374231503187',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '00:00',
	hourDarkThemeInactive: '00:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '2',
			name: 'WhatsApp',
			icon: 'message-circle',
			link: 'https://www.web.whatsapp.com/',
		},
		{
			id: '5',
			name: 'Animixplay',
			icon: 'heart',
			link: 'https://www.animixplay.to/',
		},
		{
			id: '3',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://www.reddit.com',
		},
		{
			id: '4',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com/',
		},
		{
			id: '6',
			name: 'Fast.com',
			icon: 'wifi',
			link: 'https://www.fast.com/',
		},
	],


	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Vibrating Air',
					link: 'https://youtube.com/playlist-list=PLhTn1Qdszh15Kr7NJYSoGzjj8SNAXGocA',
				},
				{
					name: 'Random songs',
					link: 'https://youtube.com/playlist?list=PLhTn1Qdszh14aw8oj4UCDXEIjM_L4Pl28',
				},
				{
					name: 'LoFi',
					link: 'https://www.lofi.co',
				},
				{
					name: 'Dark Academia',
					link: 'https://youtu.be/s8tSxHEoZyQ',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Gmail',
					link: 'https://mail.google.com/mail/u/1/#inbox',
				},
				{
					name: 'Amazon',
					link: 'https://www.amazon.in/',
				},
				{
					name: 'Twitter/Explore',
					link: 'https://twitter.com/explore',
				},
				{
					name: 'Google Images',
					link: 'https://images.google.com/',
				},
			],
		},
	],
};
