import React from 'react';
import AdressCard from '../AddressCard/AdressCard';
import OrderTraker from './OrderTraker';
import { Box, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
      <div>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AdressCard/>
      </div>

      <div className='py-20'>
        <OrderTraker activeStep={3}/>
      </div>

      <Grid className='space-y-4' container>
        {[1,1,1,1,1,1,1,1,1].map((item)=>   <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:'space-between'}}>
           <Grid item xs={6}>

            <div className='flex items-center space-x-2'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' 
                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
            <div className='space-y-2 ml-5'>
                <p className='font-semibold'>Mens Kurta</p>
                <p className='space-x-5 opacity-50 text-xs font-semibold'><span>COlor: Green</span><span>Size: L</span></p>
                <p>Seller: Arihant Jain</p>
                <p>$1099</p>
            </div>
            </div>

           </Grid>

           <Grid item>
               <Box sx={{color:deepPurple[500]}}>
                <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                <span>Rate & Review Product</span>

               </Box>
           </Grid>
        </Grid>
)}
      
      </Grid>
    </div>
  );
}

export default OrderDetails;
