import { Grid, Typography, Button } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10'
        container
        sx={{bgcolor:"black",color:"white",py:3}}
      >
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant="h6">Company</Typography>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>About</Button>
            </div>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Blog</Button>
            </div>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Press</Button>
            </div>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Jobs</Button>
            </div>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Partners</Button>
            </div>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant="h6">Solutions</Typography>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Marketing</Button>
            </div>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Analytical</Button>
            </div>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Commerce</Button>
            </div>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Insights</Button>
            </div>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Supports</Button>
            </div>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant="h6">Legal</Typography>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Claim</Button>
            </div>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Privacy</Button>
            </div>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Terms</Button>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant="h6">Documentaion</Typography>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>Guides</Button>
            </div>
            <div>
            <Button className='pb-5' variant="h-6" gutterBottom>API Status</Button>
            </div>

        </Grid>

        <Grid className='pt-20' item xs={12}>
            <Typography variant="body2" component="p" align="center">&copy; 2024 AadiFsn. All Right Reserved</Typography>
            <Typography variant="body2" component="p" align="center">Made With Love By Me</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
