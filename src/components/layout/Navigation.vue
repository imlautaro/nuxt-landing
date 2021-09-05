<template>
	<header
		class="duration-300 sticky top-0 z-10"
		:class="elevate ? 'sheet' : 'bg-gray-100 dark:bg-gray-900'"
		id="header"
	>
		<nav role="navigation">
			<div
				class="container max-w-screen-lg flex items-center justify-between space-x-4 mx-auto p-4 md:p-8"
			>
				<brand-imagotype />
				<div
					class="md:flex text-gray-600 dark:text-gray-400 hidden text-sm"
				>
					<ui-nav-link inpage text="Who we are?" to="who" />
					<ui-nav-link inpage text="What we do?" to="what" />
					<ui-nav-link inpage text="Our products" to="products" />
					<ui-nav-link inpage text="Where we are?" to="where" />
					<ui-nav-link inpage text="Contact" to="contact" />
				</div>
				<!-- TODO: Translate aria-label if necessary -->
				<button
					aria-label="Open or close navigation menu"
					class="icon-btn md:hidden"
					@click="$emit('open-menu')"
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
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			elevate: false,
		}
	},
	mounted() {
		document.addEventListener('scroll', event => {
			this.elevate = event.target.scrollingElement.scrollTop > 0
		})
	},
}
</script>
