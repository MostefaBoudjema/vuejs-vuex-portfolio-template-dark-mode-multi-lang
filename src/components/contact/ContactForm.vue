<template>
	<div class="w-full md:w-2/3">
		<div
			class="leading-loose m-2 md:m-4 p-4 md:p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-xl md:text-2xl mb-6 md:mb-8">
				{{ $t('Contact Us') }}
			</p>
			<form @submit.prevent="submitForm" class="font-general-regular space-y-5 md:space-y-7">
				<!-- Progress indicator -->
				<div class="hidden md:flex justify-between mb-6 md:mb-8 px-0">
					<div v-for="(step, index) in steps" :key="index"
						class="flex items-center">
						<div :class="[
							'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium',
							currentStep > index ? 'bg-blue-500 text-white' :
							currentStep === index ? 'bg-blue-500 text-white' :
							'bg-gray-200 text-gray-600'
						]">
							{{ index + 1 }}
						</div>
						<div v-if="index < steps.length - 1" 
							:class="[
								'w-16 h-1',
								currentStep > index ? 'bg-blue-500' : 'bg-gray-200'
							]">
						</div>
					</div>
				</div>
				<!-- Mobile progress indicator -->
				<div class="md:hidden flex justify-center mb-6">
					<div class="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">
						<span class="text-sm font-medium text-gray-700 dark:text-gray-300">
							{{ currentStep + 1 }}/{{ steps.length }}
						</span>
					</div>
				</div>

				<!-- Current question -->
				<div class="mb-6 md:mb-8">
					<h3 class="text-lg md:text-xl font-medium mb-4 text-primary-dark dark:text-primary-light">{{ currentQuestion.label }}</h3>
					<FormInput 
						v-if="currentQuestion.type === 'text' || currentQuestion.type === 'email' || currentQuestion.type === 'phone'"
						v-model="formData[currentQuestion.field]"
						:placeholder="currentQuestion.placeholder"
						:inputIdentifier="currentQuestion.field"
						:inputType="currentQuestion.type"
						:hideLabel="true"
					/>
					<FormTextarea 
						v-else-if="currentQuestion.type === 'textarea'"
						v-model="formData[currentQuestion.field]"
						:placeholder="currentQuestion.placeholder"
						:textareaIdentifier="currentQuestion.field"
						:hideLabel="true"
					/>
					<select
						v-else-if="currentQuestion.type === 'select'"
						v-model="formData[currentQuestion.field]"
						class="w-full px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-secondary-dark dark:text-gray-200"
						:class="{ 'border-red-500': !isCurrentStepValid && formData[currentQuestion.field] === '' }"
					>
						<option value="" disabled selected>{{ currentQuestion.placeholder }}</option>
						<option v-for="option in currentQuestion.options" :key="option.value" :value="option.value">
							{{ option.label }}
						</option>
					</select>
					<FormInput 
						v-if="currentQuestion.type === 'select' && formData[currentQuestion.field] === 'other'"
						v-model="formData[currentQuestion.field + 'Custom']"
						:placeholder="'Please specify your ' + currentQuestion.field"
						:inputIdentifier="currentQuestion.field + 'Custom'"
						inputType="text"
						:hideLabel="true"
						class="mt-2"
					/>
				</div>

				<!-- Navigation buttons -->
				<div class="flex justify-between">
					<div>
						<Button 
							v-if="currentStep > 0"
							:title="$t('Previous')"
							@click="previousStep"
							class="px-3 md:px-4 py-2 md:py-2.5 text-white tracking-wider bg-gray-500 hover:bg-gray-600 focus:ring-1 focus:ring-gray-900 rounded-lg duration-500"
							type="button"
						/>
					</div>
					<div>
						<Button 
							:title="isLastStep ? (isSubmitting ? $t('Sending...') : $t('Send Message')) : $t('Next')"
							:disabled="isSubmitting || !isCurrentStepValid"
							@click="isLastStep ? submitForm() : nextStep()"
							class="px-3 md:px-4 py-2 md:py-2.5 text-white tracking-wider bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 rounded-lg duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
							type="button"
						/>
					</div>
				</div>

				<!-- Success Message -->
				<Transition name="fade">
					<div v-if="submissionSuccess" class="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
						{{ $t('Message sent successfully! We will get back to you soon.') }}
					</div>
				</Transition>

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
			currentStep: 0,
			formData: {
				fullName: '',
				email: '',
				phone: '',
				subject: '',
				projectType: '',
				budget: '',
				budgetCustom: '',
				timeline: '',
				timelineCustom: '',
				message: '',
			},
			steps: [
				{
					label: 'What is your name?',
					field: 'fullName',
					type: 'text',
					placeholder: 'Enter your full name',
					validation: (value) => value.length >= 2
				},
				{
					label: 'What is your email address?',
					field: 'email',
					type: 'email',
					placeholder: 'Enter your email',
					validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
				},
				{
					label: 'What is your phone number?',
					field: 'phone',
					type: 'phone',
					placeholder: 'Enter your phone number',
					validation: (value) => value.length >= 10
				},
				{
					label: 'What is this regarding?',
					field: 'subject',
					type: 'text',
					placeholder: 'Enter the subject',
					validation: (value) => value.length >= 3
				},
				{
					label: 'What type of project are you interested in?',
					field: 'projectType',
					type: 'select',
					placeholder: 'Select project type',
					options: [
						{ value: 'web-development', label: 'Web Development' },
						{ value: 'mobile-app', label: 'Mobile App Development' },
						{ value: 'ui-design', label: 'UI/UX Design' },
						{ value: 'ecommerce', label: 'E-commerce Solution' },
						{ value: 'cms', label: 'Content Management System' },
						{ value: 'api-development', label: 'API Development' },
						{ value: 'maintenance', label: 'Website Maintenance' },
						{ value: 'other', label: 'Other' }
					],
					validation: (value) => value !== ''
				},
				{
					label: 'What is your budget range?',
					field: 'budget',
					type: 'select',
					placeholder: 'Select budget range',
					options: [
						{ value: 'under-1000', label: 'Under $1,000' },
						{ value: '1000-5000', label: '$1,000 - $5,000' },
						{ value: '5000-10000', label: '$5,000 - $10,000' },
						{ value: '10000-25000', label: '$10,000 - $25,000' },
						{ value: '25000-plus', label: '$25,000+' },
						{ value: 'other', label: 'Other' }
					],
					validation: (value) => value !== ''
				},
				{
					label: 'What is your timeline?',
					field: 'timeline',
					type: 'select',
					placeholder: 'Select timeline',
					options: [
						{ value: 'asap', label: 'ASAP' },
						{ value: '1-2-weeks', label: '1-2 weeks' },
						{ value: '1-month', label: '1 month' },
						{ value: '2-3-months', label: '2-3 months' },
						{ value: '3-6-months', label: '3-6 months' },
						{ value: 'other', label: 'Other' }
					],
					validation: (value) => value !== ''
				},
				{
					label: 'What would you like to tell us?',
					field: 'message',
					type: 'textarea',
					placeholder: 'Enter your message',
					validation: (value) => value.length >= 10
				}
			],
			isSubmitting: false,
			submissionError: null,
			submissionSuccess: false,
			successTimeout: null,
		};
	},
	computed: {
		currentQuestion() {
			return this.steps[this.currentStep];
		},
		isLastStep() {
			return this.currentStep === this.steps.length - 1;
		},
		isCurrentStepValid() {
			const currentField = this.currentQuestion.field;
			const value = this.formData[currentField];
			return this.currentQuestion.validation(value);
		}
	},
	methods: {
		nextStep() {
			if (this.currentStep < this.steps.length - 1) {
				this.currentStep++;
			}
		},
		previousStep() {
			if (this.currentStep > 0) {
				this.currentStep--;
			}
		},
		async submitForm() {
			if (!this.isCurrentStepValid) return;

			this.isSubmitting = true;
			this.submissionError = null;
			this.submissionSuccess = false;

			// Clear any existing timeout
			if (this.successTimeout) {
				clearTimeout(this.successTimeout);
			}

			try {
				// Prepare form data, using custom values if "other" is selected
				const formDataToSend = {
					...this.formData,
					budget: this.formData.budget === 'other' ? this.formData.budgetCustom : this.formData.budget,
					timeline: this.formData.timeline === 'other' ? this.formData.timelineCustom : this.formData.timeline
				};

				const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:3000';
				const response = await fetch(`${apiUrl}/send-email`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formDataToSend),
				});

				const data = await response.json();

				if (response.ok) {
					this.submissionSuccess = true;
					// Set timeout to hide success message after 5 seconds
					this.successTimeout = setTimeout(() => {
						this.submissionSuccess = false;
					}, 5000);
					// Reset form
					this.formData = {
						fullName: '',
						email: '',
						phone: '',
						subject: '',
						projectType: '',
						budget: '',
						budgetCustom: '',
						timeline: '',
						timelineCustom: '',
						message: '',
					};
					this.currentStep = 0;
				} else {
					this.submissionError = data.message || 'Failed to send message';
				}
			} catch (error) {
				console.error('Error submitting form:', error);
				this.submissionError = 'An error occurred while submitting the form. Please try again later.';
			} finally {
				this.isSubmitting = false;
			}
		},
	},
	beforeUnmount() {
		// Clear timeout when component is unmounted
		if (this.successTimeout) {
			clearTimeout(this.successTimeout);
		}
	},
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>