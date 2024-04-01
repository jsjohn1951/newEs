<script setup lang="ts">
import { Body } from '../content/interfaces/InterfaceBlog'

const props = defineProps < {
	item: Body
} > ()

function type(entry: Body) {
	if (entry.bold && entry.italic)
		return 3;
	else if (entry.bold)
		return 2;
	else if (entry.italic)
		return 1;
	return 0;
}
</script>

<template>
	<div v-if="item.data">
		<strong v-if="type(item) == 3">
			<i>
						{{ item.data }}
					</i>
		</strong>
		<strong v-else-if="type(item) == 2">
			{{ item.data }}
		</strong>
		<i v-else-if="type(item) == 1">
					{{ item.data }}
				</i>
		<div v-else>
			{{ item.data }}
		</div>
	</div>
</template>