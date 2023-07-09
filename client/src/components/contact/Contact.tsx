import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

export default function Contact() {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.current) {
			emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
				.then(
					(result) => {
						console.log(result.text);
						form.current?.reset();
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};

	return (
		<Box sx={{
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'secondary.main'
		}}>
			<Typography variant='h4'>Get in touch!</Typography>
			<form ref={form} onSubmit={sendEmail} className='contact_form'>
				<Grid container spacing={2} sx={{ padding: 10 }}>
					<Grid item xs={12} md={6}>
						<TextField required fullWidth type='text' name='user_name' id="outlined-required" label="Name"/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField required fullWidth type='email' name='user_email' id="outlined-required" label="Email"/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							type='text'
							name='message'
							id="outlined-multiline-flexible"
							label="Message"
							multiline
							rows={4}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button type='submit' variant='outlined'>Submit</Button>
					</Grid>
				</Grid>
			</form>
		</Box>

	);
}