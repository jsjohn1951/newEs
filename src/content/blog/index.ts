import blog2 from './How-To-Make-Eye-Catching-Videos-For-Social-Media'

import { Blog, BodyType, Body } from '../interfaces/InterfaceBlog'
import { ref, Ref } from 'vue'
import parser from './parseMd'

import nav from './Navigating the Digital Marketing Landsca pe – Trends and Strategies for Success.md'
import inter from './The Intersection of Creator Economy Trends and Digital Marketing - Navigating the Future.md'
import waysAi from './5-Ways-That-AI-Is-Changing-the-Digital-Marketing-Landscape.md'

let blog: Ref<Blog[]> = ref([]);

blog.value.push(new parser(nav).getBlog().value);
blog.value.push(new parser(inter).getBlog().value);
blog.value.push(new parser(waysAi).getBlog().value);

// const images = require.context('./', true);

export default () => {
	let posts = []
	for (let item of blog.value)
		posts.push(() => { return ref(item)})
	return (
		posts
	);
}