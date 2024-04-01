<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
	isLargeScreen: boolean
}>()

const valid = ref(false)
const email = ref('')
const emailRules = ref(
	[
		(value: string) => {
        if (value) return true

        return 'E-mail is required.'
    },
    	(value: string) => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail must be valid.'
    },
	]
)

function largeOutput ()
{
	if (props.isLargeScreen)
		return ('2.5');
	return ('2.0');
}
</script>

<template>
	<div class="custom-text-h3 font-weight-bold" :style="`font-size: ${ largeOutput() }rem !important;`">
		Subscribe to our mailing list
	</div>
	<div class="custom-text-body-1">
		Working Mail
	</div>
	<div class="custom-text-body-1" style="color: pink;">*</div>
	<br>
	<v-form v-model="valid">
		<v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          />
		  <v-btn type="submit" class="mt-2">Subscribe</v-btn>
	</v-form>
</template>

<style scoped>
.custom-text-body-1 {
	display: inline;
}
</style>