<script setup lang="ts">
import { Blog } from '../content/interfaces/InterfaceBlog'
import router from '@/router';
import { ref } from 'vue'

const props = defineProps < {
	blog: Blog
} > ();

let urlChange = 1;
let req = new XMLHttpRequest();

function redir(url: string)
{
	urlChange++;
	router.push(url);
}

function moreThanNotEnd(index: number, items: any[] | undefined)
{
	if (!items)
		return '';
	return items.length > 1 && index != items.length - 1 ? ', ' : '';
}
</script>

<template>
	<v-card class="mx-auto" max-width="400" link @click="redir(`/Blog/${blog.id}`)">
		<v-img v-if="!blog.images" class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover />
		<v-img v-else class="align-end text-white" height="200" :src="blog.images![0]" cover />
	
		<v-card-title style="word-break: break-word">{{ blog.title }}</v-card-title>
	
		<v-card-subtitle v-if="blog.authors" class="pt-4">
			<v-row style="width: fit-content;">
				<v-col style="width: fit-content;">
					<v-icon icon="mdi-account" />
				</v-col>
				<v-col style="width: fit-content;">
					<div v-for="(object, index) in blog.authors" style="display: inline;">
						{{ object }}{{ moreThanNotEnd(index, blog.authors) }}
					</div>
				</v-col>
			</v-row>
		</v-card-subtitle>
	
		<v-card-subtitle v-if="blog.categories" class="pt-4">
			<v-row style="width: fit-content;">
				<v-col style="max-width: fit-content;">
					<v-icon icon="mdi-folder" />
				</v-col>
				<v-col style="max-width: 336px; overflow: hidden;">
					<div v-for="(object, index) in blog.categories" style="display:inline-block; white-space: pre;">
						{{ object }}{{ moreThanNotEnd(index, blog.categories) }}
					</div>
				</v-col>
			</v-row>
		</v-card-subtitle>
	
		<v-card-text class="desc" v-if="blog.description">
			{{ blog.description.substring(0, 200) + (blog.description.length > 200 ? "..." : "") }}
		</v-card-text>
	
		<v-card-actions>
			<v-btn color="orange">
				Share
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<style scoped>
.desc {
	height: 100px;
}
</style>