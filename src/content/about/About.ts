import { Blog, BodyType } from '../interfaces/InterfaceBlog'
import { ref, Ref } from 'vue'

const blog: Ref<Blog> = ref({
	id: 'about',
	date: '',
	title: 'We Are Essential Millennial',
	images: [
		'/em-banner-logo.png'
	],
	body: [
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Founded in 2019 as a collaborative blog, Essential Millennial is a platform that was \
			created to empower writers and creators in the ever-evolving digital media and marketing industries.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `In 2023, we recalibrated, rebranded, and restructured ourselves as a digital marketing \
			agency and media training organisation.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Recognising the industry disruption already in motion with emerging AI technologies like \
			ChatGPT, we are committed to preserving the human element in the creative process.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `We provide freelance content creation services, private and corporate training programs, \
			and digital marketing strategy consulting.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Small businesses, independent creators, artists, and even journalists have a home at Essential Millennial. \
			We are in the business of creative expression and we give you all the tools you need to thrive in the digital marketplace.`
		},
	]
})

export default () =>
{
	return blog;
}