'use client';

import * as React from 'react';
import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HotelIcon from '@mui/icons-material/Hotel';

// ==========================================
// CONFIGURABLE PROPERTIES BOILERPLATE
// Change these properties to adjust card layout.
// ==========================================
export const CARD_CONFIG = {
  // Main Card container
  width: 848,
  height: 823,
  bgColor: '#FBFAF9',
  border: '1px solid rgba(96, 95, 95, 0.2)',
  borderRadius: '20px',

  // Curved Header shape
  headerBg: '#7B0000',
  headerWidth: 1026,
  headerHeight: 242,
  headerLeft: -89, // Centered mathematically: (848 - 1026) / 2
  headerTop: -76,

  // Watermark (bottom background)
  watermarkWidth: 860,
  watermarkHeight: 304,
  watermarkLeft: -12,
  watermarkBottom: 0,
  watermarkUrl: '/assets/watermark.svg',

  // Vertical Divider
  dividerWidth: 1,
  dividerHeight: 271,
  dividerLeft: 448,
  dividerTop: 209,
  dividerColor: 'rgba(96, 95, 95, 0.7)',

  // Typography - Labels
  labelFontFamily: "'Poppins', sans-serif",
  labelFontWeight: 300,
  labelFontSize: '24px',
  labelLineHeight: '36px',
  labelColor: '#000000',

  // Typography - Values
  valueFontFamily: "'Poppins', sans-serif",
  valueFontWeight: 600,
  valueFontSize: '30px',
  valueLineHeight: '45px',
  valueColor: '#7B0000',
};

export interface AllotmentIdCardProps {
  name: string;
  rollNumber: string;
  hostel: string;
  room: string;
}

export function AllotmentIdCard({ name, rollNumber, hostel, room }: AllotmentIdCardProps): React.JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        overflow: 'visible',
        py: 2,
      }}
    >
      {/* Responsive Scaling Container */}
      <Box
        sx={{
          position: 'relative',
          width: `${CARD_CONFIG.width}px`,
          height: `${CARD_CONFIG.height}px`,
          transform: { xs: 'scale(0.33)', sm: 'scale(0.47)', md: 'scale(0.62)', lg: 'scale(0.71)' },
          transformOrigin: 'top center',
          mb: {
            xs: `-${CARD_CONFIG.height * (1 - 0.33)}px`,
            sm: `-${CARD_CONFIG.height * (1 - 0.47)}px`,
            md: `-${CARD_CONFIG.height * (1 - 0.62)}px`,
            lg: `-${CARD_CONFIG.height * (1 - 0.71)}px`,
          }, // Offset margin collapse due to scaling
        }}
      >
        {/* Glow Shadow (Rectangle 53) */}
        <Box
          sx={{
            position: 'absolute',
            width: '866px',
            height: '817px',
            left: '50%',
            top: '3px',
            transform: 'translateX(-50%)',
            background: 'rgba(255, 177, 177, 0.4)',
            filter: 'blur(20px)',
            borderRadius: '20px',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Info Card Container */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            bgcolor: CARD_CONFIG.bgColor,
            border: CARD_CONFIG.border,
            borderRadius: CARD_CONFIG.borderRadius,
            overflow: 'hidden',
            zIndex: 1,
            boxSizing: 'border-box',
          }}
        >
          {/* Header Ellipse (Ellipse 1) */}
          <Box
            sx={{
              position: 'absolute',
              width: `${CARD_CONFIG.headerWidth}px`,
              height: `${CARD_CONFIG.headerHeight}px`,
              left: `${CARD_CONFIG.headerLeft}px`,
              top: `${CARD_CONFIG.headerTop}px`,
              background: CARD_CONFIG.headerBg,
              borderRadius: '50%',
              zIndex: 1,
            }}
          />

          {/* TI Logo Box */}
          <Box
            sx={{
              position: 'absolute',
              width: '325px',
              height: '109px',
              left: '38px',
              top: '11px',
              zIndex: 2,
              backgroundImage: 'url(/assets/ti-logo.svg)',
              backgroundSize: 'contain',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* White Dots (Group 11) */}
          <Box
            sx={{
              position: 'absolute',
              width: '151px',
              height: '30px',
              left: '674px',
              top: '15px',
              zIndex: 2,
            }}
          >
            {/* Ellipse 19 - 30px */}
            <Box sx={{ position: 'absolute', width: '30px', height: '30px', left: '0px', top: '0px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
            {/* Ellipse 19 - 25px */}
            <Box sx={{ position: 'absolute', width: '25px', height: '25px', left: '39px', top: '2px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
            {/* Ellipse 19 - 20px */}
            <Box sx={{ position: 'absolute', width: '20px', height: '20px', left: '73px', top: '5px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
            {/* Ellipse 19 - 15px */}
            <Box sx={{ position: 'absolute', width: '15px', height: '15px', left: '102px', top: '7px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
            {/* Ellipse 19 - 10px */}
            <Box sx={{ position: 'absolute', width: '10px', height: '9px', left: '126px', top: '10px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
            {/* Ellipse 19 - 6px */}
            <Box sx={{ position: 'absolute', width: '6px', height: '6px', left: '145px', top: '11px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
          </Box>

          {/* Vertical Divider */}
          <Box
            sx={{
              position: 'absolute',
              width: `${CARD_CONFIG.dividerWidth}px`,
              height: `${CARD_CONFIG.dividerHeight}px`,
              left: `${CARD_CONFIG.dividerLeft}px`,
              top: `${CARD_CONFIG.dividerTop}px`,
              backgroundColor: CARD_CONFIG.dividerColor,
              zIndex: 2,
            }}
          />

          {/* Watermark Illustration */}
          <Box
            sx={{
              position: 'absolute',
              width: `${CARD_CONFIG.watermarkWidth}px`,
              height: `${CARD_CONFIG.watermarkHeight}px`,
              left: `${CARD_CONFIG.watermarkLeft}px`,
              bottom: `${CARD_CONFIG.watermarkBottom}px`,
              backgroundImage: `url(${CARD_CONFIG.watermarkUrl})`,
              backgroundSize: 'contain',
              backgroundPosition: 'bottom center',
              backgroundRepeat: 'no-repeat',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* ==========================================
              LEFT COLUMN FIELDS
             ========================================== */}

          {/* Profile Photo / Avatar Icon */}
          <Box
            sx={{
              position: 'absolute',
              width: '51px',
              height: '58px',
              left: '63px',
              top: '257px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#7B0000',
            }}
          >
            <PersonIcon sx={{ fontSize: '48px' }} />
          </Box>

          {/* Full Name Stack */}
          <Box
            sx={{
              position: 'absolute',
              left: '135px',
              top: '246px',
              width: '262px',
              height: '83px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: CARD_CONFIG.labelFontFamily,
                fontWeight: CARD_CONFIG.labelFontWeight,
                fontSize: CARD_CONFIG.labelFontSize,
                lineHeight: CARD_CONFIG.labelLineHeight,
                color: CARD_CONFIG.labelColor,
                textTransform: 'uppercase',
              }}
            >
              Full Name
            </Typography>
            <Typography
              sx={{
                fontFamily: CARD_CONFIG.valueFontFamily,
                fontWeight: CARD_CONFIG.valueFontWeight,
                fontSize: CARD_CONFIG.valueFontSize,
                lineHeight: CARD_CONFIG.valueLineHeight,
                color: CARD_CONFIG.valueColor,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {name || 'N/A'}
            </Typography>
          </Box>

          {/* Book Open Icon (Roll Number Icon) */}
          <Box
            sx={{
              position: 'absolute',
              width: '52px',
              height: '50px',
              left: '65px',
              top: '387px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#7B0000',
              border: '5px solid #7B0000',
              borderRadius: '8px',
              boxSizing: 'border-box',
            }}
          >
            <MenuBookIcon sx={{ fontSize: '28px' }} />
          </Box>

          {/* Roll Number Stack */}
          <Box
            sx={{
              position: 'absolute',
              left: '142px',
              top: '371px',
              width: '230px',
              height: '80px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: CARD_CONFIG.labelFontFamily,
                fontWeight: CARD_CONFIG.labelFontWeight,
                fontSize: CARD_CONFIG.labelFontSize,
                lineHeight: CARD_CONFIG.labelLineHeight,
                color: CARD_CONFIG.labelColor,
                textTransform: 'uppercase',
              }}
            >
              Roll Number
            </Typography>
            <Typography
              sx={{
                fontFamily: CARD_CONFIG.valueFontFamily,
                fontWeight: CARD_CONFIG.valueFontWeight,
                fontSize: CARD_CONFIG.valueFontSize,
                lineHeight: CARD_CONFIG.valueLineHeight,
                color: CARD_CONFIG.valueColor,
              }}
            >
              {rollNumber || 'N/A'}
            </Typography>
          </Box>

          {/* ==========================================
              RIGHT COLUMN FIELDS
             ========================================== */}

          {/* Hostel Icon */}
          <Box
            sx={{
              position: 'absolute',
              width: '59px',
              height: '61px',
              left: '501px',
              top: '254px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#7B0000',
            }}
          >
            <ApartmentIcon sx={{ fontSize: '48px' }} />
          </Box>

          {/* Allotted Hostel Stack */}
          <Box
            sx={{
              position: 'absolute',
              left: '591px',
              top: '246px',
              width: '199px',
              height: '83px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: CARD_CONFIG.labelFontFamily,
                fontWeight: CARD_CONFIG.labelFontWeight,
                fontSize: CARD_CONFIG.labelFontSize,
                lineHeight: CARD_CONFIG.labelLineHeight,
                color: CARD_CONFIG.labelColor,
                textTransform: 'uppercase',
              }}
            >
              Allotted Hostel
            </Typography>
            <Typography
              sx={{
                fontFamily: CARD_CONFIG.valueFontFamily,
                fontWeight: CARD_CONFIG.valueFontWeight,
                fontSize: CARD_CONFIG.valueFontSize,
                lineHeight: CARD_CONFIG.valueLineHeight,
                color: CARD_CONFIG.valueColor,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {hostel || 'N/A'}
            </Typography>
          </Box>

          {/* Room Icon */}
          <Box
            sx={{
              position: 'absolute',
              width: '59px',
              height: '57px',
              left: '501px',
              top: '383px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#7B0000',
            }}
          >
            <HotelIcon sx={{ fontSize: '48px' }} />
          </Box>

          {/* Allotted Room Stack */}
          <Box
            sx={{
              position: 'absolute',
              left: '591px',
              top: '371px',
              width: '188px',
              height: '80px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: CARD_CONFIG.labelFontFamily,
                fontWeight: CARD_CONFIG.labelFontWeight,
                fontSize: CARD_CONFIG.labelFontSize,
                lineHeight: CARD_CONFIG.labelLineHeight,
                color: CARD_CONFIG.labelColor,
                textTransform: 'uppercase',
              }}
            >
              Allotted Room
            </Typography>
            <Typography
              sx={{
                fontFamily: CARD_CONFIG.valueFontFamily,
                fontWeight: CARD_CONFIG.valueFontWeight,
                fontSize: CARD_CONFIG.valueFontSize,
                lineHeight: CARD_CONFIG.valueLineHeight,
                color: CARD_CONFIG.valueColor,
              }}
            >
              {room || 'N/A'}
            </Typography>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
