<script setup lang="ts">
import navbar from './components/NavBar.vue'
import customfooter from './components/Footer.vue'
import { useTheme } from 'vuetify'
import { watch, ref } from 'vue'
import { useAppStore } from '@/store/app'

const theme = useTheme();
let search = useAppStore();
theme.global.name.value = 'dark';

watch(theme.global.name, (newVal, oldVal)=>{
	console.log('new values detected!');
})

function searchRes(event: any)
{
	search.$patch({ search: event.value });
}
</script>

<template>
  <v-app>
    <v-main>
		<router-view v-slot="{Component}" :key="search.$state.search.length">
			<transition name="slide" mode="out-in">
				<component :is="Component" :key="$route.path"></component>
			</transition>
		</router-view>
		<navbar @result="searchRes"/>
		<customfooter :key="theme.global.name.value"/>
    </v-main>
  </v-app>
</template>

<style>
@font-face {
	font-family: Now-Black;
	src: url('./assets/now-cufonfonts/Now-Black.otf');
}
@font-face {
	font-family: Now-Bold;
	src: url('./assets/now-cufonfonts/Now-Bold.otf');
}
@font-face {
	font-family: Now-Light;
	src: url('./assets/now-cufonfonts/Now-Light.otf');
}
@font-face {
	font-family: Now-Medium;
	src: url('./assets/now-cufonfonts/Now-Medium.otf');
}
@font-face {
	font-family: Now-Regular;
	src: url('./assets/now-cufonfonts/Now-Regular.otf');
}
@font-face {
	font-family: Now-Thin;
	src: url('./assets/now-cufonfonts/Now-Thin.otf');
}
.custom-text-h2 {
	font-family: Now-Bold;
	font-size: 3.45rem !important;
	text-transform: uppercase;
}
.custom-text-h3 {
	font-family: Now-Regular;
	font-size: 2.5rem !important;
	text-transform: uppercase;
}
.custom-text-body-1 {
	font-family: Now-Light;
	font-size: 1rem !important;
}

.app-container {
	height: fit-content;
	min-height: 100vh;
	width: 100vw;
}

.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}

.flex-column {
	display: flex;
	flex-direction: column;
}

.flex-row {
	display: flex;
	flex-direction: row;
}

.flex-between {
	display: flex;
	justify-content: space-between;
}

.flex-start {
	display: flex;
	justify-content: start;
	align-items: center;
}

.flex-end {
	display: flex;
	justify-content: end;
	align-items: center;
}

/* transitions */
.slide-enter-active,
.slide-leave-active {
	transition: opacity 1s, transform 1s;
}
.slide-enter-from
{
	opacity: 0;
	transform: translateX(30%);
}

.slide-leave-to {
	opacity: 0;
	transform: translateX(-30%);
}
</style>
