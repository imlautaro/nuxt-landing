<template>
	<transition name="scroll-to-top">
		<button
			@click="scrollToTop()"
			aria-label="Ir arriba"
			v-if="show"
			class="btn btn--primary transform fixed bottom-8 right-8 p-4 rounded-full"
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
					d="M5 10l7-7m0 0l7 7m-7-7v18"
				/>
			</svg>
		</button>
	</transition>
</template>

<style lang="postcss">
.scroll-to-top-enter-active,
.scroll-to-top-leave-active {
	@apply duration-200 transform translate-y-0;
}
.scroll-to-top-enter,
.scroll-to-top-leave-to {
	@apply opacity-0 translate-y-full;
}
</style>

<script>
export default {
	data() {
		return {
			show: false,
		}
	},
	mounted() {
		document.addEventListener('scroll', (event) => {
			this.show = event.target.scrollingElement.scrollTop > 128
		})
	},
	methods: {
		scrollToTop() {
			document.scrollingElement.scrollTop = 0
		},
	},
}
</script>
