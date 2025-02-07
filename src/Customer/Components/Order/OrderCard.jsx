import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigation } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigation();
  return (
    <div onClick={()=>navigate(`account/order/${5}`)} className="p-5 shadow-md hover:shadow-2xl">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
              alt=""
              className="w-[5rem] h-[5rem] object-cover object-top "
            />

            <div className="ml-5 space-y-2">
              <p>Mens Shirts</p>
              <p className="opacity-50 text-xs font-semibold">Size: L</p>
              <p className="opacity-50 text-xs font-semibold">Color: Green</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>$1099</p>
        </Grid>

        <Grid item xs={4}>
          {true && <div>
            <p>
            <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
            <span>
                   Delivered on March 08    
            </span>
            </p>
             
             <p className="text-xs"> 
                Your Item Has Been Delivered
             </p>
            </div>}
            {false &&<p>
                <span>
                    Expected Delivery on March 08
                </span>
                </p>}
        </Grid>

      </Grid>
    </div>
  );
};

export default OrderCard;
