import { Blog, BodyType, Body } from '../interfaces/InterfaceBlog'
import { ref, Ref } from 'vue'
import parser from './parseMd'
import nav from './Navigating the Digital Marketing Landsca pe – Trends and Strategies for Success.md'

let blog: Ref<Blog> = ref({
	id: 'navigating-the-digital-marketing-landscape-trends-and-strategies-for-success',
	date: '',
	title: '',
	description: '',
	authors: [],
	categories: [],
	tags: [],
	images: [],
	body: []
});

let pars = new parser(nav);

blog = pars.getBlog();
blog.value.id = 'navigating-the-digital-marketing-landscape-trends-and-strategies-for-success';

export default () =>
{
	return blog;
}