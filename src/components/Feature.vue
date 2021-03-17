<template>
	<div v-if="alt == undefined" class="flex items-start space-x-4">
		<div
			class="bg-gradient-to-br from-primary to-secondary p-4 rounded-md shadow-md text-white"
		>
			<svg
				class="w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
				/>
			</svg>
		</div>
		<div class="flex flex-col space-y-2">
			<span class="font-semibold text-xl">{{ title }}</span>
			<p class="text-gray-600">
				{{ content }}
			</p>
		</div>
	</div>
	<div v-else class="bg-gray-100 relative rounded-xl text-center">
		<div
			class="absolute bg-gradient-to-br from-primary to-secondary left-1/2 mx-auto  shadow-md top-0 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-md text-white"
		>
			<svg
				class="w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
				/>
			</svg>
		</div>
		<div class="flex flex-col mt-7 p-8 pt-14 space-y-2">
			<span class="font-semibold text-xl">{{ title }}</span>
			<p class="text-gray-600">
				{{ content }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		title: {
			type: String,
			default: 'Lorem ipsum',
		},
		content: {
			type: String,
			default:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At veniam hic ab veritatis fuga non delectus. Delectus, molestiae! Debitis, rerum.',
		},
		alt: {
			type: undefined,
			default: undefined,
		},
	},
})
</script>
