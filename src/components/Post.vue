<script setup lang="ts">
import { BlogN, BodyType } from '../content/interfaces/InterfaceBlog'
import list from './List.vue'
import Heading from './Heading.vue'
import { ref } from 'vue'
import { marked } from 'marked';

const props = defineProps < {
	blog: BlogN
} > ();

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
	<div class="app-container flex-center flex-column" style="padding-bottom: 97px;">
	
		<div style="max-width: 900px;">
		<v-container>
			<!-- Title -->
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

		<!-- Content -->
		<v-row>
			<v-col>
				<div v-if="blog.body" v-html="marked(blog.body)" />
			</v-col>
		</v-row>
		</v-container>
		</div>
	
	</div>
</template>

<style>

img {
	max-width: 100%;
	max-height: 900px;
}

h2 {
	padding-top: 18px;
	padding-bottom: 4px;
}

p {
	padding-top: 0px;
	padding-bottom: 18px;
}

ol {
	padding-bottom: 18px;
	padding-left: 16px;
}

ul {
	padding-bottom: 18px;
	padding-left: 16px;
}

</style>