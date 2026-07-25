'use client';

import * as React from 'react';
import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HotelIcon from '@mui/icons-material/Hotel';

export const CARD_CONFIG = {
  width: 749,
  height: 520,
  bgColor: '#FBFAF9',
  border: '1px solid rgba(96, 95, 95, 0.2)',
  borderRadius: '20px',

  headerBg: '#700202',
  headerWidth: 1182,
  headerHeight: 242,
  headerLeft: -219,
  headerTop: -148,

  watermarkWidth: 860,
  watermarkHeight: 230,
  watermarkLeft: -12,
  watermarkBottom: 0,
  watermarkUrl: '/assets/watermark.svg',

  dividerWidth: 1,
  dividerHeight: 157,
  dividerLeft: 371,
  dividerTop: 138,
  dividerColor: 'rgba(96, 95, 95, 0.7)',

  labelSx: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 300,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#000000',
    textTransform: 'uppercase',
  },
  valueSx: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '36px',
    color: '#7B0000',
  },
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
      <Box
        sx={{
          position: 'relative',
          width: `${CARD_CONFIG.width}px`,
          height: `${CARD_CONFIG.height}px`,
          transform: { xs: 'scale(0.45)', sm: 'scale(0.7)', md: 'scale(0.9)', lg: 'scale(1)' },
          transformOrigin: 'top center',
          mb: {
            xs: `-${CARD_CONFIG.height * (1 - 0.45)}px`,
            sm: `-${CARD_CONFIG.height * (1 - 0.7)}px`,
            md: `-${CARD_CONFIG.height * (1 - 0.9)}px`,
            lg: `0px`,
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '767px',
            height: '514px',
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

          <Box
            sx={{
              position: 'absolute',
              width: '199px',
              height: '59px',
              left: '41px',
              top: '5px',
              zIndex: 2,
              backgroundImage: 'url(/assets/ti-logo.svg)',
              backgroundSize: 'contain',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              width: '151px',
              height: '30px',
              left: '574px',
              top: '15px',
              zIndex: 2,
            }}
          >
            <Box sx={{ position: 'absolute', width: '30px', height: '30px', left: '0px', top: '0px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
            <Box sx={{ position: 'absolute', width: '25px', height: '25px', left: '39px', top: '2px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
            <Box sx={{ position: 'absolute', width: '20px', height: '20px', left: '73px', top: '5px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
            <Box sx={{ position: 'absolute', width: '15px', height: '15px', left: '102px', top: '7px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
            <Box sx={{ position: 'absolute', width: '10px', height: '9px', left: '126px', top: '10px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
            <Box sx={{ position: 'absolute', width: '6px', height: '6px', left: '145px', top: '11px', borderRadius: '50%', bgcolor: '#FDFDFD' }} />
          </Box>

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

          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: `${CARD_CONFIG.watermarkHeight}px`,
              left: 0,
              bottom: `${CARD_CONFIG.watermarkBottom}px`,
              backgroundImage: `url(${CARD_CONFIG.watermarkUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              width: '42px',
              height: '47px',
              left: '41px',
              top: '129px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#7B0000',
            }}
          >
            <PersonIcon sx={{ fontSize: '36px' }} />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              left: '105px',
              top: '127px',
              width: '262px',
              height: '71px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography sx={CARD_CONFIG.labelSx}>
              Full Name
            </Typography>
            <Typography
              sx={{
                ...CARD_CONFIG.valueSx,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {name || 'N/A'}
            </Typography>
          </Box>

          <svg
            style={{ position: 'absolute', left: '41px', top: '238px', zIndex: 3 }}
            width="42"
            height="47"
            viewBox="0 0 42 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 13.7083C21 11.6308 20.2625 9.63836 18.9497 8.16933C17.637 6.70029 15.8565 5.875 14 5.875H3.5V35.25H15.75C17.1424 35.25 18.4777 35.869 19.4623 36.9707C20.4469 38.0725 21 39.5669 21 41.125M21 13.7083V41.125M21 13.7083C21 11.6308 21.7375 9.63836 23.0503 8.16933C24.363 6.70029 26.1435 5.875 28 5.875H38.5V35.25H26.25C24.8576 35.25 23.5223 35.869 22.5377 36.9707C21.5531 38.0725 21 39.5669 21 41.125"
              stroke="#7B0000"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Box
            sx={{
              position: 'absolute',
              left: '105px',
              top: '232px',
              width: '262px',
              height: '73px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography sx={CARD_CONFIG.labelSx}>
              Roll Number
            </Typography>
            <Typography sx={CARD_CONFIG.valueSx}>
              {rollNumber || 'N/A'}
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              width: '46px',
              height: '47px',
              left: '425px',
              top: '130px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#7B0000',
            }}
          >
            <ApartmentIcon sx={{ fontSize: '36px' }} />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              left: '491px',
              top: '127px',
              width: '262px',
              height: '71px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography sx={CARD_CONFIG.labelSx}>
              Allotted Hostel
            </Typography>
            <Typography
              sx={{
                ...CARD_CONFIG.valueSx,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {hostel || 'N/A'}
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              width: '42px',
              height: '47px',
              left: '425px',
              top: '238px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#7B0000',
            }}
          >
            <HotelIcon sx={{ fontSize: '36px' }} />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              left: '491px',
              top: '234px',
              width: '262px',
              height: '71px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography sx={CARD_CONFIG.labelSx}>
              Allotted Room
            </Typography>
            <Typography sx={CARD_CONFIG.valueSx}>
              {room || 'N/A'}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
