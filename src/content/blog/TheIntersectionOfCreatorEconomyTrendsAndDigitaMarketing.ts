import { Blog, BodyType } from '../interfaces/InterfaceBlog'
import { ref, Ref } from 'vue'
import parser from './parseMd'
import nav from './The Intersection of Creator Economy Trends and Digital Marketing - Navigating the Future.md'

let blog: Ref<Blog> = ref({
	id: '',
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
blog.value.id = 'the-intersection-of-creator-economy-trends-and-digital-marketing-navigating-the-future';

export default () =>
{
	return blog;
}
