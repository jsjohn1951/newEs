<script setup lang="ts">
import { ref } from 'vue'
import Post from '../components/Post.vue'
import about from '../content/about/index'
import subForm from '../components/Subscribe.vue'

const articles = ref(about());

const widthQuery = window.matchMedia('(min-width: 900px)');
const isLargeScreen = ref(widthQuery.matches);
</script>

<template>
	<div class="app-container flex-center flex-column" style="padding-bottom: 97px; padding-top: 97px;">
		<div style="max-width: 900px; display: inline-block;">
		<!-- Image -->
		<div v-for="(item, index) in articles" class="flex-center flex-column">
			<div v-if="item().value.images" v-for="(image, i) in item().value.images">
				<br v-for="i in 2"/>
				<img :src="image" style="width: 100%;">
				<br v-for="i in 2"/>
			</div>
			<Post :blog="item().value"/>
		</div>
		<!-- <section id="subscribe" class="section-3" :style="(isLargeScreen ? `width: 80vw` : ``)"> -->
			<div style="width: 100%; padding-top: 97px;">
				<subForm :is-large-screen="isLargeScreen"/>
			</div>
		</div>
		<!-- </section> -->
	</div>
</template>