import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import { Element } from 'react-scroll';

export default function Contact() {
	const form = useRef<HTMLFormElement>(null);
	const currentYear = new Date().getFullYear();
	const copyrightText = '© ' + currentYear;

	/**
	 * The function `sendEmail` sends an email using the EmailJS service when a form is submitted.
	 */
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
					},
					(error) => {
						console.log(error.text);
					},
				);
		}
	};

	return (
		<Element name='contact_element'>
			<Box
				component='div'
				sx={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'secondary.main',
					position: 'relative',
				}}
			>
				<Typography variant='h4'>Get in touch!</Typography>
				<form ref={form} onSubmit={sendEmail} className='contact_form'>
					<Grid container spacing={2} sx={{ padding: 10 }}>
						<Grid item xs={12} md={6}>
							<TextField
								required
								fullWidth
								type='text'
								name='user_name'
								id='user_name'
								label='Name'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								required
								fullWidth
								type='email'
								name='user_email'
								id='user_email'
								label='Email'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								type='text'
								name='message'
								id='message'
								label='Message'
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button type='submit' variant='outlined' aria-label='submit-contact-form-button'>
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
				<Typography
					sx={{
						position: 'absolute',
						transform: 'translateX(-50%)',
						bottom: 0,
						left: '50%',
						typography: { xs: 'caption' },
						textAlign: 'center',
						padding: '5px',
					}}
				>
					{'Iman Warsame ' + copyrightText}
				</Typography>
			</Box>
		</Element>
	);
}
