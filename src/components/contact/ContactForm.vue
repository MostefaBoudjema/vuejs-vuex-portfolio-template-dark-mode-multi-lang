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
					<Button :title="isSubmitting ? $t('Sending...') : $t('Send Message')" :disabled="isSubmitting"
						class="px-4 py-2.5 text-white tracking-wider bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 rounded-lg duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
						type="submit" aria-label="Send Message" />
				</div>

				<!-- Success Message -->
				<div v-if="submissionSuccess" class="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
					{{ $t('Message sent successfully! We will get back to you soon.') }}
				</div>

				<!-- Error Message -->
				<div v-if="submissionError" class="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
					{{ submissionError }}
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

			// Log form data before submission
			console.log('Submitting form with data:', {
				fullName: this.fullName,
				email: this.email,
				subject: this.subject,
				message: this.message
			});

			try {
				const formData={
					fullName: this.fullName,
					email: this.email,
					subject: this.subject,
					message: this.message,
				};
				const apiUrl=process.env.VUE_APP_API_URL||'http://localhost:3000';
				const response=await fetch(`${apiUrl}/send-email`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				});

				const data=await response.json();
				console.log('Server response:', data);

				if (response.ok) {
					this.submissionSuccess=true;
					// Clear form
					this.fullName='';
					this.email='';
					this.subject='';
					this.message='';
				} else {
					this.submissionError=data.message||'Failed to send message';
				}
			} catch (error) {
				console.error('Error submitting form:', error);
				this.submissionError='An error occurred while submitting the form. Please try again later.';
			} finally {
				this.isSubmitting=false;
			}
		},
	},
};
</script>

<style lang="scss" scoped></style>