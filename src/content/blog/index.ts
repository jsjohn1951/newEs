import { BlogN } from '../interfaces/InterfaceBlog'
import { ref, Ref } from 'vue'
import parser from '../../composables/parseMdN'
import { marked } from 'marked';

let blog: Ref<BlogN[]> = ref([]);

const ret = async () =>
{
	const arr: string[] = []

	const mod = import.meta.glob('./*.md', {
		query: '?raw',
	  })
	  for (const path in mod) {
		  await mod[path]().then((m) => {
			// console.log(marked(m.default))
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