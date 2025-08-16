import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextInput, Button, Box, Grid, Title, Text, Textarea } from '@mantine/core';
import { Element } from 'react-scroll';
import { notifications } from '@mantine/notifications';

export default function Contact() {
	const form = useRef<HTMLFormElement>(null);
	const currentYear = new Date().getFullYear();
	const copyrightText = '© ' + currentYear;

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.current) {
			emailjs
				.sendForm(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
					form.current,
					import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
				)
				.then(
					(result) => {
						console.log(result.text);
						form.current?.reset();
						notifications.show({
							title: 'Success!',
							message: 'Your message has been sent successfully.',
							color: 'green',
						});
					},
					(error) => {
						console.log(error.text);
						notifications.show({
							title: 'Error',
							message: 'Failed to send message. Please try again.',
							color: 'red',
						});
					},
				);
		}
	};

	return (
		<Element name='contact_element'>
			<Box
				style={{
					width: '100%',
					height: '100lvh',
					overflow: 'hidden',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					paddingTop: '50px',
					paddingLeft: '20px',
					paddingRight: '20px',
				}}
			>
				<Title order={2} mb="xl">Get in touch!</Title>
				<form ref={form} onSubmit={sendEmail} className='contact_form' style={{ width: '100%', maxWidth: '1200px' }}>
					<Grid p="xl">
						<Grid.Col span={{ base: 12, md: 6 }}>
							<TextInput
								required
								type='text'
								name='user_name'
								id='user_name'
								label='Name'
								placeholder="Your name"
							/>
						</Grid.Col>
						<Grid.Col span={{ base: 12, md: 6 }}>
							<TextInput
								required
								type='email'
								name='user_email'
								id='user_email'
								label='Email'
								placeholder="your@email.com"
							/>
						</Grid.Col>
						<Grid.Col span={12}>
							<Textarea
								required
								name='message'
								id='message'
								label='Message'
								placeholder="Your message..."
								rows={4}
							/>
						</Grid.Col>
						<Grid.Col span={12}>
							<Button
								type='submit'
								variant='filled'
								color='green'
								aria-label='submit-contact-form-button'
							>
								Submit
							</Button>
						</Grid.Col>
					</Grid>
				</form>
				<Text
					size="sm"
					style={{
						position: 'absolute',
						bottom: 0,
						left: '50%',
						transform: 'translateX(-50%)',
						textAlign: 'center',
						padding: '5px',
					}}
				>
					{'Iman Warsame ' + copyrightText}
				</Text>
			</Box>
		</Element>
	);
}
