<template>
	<div class="text-gray-800">
		<ScrollIndicator />
		<Navigation @open-menu="menuOpen = true" />
		<div class="flex">
			<Nuxt />
			<Menu v-model="menuOpen" />
		</div>
		<GoToTop />
		<Footer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	data() {
		return {
			menuOpen: false,
		}
	},
})
</script>
