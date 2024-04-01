import { Blog, BodyType } from '../interfaces/InterfaceBlog'
import { ref, Ref } from 'vue'

const blog: Ref<Blog> = ref({
	id: 'how-to-make-eye-catching-videos-for-social-media',
	date: 'Monday, January 1, 2023',
	title: 'How To Make Eye-Catching Videos For Social Media',
	description: 'As a small business owner, you know that social media is a \
	powerful tool to reach new customers and grow your brand.',
	authors: [
		'Forrest Smith'
	],
	categories: [
		'Digital Marketing',
		'Video Content'
	],
	images: [
		'images/youtube-phone.jpg'
	],
	body: [
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `As a small business owner, you know that social media is a powerful tool to \
			reach new customers and grow your brand. But what you may not realise is that video is one of the \
			most effective types of content you can share on social media. In fact, 78% of people say they’ve \
			watched an entire video on Facebook in the last week.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `To create eye-catching videos that keep your audiences engaged and generate more leads and \
			conversions, make sure your videos start with a strong hook, use closed captions, thumbnails, relevant \
			tags and that they aren’t too long.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `So, how can you create eye-catching videos that will capture attention and get results? Here are 7 tips:`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `1. Keep it short and sweet`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `The attention span of most viewers is very short, so it’s important to make your videos as concise as \
			possible. Aim for videos that are 60 seconds or less.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `2. Start with a strong hook`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `You only have a few seconds to capture someone’s attention, so make sure your video starts strong. Use an \
			attention-grabbing image or video clip, and make sure your first few seconds are engaging and exciting.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `3. Use descriptive captions`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Captions are important for two reasons: They help viewers understand your video if they can’t hear the audio, \
			and they help search engines index your video so people can find it. Use descriptive captions that accurately describe what’s \
			happening in your video.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `4. Use relevant tags`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Tags are another way to help people find your video. When you upload your video to a social media platform like YouTube, \
			be sure to include relevant tags so people can easily discover your content.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `5. Optimise your title and thumbnail`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Your title and thumbnail are the first things people will see when they come across your video, so make sure they’re catchy and \
			inviting. Use attractive visuals and descriptive text to give viewers a taste of what your video is about.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `6. Promote your video`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `Once you’ve created your video, it’s important to promote it to ensure as many people as possible see it. Share it on your social \
			media channels, embed it on your website, and send it to your email list.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Subtitle,
			data: `7. Analyse your results`
		},
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `After you’ve promoted your video, take some time to analyse the results. How many people watched it? How long did they watch it? Where \
			did they come from? Which call to action led to the most conversions? Learning from your past videos will help you create even more successful ones \
			in the future.`
		},
		{ type: BodyType.LineBreak },
		{ type: BodyType.LineBreak },
		{
			type: BodyType.Text,
			data: `By following these tips, you can create eye-catching videos that people will want to watch and that will help you achieve your business goals.`
		},
	]
})

export default () =>
{
	return blog;
}