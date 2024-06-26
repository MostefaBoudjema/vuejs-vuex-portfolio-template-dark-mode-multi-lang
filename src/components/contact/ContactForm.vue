<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
				{{ $t('Contact Form') }}
			</p>
			<form @submit.prevent="submitForm" class="font-general-regular space-y-7">
				<FormInput v-model="fullName" :label="$t('Full Name')" inputIdentifier="fullName" />
				<FormInput v-model="email" :label="$t('Email')" inputIdentifier="email" inputType="email" />
				<FormInput v-model="subject" :label="$t('Subject')" inputIdentifier="subject" />
				<FormTextarea v-model="message" :label="$t('Message')" textareaIdentifier="message" />

				<div>
					<Button :title="$t('Send Message')"
						class="px-4 py-2.5 text-white tracking-wider bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 rounded-lg duration-500"
						type="submit" aria-label="Send Message" />
				</div>
			</form>
		</div>
	</div>
</template>
  
<script>
import Button from '@/components/reusable/Button.vue';
import FormInput from '@/components/reusable/FormInput.vue';
import FormTextarea from '@/components/reusable/FormTextarea.vue';

export default {
	components: { Button, FormInput, FormTextarea },
	data() {
		return {
			fullName: '',
			email: '',
			subject: '',
			message: '',
			isSubmitting: false,
			submissionError: null,
			submissionSuccess: false,
		};
	},
	methods: {
		async submitForm() {
			this.isSubmitting=true;
			this.submissionError=null;
			this.submissionSuccess=false;

			try {
				const response=await fetch('/send-email', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: this.fullName,
						email: this.email,
						subject: this.subject,
						message: this.message,
					}),
				});

				if (response.ok) {
					this.submissionSuccess=true;
				} else {
					const errorData=await response.json();
					this.submissionError=errorData.message;
				}
			} catch (error) {
				console.error('Error submitting form:', error);
				this.submissionError='An error occurred while submitting the form.';
			} finally {
				this.isSubmitting=false;
			}
		},
	},
};
</script>
  
<style lang="scss" scoped></style>
  