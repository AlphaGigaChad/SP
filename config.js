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
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Sleep well!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'f028371db03f057bb2bf95d8618412a3', // Write here your API Key
	weatherIcons: 'OneDark', // 'OneDark', 'Nord', 'Dark', 'White'
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
			name: 'Telegram',
			icon: 'message-square',
			link: 'https://web.telegram.org/k',
		},
		{
			id: '3',
			name: 'Whatsapp',
			icon: 'message-circle',
			link: 'https://web.whatsapp.com',
		},
		{
			id: '4',
			name: 'Netflix',
			icon: 'tv',
			link: 'https://www.netflix.com/browse',
		},
		{
			id: '6',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://www.reddit.com/',
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
					name: 'rap or sum',
					link: 'https://open.spotify.com/playlist/59IRR2PazMJSCGmiGb8ZFn?si=62ac202979064163',
				},
				{
					name: 'big sad',
					link: 'https://open.spotify.com/playlist/0eQ7EZxTdbLEXe8L7lCRyK?si=511bde3472a5466a',
				},
				{
					name: 'randos',
					link: 'https://open.spotify.com/playlist/71LDvUGVNSXO1eqEi0WpiP?si=af7b77cd553743af',
				},
				{
					name: 'classical',
					link: 'https://open.spotify.com/playlist/5eS8QENGl2TUBlErTLuJKE',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Spotify',
					link: 'https://open.spotify.com/',
				},
				{
					name: 'Teams',
					link: 'https://teams.microsoft.com/',
				},
				{
					name: 'Twitter',
					link: 'https://www.twitter.com/explore',
				},
				{
					name: 'Anime',
					link: 'https://aniwave.to/home/',
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
