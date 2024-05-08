<script setup lang="ts">
import { Blog, BodyType } from '../content/interfaces/InterfaceBlog'
import list from './List.vue'
import Heading from './Heading.vue'
import { parsEmBul } from '../composables/parseMd'
import { ref } from 'vue'

const props = defineProps < {
	blog: Blog
} > ();

new parsEmBul(ref(props.blog));

function moreThanNotEnd(index: number, items: any[] | undefined)
{
	if (!items)
		return '';
	return items.length > 1 && index != items.length - 1 ? ', ' : '';
}

const ndate = (new Date(props.blog.date).toString()).split(' ', 4);
const  date = `${ndate[0]}, ${ndate[1]} ${ndate[2]}, ${ndate[3]}`
</script>

<template>
	<v-container class="flex-center flex-column" style="max-width: 900px; display: inline-block;">
		<!-- Titles -->
		<h1>
			{{ blog.title }}
		</h1>

		<!-- Author / categories / time -->
		<v-row>
			<v-col v-if="blog.authors" style="width: fit-content; flex-grow: 0;">
					<v-icon icon="mdi-account" />
				</v-col>
				<v-col v-if="blog.authors" style="width: fit-content; flex-grow: 0.5;">
					<div v-for="(object, index) in blog.authors" style="display: inline; ">
						{{ object }}{{ moreThanNotEnd(index, blog.authors) }}
					</div>
				</v-col>
				<v-col v-if="blog.categories" style="width: fit-content; flex-grow: 0;">
					<v-icon icon="mdi-folder" />
				</v-col>
				<v-col v-if="blog.categories" style="width: fit-content;">
					<div v-for="(object, index) in blog.categories" style="display: inline;">
						{{ object }}{{ moreThanNotEnd(index, blog.categories) }}
					</div>
				</v-col>
				<v-col v-if="blog.date" style="width: fit-content; flex-grow: 0;">
					<v-icon icon="mdi-clock-time-eight" />
				</v-col>
				<v-col v-if="blog.date" style="width: fit-content;">
					<time :datetime="blog.date">{{ date }}</time>
				</v-col>
		</v-row>

		<ul>
		<div v-if="blog.body" v-for="(item, index) in blog.body" style="width: fit-content; display: inline;">
		<!-- Titles -->
		<h1 v-if="item.type == BodyType.Title">
			<div v-if="item.data">
				{{ item.data }}
			</div>
		</h1>

		<h2 v-if="item.type == BodyType.Heading2">
			<Heading :item="item"/>
		</h2>

		<h3 v-if="item.type == BodyType.Heading3 && item.data">
			<Heading :item="item"/>
		</h3>

		<!-- Subtitles -->
		<!-- <h2 v-if="item.type == BodyType.Subtitle">
			<div v-if="item.data">
				{{ item.data }}
			</div>
		</h2> -->

		<!-- Paragraphs -->
		<p v-if="(item.type == BodyType.Text || item.type == BodyType.Link) && item.data" style="width: fit-content; display: inline;">
			<a v-if="item.type == BodyType.Link && item.link" :href="item.link" style="width: fit-content; display: inline;">
				{{ item.data }}
			</a>
			<div v-else style="width: fit-content; display: inline;">
				{{ item.data }}
			</div>
		</p>

		<!-- Line Break -->
		<br v-if="item.type == BodyType.LineBreak"/>

		<!-- Image -->
		<div v-if="item.type == BodyType.Image && item.link">
			<br v-for="i in 2"/>
			<img :src="item.link" style="width: 100%;">
			<br v-for="i in 2"/>
		</div>

		<li v-if="item.type == BodyType.Bullet && item.data" style="margin: 0 5px 0 20px;">
				{{ item.data }}
		</li>
		<ol v-else-if="item.type == BodyType.Orderd" style="margin-left: 20px;">
			<b v-if="item.bold">
				{{ item.data }}
			</b>
			<p v-else>
				{{ item.data }}
			</p>
		</ol>

		<!-- Recursive list -->
		<!-- <list v-if="item.list" :list-body="item.list" :indent="40"/> -->

		</div>
		</ul>
	</v-container>
</template>