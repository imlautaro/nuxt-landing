<template>
	<transition name="menu">
		<div
			v-if="open"
			class="bg-white dark:bg-gray-800 z-20 w-3/4 md:w-2/4 lg:w-1/4 flex flex-col right-0 h-screen fixed shadow-2xl top-0"
		>
			<div class="flex items-center justify-between px-8 py-8">
				<span class="text-xl font-semibold">Menu</span>
				<button class="icon-btn" @click="$emit('close')">
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
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<InpageLink
				@navigate="$emit('close')"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="who"
				>Who we are?</InpageLink
			>
			<InpageLink
				@navigate="$emit('close')"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="what"
				>What we do?</InpageLink
			>
			<InpageLink
				@navigate="$emit('close')"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="products"
				>Our products</InpageLink
			>
			<InpageLink
				@navigate="$emit('close')"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="where"
				>Where we are?</InpageLink
			>
			<InpageLink
				@navigate="$emit('close')"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="contact"
				>Contact</InpageLink
			>
		</div>
	</transition>
</template>

<style lang="postcss" scoped>
.menu-enter-active,
.menu-leave-active {
	@apply duration-300 transform translate-x-0;
}
.menu-enter,
.menu-leave-to {
	@apply transform translate-x-full;
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		open: {
			type: Boolean,
			default: false,
		},
	},
	model: {
		prop: 'open',
		event: 'close',
	},
})
</script>
