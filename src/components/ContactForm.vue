<template>
	<form @submit.prevent="submit()" class="flex flex-col space-y-4">
		<input
			v-model="name"
			class="form-control form-control--large"
			type="text"
			placeholder="Name"
		/>
		<input
			v-model="email"
			class="form-control form-control--large"
			type="email"
			placeholder="Email"
		/>
		<textarea
			v-model="message"
			class="form-control form-control--large"
			placeholder="Message"
		></textarea>
		<button class="btn btn--large btn--primary" type="submit">
			<div v-if="loading" class="btn--loader"></div>
			Send
		</button>
	</form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	data() {
		return {
			name: '',
			email: '',
			message: '',
			loading: false,
		}
	},
	methods: {
		submit(): void {
			this.loading = true
			setTimeout(() => {
				this.loading = false
			}, 5000)
		},
	},
})
</script>
