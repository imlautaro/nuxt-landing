<template>
	<div>
		<ui-scroll-indicator />
		<layout-navigation @open-menu="menuOpen = true" />
		<div class="flex">
			<nuxt />
			<ui-menu v-model="menuOpen" />
		</div>
		<ui-go-to-top />
		<layout-footer />
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
