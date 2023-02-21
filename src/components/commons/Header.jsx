import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					></IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						<img
							className='logo'
							src='https://upqroo.edu.mx/wp-content/uploads/2022/06/Logos12Aniversario.jpg'
						/>
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
