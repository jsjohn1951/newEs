<script setup lang="ts">
import { ref, watch } from 'vue'
import router from '@/router';
// import { emit } from 'process';

const expand = ref(false);
const search = ref('');
const isMouseOver = ref(false);
const hint = ref('Search Blog or Category');


const emit = defineEmits({
	result: ({ search : string}) => {
		return true;
	}
});

const props = defineProps<{
	mem: string
}>();

watch(search, (newVal, oldVal) => {
	emit('result', search);
	if (search.value != '')
		router.push('/Blog');
	else if (props.mem != '/Blog')
		router.go(-1);
	if (search.value == '' && !isMouseOver.value)
		expand.value = false;
});

function mouseleave()
{
	if (search.value == '')
		expand.value = false;
	isMouseOver.value = false;
}

function mouseOver()
{
	expand.value = true;
	isMouseOver.value = true;
	// hint.value = 'Search Blog or Category';
}
</script>

<template>
	<v-row @mouseover="mouseOver()" @mouseleave="mouseleave()" class="flex-center" :style="`min-height: 60px;`">
			
			<v-btn @click="expand = !expand" icon="mdi-magnify" variant="plain"/>
			<v-expand-x-transition>
				<v-text-field v-if="expand" v-model="search" :label="hint" style="width: 13vw;" variant="underlined"/>
			</v-expand-x-transition>
	
	</v-row>
</template>