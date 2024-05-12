<script setup lang="ts">
import { ref, onMounted } from 'vue'
import router from '@/router';

const props = defineProps<{
	isLargeScreen: boolean
}>()

const txt = ref('<Development/>');

const slides = ref([
	'/hero/16.png',
	'/hero/25.png',
	'/hero/26.png'
		])

function redir(url: string)
{
	router.push(url)
}

function largeOutput ()
{
	if (props.isLargeScreen)
		return ('2.5');
	return ('1.5');
}

const data = {
	typeValue: ref(''),
    typeStatus: false,
    typeArray: [
		'<Content/>',
		'<Marketing/>',
		'<Strategies/>'
	],
    typingSpeed: 100,
    erasingSpeed: 50,
    newTextDelay: 2000,
    typeArrayIndex: 0,
    charIndex: 0
}

function typeText() {
        if(data.charIndex < data.typeArray[data.typeArrayIndex].length) {
          if(!data.typeStatus)
            data.typeStatus = true;

          data.typeValue.value += data.typeArray[data.typeArrayIndex].charAt(data.charIndex);
          data.charIndex += 1;

          setTimeout(typeText, data.typingSpeed);
        }
        else {
          data.typeStatus = false;
          setTimeout(eraseText, data.newTextDelay);
        }
}

function eraseText() {
        if(data.charIndex > 0) {
          if(!data.typeStatus)
            data.typeStatus = true;

          data.typeValue.value = data.typeArray[data.typeArrayIndex].substring(0, data.charIndex - 1);
          data.charIndex -= 1;
          setTimeout(eraseText, data.erasingSpeed);
        }
        else {
          data.typeStatus = false;
          data.typeArrayIndex += 1;
          if(data.typeArrayIndex >= data.typeArray.length)
            data.typeArrayIndex = 0;

          setTimeout(typeText, data.typingSpeed + 1000);
        }
}

onMounted(() => {
	setTimeout(typeText, data.newTextDelay + 200);
})
</script>

<template>
  <div class="hero-container">
	<v-carousel
    cycle
    hide-delimiters
    :show-arrows="false"
    style="height: 100vh;"
  >
  <v-carousel-item
  v-for="(slide, i) in slides"
  :key="i"
  cover
  >
  <v-parallax :src="`/hero/25.png`">
  </v-parallax>
</v-carousel-item>
<div class="flex-column fill-height flex-center" style="padding: 100px; color: white; position: absolute; width: 100vw; height: 100vh;">
	<div class="flex-center flex-column" style="width: 100%; gap: 20px;">
	<div class="custom-text-h2 font-weight-bold" :style="`font-size: ${ largeOutput() }rem !important; width: 40vw; text-align: center;`">
		Create Compelling Digital
		<!-- Authentic Frontend -->
	</div>
	<div class="flex-center" :style="`height: ${ largeOutput() }rem !important;`">

		<h2 class="custom-text-h2 font-weight-bold typingEffect" :style="`font-size: ${ largeOutput() }rem !important;`">
			{{ data.typeValue.value }}
		</h2>

	</div>
		<div class="text-subtitle-1 font-weight-light">
			Build your brand. Tell your story
		</div>
	<v-btn @click="redir('/Services')" append-icon="mdi-arrow-right">
		See Services
	</v-btn>
	</div>
</div>
  </v-carousel>
</div>
</template>

<style scoped>
.typingEffect {
    width: 100%;
    overflow: hidden;
    border-right: 2px solid white;
    font-size: 16px;
    white-space: nowrap;
	  animation: blink 1s infinite;
  }

.hero-container {
  height: fit-content;
}

@keyframes blink {
  0%, 45% {
    border-color: transparent;
  }
  50%, 100% {
    border-color: white;
  }
}
</style>