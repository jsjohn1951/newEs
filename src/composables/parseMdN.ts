import { BlogN, BodyType, Body } from '../content/interfaces/InterfaceBlog'
import { ref, Ref } from 'vue'

/**
 * @class tools
 * @description Takes a reference to the Blog post and continues the
 * 	process of parsing.
 */

export default class mainParser {
	private md : string = '';
	private data: string[];
	private blog: Ref<BlogN> = ref({
		id: '',
		date: '',
		title: '',
		description: '',
		authors: [],
		categories: [],
		tags: [],
		images: [],
		body: ''
	})

	getBlog()
	{
		return this.blog
	}

	parseLists (body: string) : string[]
	{
		let trimmed = body.slice(1, body.length - 1);
		return (trimmed.split(','));
	}

	tagsCat (item: string, body: string, type: string)
	{
		let entry = this.parseLists(body);
		for (item of entry)
		{
			let nItem = item.trim();
			(type == 'tag' ?
			this.blog.value.tags?.push(nItem.slice(1, nItem.length - 1)) :
			this.blog.value.categories?.push(nItem.slice(1, nItem.length - 1)));
		}
	}

	parseHead (name: string | undefined, body: string | undefined)
	{
		let item = ''
		this.blog.value.draft = false;

		if (!name || !body)
			return ;
		let curr = body.slice(1, body.length - 1);
		switch(name)
		{
			case 'title:': this.blog.value.title = curr; break ;
			case 'meta_title:': this.blog.value.meta_title = curr; break ;
			case 'description:': this.blog.value.description = curr; break ;
			case 'date:': this.blog.value.date = body; break ;
			case 'image:':
				if (body.includes('"'))
					this.blog.value.images?.push(body.slice(1, body.length - 1));
				else
					this.blog.value.images?.push(body);
			break ;
			case 'author:':
				if (body.includes('"'))
					this.blog.value.authors?.push(body.slice(1, body.length - 1));
				else
					this.blog.value.authors?.push(body);
			break ;
			case 'tags:': this.tagsCat(item, body, 'tag'); break ;
			case 'categories:': this.tagsCat(item, body, 'cat'); break ;
			case 'draft:': body == 'true' ? this.blog.value.draft = true : this.blog.value.draft = false; break ;
		}
	}

	constructor (markdown: string)
	{
		this.md = markdown;
		this.data = this.md.split('\n');
		this.blog.value.head = false;
		let flag = 0;
		let item = '';
		let index = -1
		let alt = this.data;

		for (item of this.data)
		{
			index++;
			if (this.blog.value.head == false)
			{
				if (item.slice(0, 3).includes('---'))
				{
					switch (flag)
					{
						case 1 : flag = 0; break ;
						default : flag = 1; break ;
					}
					if (flag == 0)
					{
						this.blog.value.head = true;
						alt = alt.slice(2, alt.length)
						this.blog.value.body = alt.join('\n')
					}
					continue ;
				}
				if (flag == 1)
				{
					let sub: string[] = item.split(' ', 1);
					sub.push(item.slice(sub[0].length, item.length));
					sub[1] = sub[1].trim();
					if (sub && this.blog.value.head == false){
						this.parseHead(sub[0], sub[1]);
						alt = this.data.slice(index);
					}
					continue ;
				}
			}
			if (item.slice(0, 3).includes('---'))
				item = '';
			let sub: string[] = item.split(' ', 1);
			sub.push(item.trim());
		}
		this.blog.value.id = this.blog.value.title.toLowerCase();
		this.blog.value.id = this.blog.value.id.replaceAll(' ', '-');
		this.blog.value.id = this.blog.value.id.replaceAll(':', '');
	}
}
