<template>
	<header
		class="bg-white duration-300 sticky top-0 z-10"
		:class="{ sheet: elevate }"
		id="header"
	>
		<nav role="navigation">
			<div
				class="container max-w-screen-lg flex items-center justify-between space-x-4 mx-auto p-8"
			>
				<Imagotype />
				<div class="md:flex text-gray-600 hidden text-sm">
					<InpageLink
						class="focus:bg-primary focus:bg-opacity-5 focus:text-primary px-4 py-2 rounded-full"
						to="who"
						>Who we are?</InpageLink
					>
					<InpageLink
						class="focus:bg-primary focus:bg-opacity-5 focus:text-primary px-4 py-2 rounded-full"
						to="what"
						>What we do?</InpageLink
					>
					<InpageLink
						class="focus:bg-primary focus:bg-opacity-5 focus:text-primary px-4 py-2 rounded-full"
						to="products"
						>Our products</InpageLink
					>
					<InpageLink
						class="focus:bg-primary focus:bg-opacity-5 focus:text-primary px-4 py-2 rounded-full"
						to="where"
						>Where we are?</InpageLink
					>
					<InpageLink
						class="focus:bg-primary focus:bg-opacity-5 focus:text-primary px-4 py-2 rounded-full"
						to="contact"
						>Contact</InpageLink
					>
				</div>
				<button class="icon-btn md:hidden" @click="$emit('open-menu')">
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
		document.addEventListener('scroll', (event) => {
			this.elevate = event.target.scrollingElement.scrollTop > 0
		})
	},
}
</script>
