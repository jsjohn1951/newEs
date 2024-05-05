import { Blog, BodyType, Body } from '../interfaces/InterfaceBlog'
import { ref, Ref } from 'vue'
import parser from '../../composables/parseMd'

let blog: Ref<Blog[]> = ref([]);

const ret = async () =>
{
	const arr: string[] = []

	const mod = import.meta.glob('./*.md', {
		query: '?raw',
	  })
	  for (const path in mod) {
		  await mod[path]().then((m) => {
			blog.value.push(new parser(m.default).getBlog().value);
		  })
		}
}

await ret();

export default () => {
	let posts = []
	for (let item of blog.value)
		posts.push(() => { return ref(item)})
	return (
		posts
	);
}