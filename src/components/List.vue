<script setup lang="ts">
import { Body, BodyType } from '../content/interfaces/InterfaceBlog'

const props = defineProps < {
	listBody: Body,
	indent: number
} > ();
</script>

<template>
	<br>
	<ul v-if="listBody.type == BodyType.Bullet">
		<li :style="`margin-left: ${indent}px;`">{{ listBody.data }}</li>
		<List v-if="listBody.list" :listBody="listBody.list" :indent="indent + 20"/>
	</ul>
	<ol v-else-if="listBody.type == BodyType.Orderd">
		<li :style="`margin-left: ${indent}px;`">{{ listBody.data }}</li>
		<List v-if="listBody.list" :listBody="listBody.list" :indent="indent + 20"/>
	</ol>
</template>