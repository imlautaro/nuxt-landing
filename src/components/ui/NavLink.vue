<template>
	<InpageLink
		v-if="inpage != undefined"
		class="focus:bg-primary-600 focus:bg-opacity-5 focus:text-primary-600 dark:focus:bg-primary-400 dark:focus:bg-opacity-5 dark:focus:text-primary-400 px-4 py-2 rounded-full"
		:to="to"
	>
		{{ text }}
	</InpageLink>
	<nuxt-link
		v-else
		exact
		exact-active-class="bg-primary-600 bg-opacity-5 text-primary-600 dark:bg-primary-400 dark:bg-opacity-5 dark:text-primary-400"
		class="px-4 py-2 rounded-full"
		:to="to"
	>
		{{ text }}
	</nuxt-link>
</template>

<script>
export default {
	props: {
		text: String,
		to: String,
		inpage: undefined,
	},
}
</script>
