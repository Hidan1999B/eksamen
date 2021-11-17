import React from "react";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from "@mui/material";
import './SwipeButtons.css'
function SwipeButtons() {
  return (
      <div className="swipeButtons">
          <IconButton>
   <ReplayIcon fontSize ="large" className="replay_icon"/>
</IconButton>
          <IconButton>
            <CloseIcon fontSize ="large" className="close_icon"/>
          </IconButton>
          <IconButton>
            <StarRateIcon fontSize ="large" className="starRate_icon"/>
          </IconButton>
          <IconButton>
            <FavoriteIcon fontSize ="large" className="Favorite_icon"/>
          </IconButton>
          <IconButton>
            <FlashOnIcon fontSize ="large" className="Flash_icon"/>
          </IconButton>

      </div>
  )
}

export default SwipeButtons