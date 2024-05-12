<script setup lang="ts">
import router from '@/router';
import blogs from '../content/blog/index'
import { ref, watch } from 'vue'
import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import { useAppStore } from '@/store/app';

let params = router.currentRoute.value.params.ArticleName;
const articles = ref(blogs().filter((post) => {
	if (post().value.draft)
		return false;
	return true;
}));

articles.value.sort((a, b) => (new Date(a().value.date) > new Date(b().value.date) ? -1 : 1))
let blog = articles.value.find(i => i().value.id === params);
const page = ref(1);
const search = useAppStore();

if (search.$state.search.length >= 1)
	articles.value = articles.value.filter(
						(post) => {
							let title1 = post().value.title.toLowerCase();
							let title2 = search.$state.search.toLowerCase();
							if (title1.includes(title2))
								return true;
							return false;
						}
					);

watch(router.currentRoute, (newVal, oldVal) =>
{
	params = router.currentRoute.value.params.ArticleName;
	blog = articles.value.find(i => i().value.id === params);
});

if (params && !blog)
	router.push('/NotFound');

function redir(url: string)
{
	router.push(url);
}

function next(event: number)
{
	page.value = event;
}

function calcSlice()
{
	return (
			articles.value.slice(
				((8 * page.value) - 8),
				(8 * page.value)
			)
		);
}

function calcPagination()
{
	return (
			Math.floor ( (!(articles.value.length % 8) ?
				articles.value.length - 1 :
				articles.value.length) / 8 ) + 1
		);
}

</script>

<template>
	<div class="flex-center flex-column" style="padding-top: 97px;">
		<v-breadcrumbs v-if="!blog" :items="['Blog']"/>
		<v-breadcrumbs v-else :items="['Blog', blog().value.id]"/>
	</div>
	<div class="app-container flex-center flex-column" style="padding-bottom: 97px;">
	
		<div v-if="!params" style="max-width: 900px;">
		<v-container :key="articles.values.length">
			<v-row>
				<v-col v-for="(item, index) in calcSlice()">
					<Posts :blog="item().value"/>
				</v-col>
			</v-row>
		</v-container>
		</div>
		<Post v-else-if="blog" :blog="blog().value" />


		<v-container v-if="!params" style="max-width: 900px;">
			<v-pagination :length="calcPagination()" @update:modelValue="next"/>
		</v-container>
	
	</div>
</template>

<!-- <style scoped>

element.style {
    max-width: 300px;
}
</style> -->
