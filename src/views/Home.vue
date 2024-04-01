<script setup lang="ts">
import hero from '../components/Hero.vue'
import subForm from '../components/Subscribe.vue'
import router from '@/router';
import { homeStore, homeEntry } from '../content/home/Home'
import { ref } from 'vue'

const widthQuery = window.matchMedia('(min-width: 900px)')
const isLargeScreen = ref(widthQuery.matches)

function redir(url: string)
{
	router.push(url)
}

function renderCol(index: number)
{
	if (index % 2 != 0)
		return (true);
	return (false);
}

function hasButtons(store: homeEntry)
{
	if (store.button != undefined)
		return ({bool: true, btn: store.button});
	return ({bool: false, btn: undefined});
}

function largeOutput ()
{
	if (isLargeScreen.value)
		return ('2.5');
	return ('2.0');
}
</script>

<template>
  <v-container class="app-container flex-center flex-column">
	<section class="section-1">
		<hero :is-large-screen="isLargeScreen"/>
	</section>
	<section class="section-2" :style="(isLargeScreen ? `width: 80vw` : ``)">

		<div v-for="(item, index) in homeStore">
			<v-row v-if="!renderCol(index)">
				<v-col v-if="homeStore[index].image" class="flex-center flex-column" style="padding: 20px;">
					<img :src="homeStore[index].image" :style="`width: ${(isLargeScreen ? `440px` : `200px`)}`">
				</v-col>
				<v-col class="flex-center flex-column">
					<div v-if="homeStore[index].title" class="custom-text-h3 font-weight-bold" :style="`font-size: ${ largeOutput() }rem !important;`">
						{{ homeStore[index].title }}
					</div>
					<br><br>
					<div>
						<div v-if="homeStore[index].data" class="text-body-1" v-html="homeStore[index].data"/>
						<div v-if="hasButtons(homeStore[index]).bool" style="width: 100%;">
							<br>
							<v-row>
								<v-col v-for="(item, i) in hasButtons(homeStore[index]).btn!">
									<v-btn v-if="item.icon" @click="redir(item.link)" :append-icon="item.icon">
										{{ item.title }}
									</v-btn>
									<v-btn v-else @click="redir(item.link)">
										{{ item.title }}
									</v-btn>
								</v-col>
							</v-row>
						</div>
					</div>
				</v-col>
			</v-row>

			<v-row v-else>
				<v-col class="flex-center flex-column" :style="(isLargeScreen ? `width: 80vw` : ``)">
					<div v-if="homeStore[index].title" class="custom-text-h3 font-weight-bold" :style="`font-size: ${ largeOutput() }rem !important;`">
						{{ homeStore[index].title }}
					</div>
					<br><br>
					<div>
						<div v-if="homeStore[index].data" class="text-body-1" v-html="homeStore[index].data"/>
						<div v-if="hasButtons(homeStore[index]).bool" style="width: 100%;">
							<br>
							<v-row>
								<v-col v-for="(item, i) in hasButtons(homeStore[index]).btn!">
									<v-btn v-if="item.icon" @click="redir(item.link)" :append-icon="item.icon">
										{{ item.title }}
									</v-btn>
									<v-btn v-else @click="redir(item.link)">
										{{ item.title }}
									</v-btn>
								</v-col>
							</v-row>
						</div>
					</div>
				</v-col>
				<v-col v-if="homeStore[index].image" class="flex-center flex-column" :style="(isLargeScreen ? `width: 80vw` : ``)">
					<img :src="homeStore[index].image" :style="`width: ${(isLargeScreen ? `440px` : `200px`)}`">
				</v-col>
			</v-row>
		</div>

	</section>
	<section id="subscribe" class="section-3" :style="(isLargeScreen ? `width: 80vw` : ``)">
		<subForm :is-large-screen="isLargeScreen"/>
	</section>
	</v-container>
</template>

<style scoped>
.section-1 {
	width: 100vw;
	min-height: 100vh;
}
.section-2, .section-3 {
	width: 100vw;
	height: fit-content;
	padding: 50px;
}
</style>