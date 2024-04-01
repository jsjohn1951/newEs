import { Blog, BodyType } from '../interfaces/InterfaceBlog'
import { ref, Ref } from 'vue'

const blog: Ref<Blog> = ref({
	id: '5-ways-that-ai-is-changing-the-digital-marketing-landscape',
	date: 'Monday, January 1, 2023',
	title: '5 Ways That AI Is Changing the Digital Marketing Landscape',
	description: 'Artificial Intelligence (AI) is the cool new kid on the block in almost every industry \
	around the world and the digital marketing and content marketing industries are no exception, with programs \
	like Chaat GPT set to become huge industry disruptors.',
	authors: [
		'Forrest Smith'
	],
	categories: [
		'Digital Marketing'
	],
	images: [
		'images/5-AI-marketing.jpg'
	],
	body: [
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Artificial Intelligence (AI) is the cool new kid on the block in almost every industry around the world and \
			the digital marketing and content marketing industries are no exception, with programs like Chaat GPT set to become \
			huge industry disruptors. But for those of us in the industry who’s jobs are going to be radically transformed at the very least \
			don’t need to despair, AI can be an incredibly useful tool for digital marketing and this is an opportunity for you to \
			thrive if you keep up to date with the latest market trends!`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `AI is transforming the digital marketing landscape with automated insights, predictive analytics, lead scoring, ad \
			optimisation, and sentiment analysis. These new tools will help companies understand their customers better, but find better \
			ways to target them and generate more conversions.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Digital marketing is the process of promoting a brand or product online. It can be done through a variety of online channels, \
			including search engines, social media, email, and websites.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Artificial intelligence (AI) is a rapidly growing field that is changing the landscape of digital marketing. Here are five ways \
			that AI is being used in digital marketing:`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `1. Automated Insights`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `One way AI is being used in digital marketing is to automate the process of generating insights. Insights are important for understanding \
			what is working and what is not working with a digital marketing campaign.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `In the past, these insights were generated manually by analysts who would pour over data and try to find trends. \
			This is a time-consuming process that is subject to human error.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `With AI, analysts can set up algorithms that will automatically generate insights. This means that digital \
			marketers can get insights in real-time, which can be used to adjust campaigns on the fly.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `2. Predictive Analytics`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Another use for AI in digital marketing is predictive analytics. This is a type of AI that is used to \
			understand what is going to happen in the future.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `This is done by analysing past data and trends. Based on this data, predictive analytics can provide \
			insights into what is going to happen in the future.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `This type of AI is being used by digital marketers to understand how customers will react to different \
			marketing campaigns. By understanding this, marketers can adjust their campaigns to maximise results.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `3. Lead Scoring`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Lead scoring is a process that is used to identify the best leads for a sales team. In the past, \
			this was a manual process that was time-consuming and subject to human error.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `With AI, lead scoring can be automated. This means that the best leads can be identified in real-time, \
			which can save a lot of time for sales teams.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `4. Ad Optimisation`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Ad optimisation is another area where AI is being used in digital marketing. In the past, ads were \
			manually placed on websites and in other online channels.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `This was a hit-or-miss process that was not very effective. With AI, ads can be automatically placed in the most effective locations.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `This means that ads are more likely to be seen by people who are interested in them. As a result, \
			businesses can save money on advertising, and they can get better results from their campaigns.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `5. Sentiment Analysis`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Sentiment analysis is a process that is used to understand the emotions of people. \
			This is done by analysing the language that people use.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `With sentiment analysis, digital marketers can understand how people feel about a \
			brand or product. This type of AI is being used to understand the customer’s journey.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `By understanding the emotions of customers, digital marketers can provide a better \
			experience for them. This, in turn, can lead to more sales and more loyal customers.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Sounds crazy, right? The future of digital marketing is here, and in a few year, \
			the industry may look completely unrecognisable. The sky is the limit when it comes to the \
			potential that AI holds for the digital marketing industry.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `And if you want to stay up to date with the latest market trends, the Essential Millennial \
			is here to keep you in the loop!`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Subscribe to our newsletter `
		},
		{
			type: BodyType.Link,
			data: `HERE`,
			link: '/#subscribe'
		},
		{
			type: BodyType.Text,
			data: ` to get our latest stories sent directly into your inbox as soon as they’re published.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
	]
})

export default () =>
{
	return blog;
}