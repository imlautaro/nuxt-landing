<template>
	<div class="container flex flex-col max-w-screen-md space-y-4 text-center">
		<div class="flex flex-col space-y-2">
			<span
				class="font-semibold text-primary-600 dark:text-primary-400 uppercase"
				v-if="tag"
				>{{ tag }}</span
			>
			<h2
				class="font-bold"
				:class="
					large != undefined
						? 'text-4xl md:text-5xl'
						: 'text-3xl md:text-4xl'
				"
				v-if="title"
			>
				{{ title }}
			</h2>
		</div>
		<p
			class="leading-8 text-gray-600 dark:text-gray-400"
			:class="
				large != undefined
					? 'text-lg md:text-xl'
					: 'text-base md:text-lg'
			"
			v-if="paragraph"
		>
			{{ paragraph }}
		</p>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		tag: String,
		title: String,
		paragraph: String,
		large: {
			type: undefined,
			default: undefined,
		},
	},
})
</script>
