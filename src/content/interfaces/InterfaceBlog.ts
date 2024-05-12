export enum BodyType
{
	// new
	Heading1 = 'HEADING1',
	Heading2 = 'HEADING2',
	Heading3 = 'HEADING3',
	Heading4 = 'HEADING4',

	// old
	Title = 'TITLE',
	Text = 'TEXT',
	Bullet = 'BULLET-POINT',
	Orderd = 'ORDERED-POINTS',
	Subtitle = 'SUBTITLE',
	Link = 'LINK',
	Image = 'IMAGE',
	LineBreak = 'LINEBREAK'
}

/** @brief: Body interface defines the structure / Attributes for a body element */
export interface Body
{
	type: BodyType,
	link?: string,
	data?: string,
	list?: Body,
	bold?: boolean,
	italic?: boolean
}

export interface Blog
{
	id: string,				// post id used for url
	date: string,			// Date and time created
	title: string,			// post title
	draft?: boolean,			// is it a draft?
	meta_title?: string,	// post meta title
	subtitle?: string,		// post subtitle
	description?: string,	// post description
	authors?: string[],		// post author/authors
	body?: Body[],			// body of the post
	images?: string[],		// images queue
	tags?: string[],		// tags queue
	categories?: string[]	// categories queue
	head?: boolean
}

export interface BlogN
{
	id: string,				// post id used for url
	date: string,			// Date and time created
	title: string,			// post title
	draft?: boolean,			// is it a draft?
	meta_title?: string,	// post meta title
	subtitle?: string,		// post subtitle
	description?: string,	// post description
	authors?: string[],		// post author/authors
	body?: string,			// body of the post
	images?: string[],		// images queue
	tags?: string[],		// tags queue
	categories?: string[]	// categories queue
	head?: boolean
}
