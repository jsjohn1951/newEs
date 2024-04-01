<script setup lang="ts">
import router from '@/router';
import { useTheme } from 'vuetify'
import { ref, watch } from 'vue'

const theme = ref(useTheme());
const logo = ref('/em-logo-darkmode.webp');
const widthQuery = window.matchMedia('(min-width: 900px)')
const isLargeScreen = ref(widthQuery.matches)

widthQuery.addEventListener('change', () => {
	isLargeScreen.value = widthQuery.matches;
});

if (theme.value.global.name == 'light')
{
	logo.value = '/em-logo-lightmode.webp'
}

function redir(url: string)
{
	router.push(url)
}

function flexDir()
{
	if (!isLargeScreen.value)
		return 'flex-direction: column;';
	return 'flex-direction: row;';
}
</script>

<template>
	<v-footer>
	<div class="flex-column flex-center" style="min-height: 20vh; width: 100%; padding: 12px; gap: 25px;">
		<div :style="'display: flex; align-items: center; justify-content: space-between; width: 100%;' + flexDir()">
				<button @click="redir('/')"><img :src="logo" style="width: 20vw; min-width: 300px;"></button>
				<div class="flex-center">
					<v-btn @click="redir('/About')" variant="plain">About</v-btn>
					<v-btn @click="redir('/Contact')" variant="plain">Contact</v-btn>
					<v-btn @click="redir('/Policy')" variant="plain">Privacy Policy</v-btn>
				</div>
				<div class="flex-center" style="width: 20vw; min-width: 300px;">
					<v-btn icon="mdi-twitter"></v-btn>
					<v-btn icon="mdi-youtube"></v-btn>
					<v-btn icon="mdi-instagram"></v-btn>
					<v-btn icon="mdi-facebook"></v-btn>
				</div>
			</div>
			<div style="width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 25px;">
				<div style="width: 100%; height: 1px; background-color: grey; opacity: 0.6;"/>
				<p>Website by Willem J. Smith</p>
			</div>
	</div>
	</v-footer>
</template>

<style scoped>
</style>