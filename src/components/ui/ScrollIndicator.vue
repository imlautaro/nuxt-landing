<template>
	<div
		class="w-screen h-0.5 bg-gray-200 dark:bg-gray-700 fixed top-0 left-0 z-30"
	>
		<div
			class="bg-primary-600 dark:bg-primary-400 h-full w-0"
			ref="progress"
		></div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	mounted() {
		document.onscroll = event => {
			if (document.scrollingElement) {
				const progress = this.$refs['progress'] as HTMLDivElement
				const value =
					(100 /
						(document.scrollingElement.scrollHeight -
							document.scrollingElement.clientHeight)) *
					document.scrollingElement.scrollTop
				progress.style.width = `${value}%`
			}
		}
	},
})
</script>
