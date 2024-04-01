import { Ref, ref } from 'vue'

export interface homeEntry {
	id: number
	title?: string,
	data?: string,
	image?: string,
	button?: {
		title: string,
		link: string,
		icon?: string
	}[]
}

export const homeStore: Ref<homeEntry[]> = ref([]);

// section 1: Digital Marketing
homeStore.value.push({
	id: 0,
	title: 'Equip yourself with digital marketing skills and keep up with the latest trends',
	data: 'Essential Millennial is a platform for creatives to thrive in the 21st Century. \
	<br><br> \
	Did you know that 14% of businesses fail as a direct result of poor marketing? In the digital economy, \
	digital marketing has proven to be a barrier to entry for many businesses that may have otherwise thrived. \
	We’re here to change that. \
	<br><br> \
	At the same time, with AI technology on the horizon, creative careers are under threat. \
	<br><br> \
	But you’ll never be able to fully replace the human element that lives within all our creations. \
	Our mission at Essential Millennial is to turn human creativity into marketable content and distribute it \
	through social media channels and other digital platforms while you keep focusing on your business. \
	<br><br> \
	We’re also committed to imparting valuable skills to independent creators by providing you with templates \
	and training to do all the work yourself in minutes.',
	image: '/digital-marketing.webp'
})

// section 2: Marketing Strategy
homeStore.value.push({
	id: 1,
	title: 'Create a digital marketing strategy',
	data: `Whether you’re an independent creator with no digital marketing know-how or a business looking to stay ahead of the competition, \
	we’re here to craft tailor-made packages to help get your personal or company brand out in the challenging online ether.`,
	image: '/strategy.webp'
})

// section 3: Services
homeStore.value.push({
	id: 2,
	title: 'Services we provide',
	data: 'Whatever your needs, we have the skills, people, and the service offering to help you succeed.',
	image: '/creative-process.svg',
	button: [
		{
			title: 'Get Started Now',
			link: '/Services',
			icon: 'mdi-arrow-right'
		}
	]
})