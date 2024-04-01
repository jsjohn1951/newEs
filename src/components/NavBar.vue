<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import { useTheme } from 'vuetify'
import search from './Search.vue'

const emit = defineEmits({
	result: ({ search : string}) => {
		return true;
	}
});

const theme = useTheme();
const menuColor = ref('color: white;');
const bgColor = ref('background-color: black;');
const logo = ref('/em-logo-darkmode.webp')
const drawer = ref(false)
const widthQuery = window.matchMedia('(min-width: 1260px)')
const isLargeScreen = ref(widthQuery.matches);
const mem = ref('/')

widthQuery.addEventListener('change', () => {
	isLargeScreen.value = widthQuery.matches;
});

if (theme.global.name.value == 'light')
{
	menuColor.value = 'color: black;';
	bgColor.value = 'background-color: white;'
	logo.value = '/em-logo-lightmode.webp'
}

function toggleTheme ()
{
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
	menuColor.value = theme.global.current.value.dark ? 'color: white;' : 'color: black;'
	bgColor.value = theme.global.current.value.dark ? 'background-color: black;' : 'background-color: white;'
	logo.value = theme.global.current.value.dark ? '/em-logo-darkmode.webp' : '/em-logo-lightmode.webp'
}

function redir(url: string)
{
	mem.value = url;
	router.push(url)
}

function searchRes(event: any)
{
	emit("result", ref(event.value));
}
</script>

<template>
	<div id="navbar" class="navbar flex-row flex-between" :style="bgColor + 'padding: 8px 30px 8px 30px; z-index: 1090; height: fit-content;'">
		<button @click="redir('/')">
			<img :src="logo" style="max-width: 300px; width: 20vw; min-width: 300px;">
		</button>
		<div v-if="isLargeScreen" class="items flex-row flex-end" :style="menuColor">
			<div class="flex-between" style="width: 45%; max-width: 800px">
				<button @click="redir('/')"><h4>Home</h4></button>
				<button @click="redir('/About')"><h4>About</h4></button>
				<button @click="redir('/Services')"><h4>Services</h4></button>
				<button @click="redir('/Blog')"><h4>Blog</h4></button>
				<button @click="redir('/Contact')"><h4>Contact</h4></button>
			</div>

			<v-divider
     			class="ms-3"
      			inset
      			vertical
    			/>

				
			<div class="flex-row flex-center" style="min-width: 250px; gap: 36px;">
				<search :mem="mem" class="flex-start" style="max-width: 100%;" @result="searchRes"/>
				<v-switch :label="theme.global.current.value.dark ? 'Dark' : 'Light'" @click="toggleTheme" style="min-width: 86.50px;"/>
				<v-btn @click="redir('/Contact')">
					Get A Quote
				</v-btn>
			</div>
		</div>
		<div v-else>
			<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"/>
		</div>
	</div>
	<v-card v-if="drawer" class="flex-column flex-center" style="height: 100vh; width: 100vw; position: fixed; z-index: 1018; top: 0; left: 0;">
		<div class="flex-column flex-center" style="width: 100%; gap: 20px;">
			<button @click="redir('/'); drawer = false;"><h3>Home</h3></button>
			<button @click="redir('/About'); drawer = false;"><h3>About</h3></button>
			<button @click="redir('/Services'); drawer = false;"><h3>Services</h3></button>
			<button @click="redir('/Blog'); drawer = false;"><h3>Blog</h3></button>
			<button @click="redir('/Contact'); drawer = false;"><h3>Contact</h3></button>
			<v-switch :label="theme.global.current.value.dark ? 'dark' : 'light'" @click="toggleTheme"/>
			<v-btn @click="redir('/Contact')">
				Get A Quote
			</v-btn>
		</div>
	</v-card>
</template>

<style scoped>
.navbar {
	position: fixed;
	width: 100vw;
	height: 75px;
	padding: 10px 50px 10px 50px;
	gap: 30px;
	top: 0;
	z-index: 1008;
}

.items {
	display: flex;
	gap: 30px;
	width: 100%;
}

.v-input--horizontal {
	grid-template-areas: none;
}
</style>