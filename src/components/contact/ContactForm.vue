<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';
export default { components: { Button, FormInput, FormTextarea } };
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		>
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
			>
				{{$t('Contact Form')}}
			</p>
			<form action="#" class="font-general-regular space-y-7">
				<FormInput :label="$t('Full Name')" inputIdentifier="name" />
				<FormInput
					:label="$t('Email')"
					inputIdentifier="email"
					inputType="email"
				/>
				<FormInput :label="$t('Subject')" inputIdentifier="subject" />
				<FormTextarea :label="$t('Message')" textareaIdentifier="message" />

				<div>
					<Button
						:title="$t('Send Message')"
						class="px-4 py-2.5 text-white tracking-wider bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
