import { link } from 'fs';
import { Blog, BodyType, Body } from '../interfaces/InterfaceBlog'
import { ref, Ref } from 'vue'

/**
 * @class tools
 * @description Takes a reference to the Blog post and continues the
 * 	process of parsing.
 */
class tools {
	blog: Ref<Blog> ;
	nbody: Body[] = [];

	parseHeading(name: string | undefined, body: string | undefined)
	{
		if (!name || !body)
			return ;
		switch(name)
		{
			case '' : this.blog.value.body?.push({ type: BodyType.LineBreak}); break;
			case '#' :
				this.blog.value.body?.push({ type: BodyType.Heading1, data: body.slice(name.length, body.length) });
				this.blog.value.body?.push({type: BodyType.LineBreak});
			break ;
			case '##' :
				this.blog.value.body?.push({ type: BodyType.Heading2, data: body.slice(name.length, body.length) });
				this.blog.value.body?.push({type: BodyType.LineBreak});
			break ;
			case '###' :
				this.blog.value.body?.push({ type: BodyType.Heading3, data: body.slice(name.length, body.length) });
				this.blog.value.body?.push({type: BodyType.LineBreak});
			break;
			case '####' :
				this.blog.value.body?.push({ type: BodyType.Heading4, data: body.slice(name.length, body.length) });
				this.blog.value.body?.push({type: BodyType.LineBreak});
			break;
		}
	}

	parseBody(name: string | undefined, body: string | undefined)
	{
		if (!name || !body)
			return ;
		switch(name)
		{
			case '' :
				this.blog.value.body?.push({type: BodyType.LineBreak});
				return ;
			case '#' : return ;
			case '##' : return ;
			case '###' : return ;
			case '####' : return ;
		}
		this.blog.value.body?.push({ type: BodyType.Text, data: body })
		this.blog.value.body?.push({type: BodyType.LineBreak});
		this.blog.value.body?.push({type: BodyType.LineBreak});
	}

	parseEmphasis(j: number, delem: string)
	{
		let body = this.blog.value.body;
		let item = '';
		let str: string | undefined = '';
		let split: string[] = [];
		let index = 0;

		if (!body)
			return ;
		str = body[j].data;
		this.nbody.push({type: body[j].type, data: ''});
		if (!str)
			return ;
		split = str.split(delem);
		for (item in split)
		{
			index = parseInt(item);
			if (!index)
			{
				this.nbody[this.nbody.length - 1].data = split[index];
				continue ;
			}
			switch ((index % 2))
			{
				case 0:
					this.nbody.push({
						type: body[j].type,
						data: split[index]
					});
				break ;
				default :
					this.nbody.push({
						type: body[j].type,
						data: split[index],
						bold: delem == '**' || delem == '***' ? true : false,
						italic: delem == '*' || delem == '***' ? true : false
					});
				break ;
			}
		}
	}

	parseImg (blog: Ref<Blog>)
	{
		let body = ref(blog.value.body);
		let item: Body = {type: BodyType.Bullet};
		if (!body.value)
			return ;
		for (item of body.value)
		{
			if (item.data?.slice(0, 3).includes('![]'))
			{
				let sub = item.data.split("![]").filter((value: string) => {
					if (value.length != 0)
						return value;
				});
				item.link = sub[0].slice(1, sub[0].length - 1);
				item.type = BodyType.Image;
			}
		}
	}

	parseLink (blog: Ref<Blog>)
	{
		let body = ref(blog.value.body);
		let item: Body = {type: BodyType.Bullet};
		let index = 0;
		let entries = [{
			index: 0,
			start: {
				type: BodyType.Text,
				data: ''
			},
			center : {
				type: BodyType.Link,
				link: '',
				data: ''
			},
			end: {
				type: BodyType.Text,
				data: ''
			},
		}]
		if (!body.value)
			return ;
		for (item of body.value)
		{
			if (item.data?.includes('[') && item.data[item.data?.indexOf('[') - 1] != '!')
			{
				let trimFront = item.data.substring(item.data?.indexOf('['));
				let data = trimFront.substring(1, trimFront.indexOf(']'));
				let link = trimFront.substring(trimFront.indexOf('(') + 1, trimFront.indexOf(')'));
				entries.push({
					index: index,
					start: {
						type: BodyType.Text,
						data: item.data.substring(0, item.data.indexOf(trimFront))
					},
					center: {
						type: BodyType.Link,
						link: link,
						data: data
					},
					end: {
						type: BodyType.Text,
						data: item.data.substring(item.data.indexOf(link) + link.length + 1)
					}
				})
			}
			index++;
		}
		entries = entries.slice(1, entries.length);
		let p: [number] = [0];
		p.pop();
		let entry;
		for (entry of entries)
			p.push(entry.index);
		for (let i = p.length - 1; i >= 0; i--)
		{
			body.value.splice(p[i], 0, entries[i].start, entries[i].center, entries[i].end)
			body.value.splice(p[i] + 3, 1);
		}
	}

	constructor (b: Ref<Blog>)
	{
		this.blog = b;
	}
}

export default class mainParser {
	private md : string = '';
	private data: string[];
	private blog: Ref<Blog> = ref({
		id: '',
		date: '',
		title: '',
		description: '',
		authors: [],
		categories: [],
		tags: [],
		images: [],
		body: []
	})
	private toolset : tools = new tools(this.blog);

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
			case 'image:': this.blog.value.images?.push(body.slice(1, body.length - 1)); break ;
			case 'author:': this.blog.value.authors?.push(body.slice(1, body.length - 1)); break ;
			case 'tags:': this.tagsCat(item, body, 'tag'); break ;
			case 'categories:': this.tagsCat(item, body, 'cat'); break ;
			case 'draft:': body == 'true' ? this.blog.value.draft = true : this.blog.value.draft = false; break ;
		}
	}

	constructor (markdown: string)
	{
		this.md = markdown;
		this.data = this.md.split('\n');
		let flag = false;
		let item = '';

		for (item of this.data)
		{
			if (item.includes('---'))
			{
				switch (flag ? 1 : 0)
				{
					case 1 : flag = false; break ;
					default : flag = true; break ;
				}
				continue ;
			}
			if (flag)
			{
				let sub: string[] = item.split(' ', 1);
				sub.push(item.slice(sub[0].length, item.length));
				sub[1] = sub[1].trim();
				if (sub)
					this.parseHead(sub[0], sub[1]);
				continue ;
			}
			let sub: string[] = item.split(' ', 1);
			sub.push(item.trim());
			this.toolset.parseHeading(sub[0], sub[1]);
			this.toolset.parseBody(sub[0], sub[1]);
		}

		// Emphasis
		if (this.blog.value.body)
		{
			let index = '';
			let i = 0;
			for (index in this.blog.value.body)
			{
				i = parseInt(index);
				this.toolset.parseEmphasis(i, '**');
			}
		}
		if (this.toolset.nbody)
			this.blog.value.body = this.toolset.nbody;

		// Bullet Points
		let elem: Body = {type: BodyType.Bullet};
		for (elem of this.blog.value.body!)
		{
			if (elem.data && elem.data[0] == '-')
			{
				elem.type = BodyType.Bullet;
				elem.data = elem.data.slice(1, elem.data.length);
			}
		}
		this.toolset.parseImg(this.blog);
		this.toolset.parseLink(this.blog);
		this.blog.value.id = this.blog.value.title.toLowerCase();
		this.blog.value.id = this.blog.value.id.replaceAll(' ', '-');
		this.blog.value.id = this.blog.value.id.replaceAll(':', '');
	}
}
