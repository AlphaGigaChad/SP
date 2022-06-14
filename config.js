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
	openInNewTab: false,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon',
	greetingEvening: 'Good evening',
	greetingNight: 'Sleep well!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'f028371db03f057bb2bf95d8618412a3', // Write here your API Key
	weatherIcons: 'Dark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
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
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '2',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com/',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://www.reddit.com',
		},
		{
			id: '3',
			name: 'Whatsapp',
			icon: 'message-circle',
			link: 'https://web.whatsapp.com',
		},
		{
			id: '4',
			name: 'Anime',
			icon: 'heart',
			link: 'https://www.animixplay.to/',
		},
		{
			id: '6',
			name: 'fast.com',
			icon: 'wifi',
			link: 'https://www.fast.com/',
		},
	],

//	secondButtonsContainer: [
//		{
//			id: '4',
//			name: 'GIT',
//			icon: 'github',
//			link: 'https://github.com/',
//		},
//		{
//			id: '5',
//			name: 'DOCKER',
//			icon: 'package',
//			link: 'http://192.168.1.253:9000/',
//		},
//		{
//			id: '3',
//			name: 'ENDEAVOUR',
//			icon: 'rocket',
//			link: 'https://forum.endeavouros.com/',
//		},
//		{
//			id: '1',
//			name: 'MB',
//			icon: 'server',
//			link: 'http://192.168.1.253:81',
//		},
//		{
//			id: '6',
//			name: 'FIN',
//			icon: 'play-circle',
//			link: 'http://192.168.1.253:8096',
//		},
//		{
//			id: '2',
//			name: 'DL',
//			icon: 'download',
//			link: 'http://192.168.1.253:9091/transmission/web/',
//		},
//	],

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
					link: 'https://youtube.com/playlist?list=PLhTn1Qdszh15Kr7NJYSoGzjj8SNAXGocA',
				},
				{
					name: 'Random songs',
					link: 'https://youtube.com/playlist?list=PLhTn1Qdszh14aw8oj4UCDXEIjM_L4Pl28',
				},
				{
					name: 'LoFi',
					link: 'lofi.co',
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
					link: 'https://mail.google.com/mail/u/0',
				},
				{
					name: 'Amazon',
					link: 'https://www.amazon.in',
				},
				{
					name: 'Twitter/Explore',
					link: 'https://www.twitter.com/explore',
				},
				{
					name: 'Google Images',
					link: 'https://images.google.com',
				},
			],
		},
	],

	// Second Links Container
//	secondListsContainer: [
//		{
//			icon: 'binary',
//			id: '1',
//			links: [
//				{
//					name: 'Spotify',
//					link: 'https://www.spotify.com',
//				},
//				{
//					name: 'Reddit',
//					link: 'https://www.reddit.com',
//				},
//				{
//					name: 'Hashnode',
//					link: 'https://www.hashnode.com',
//				},
//				{
//					name: 'Pocket',
//					link: 'https://www.pocket.com',
//				},
//
//],
//		},
//		{
//			icon: 'github',
//			id: '2',
//			links: [
//				{
//					name: 'Front',
//					link: 'https://www.reddit.com/r/Frontend/',
//				},
//				{
//					name: 'Rust',
//					link: 'https://www.reddit.com/r/rust/',
//				},
//				{
//					name: 'Go',
//					link: 'https://www.reddit.com/r/golang/',
//				},
//				{
//					name: 'Repos',
//					link: 'https://github.com/migueravila',
//				},
//		],
//		},
//	],
};
