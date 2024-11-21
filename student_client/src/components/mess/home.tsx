'use client';

import * as React from 'react';
import { Box, Button, MenuItem, Paper, Select, type SelectChangeEvent } from '@mui/material';
import { Stack } from '@mui/system';

// import Complaint from './complaint';
import Feedback from './feedback';
import MenuTable from './menu';

 const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


type Items = Record<string, "veg" | "non-veg">;

type MealTimings = Record<string, Items>;

 interface MenuItems {
  Breakfast: MealTimings;
  Lunch: MealTimings;
  Dinner: MealTimings;
}

export default function Home(): React.JSX.Element {
  // 0 -> Mess Menu
  // 1 -> Feedback Menu
  // 2 -> Complaint Menu

  const menuItems: MenuItems = {
    Breakfast: {
      Monday: { "Pancakes": "veg", "Omelette": "non-veg", "Toast": "veg", "Fruit Salad": "veg", "Smoothie": "veg", "Chicken Sausage": "non-veg" },
      Tuesday: { "Paratha": "veg", "Scrambled Eggs": "non-veg", "Porridge": "veg", "Boiled Eggs": "non-veg", "Chana Masala": "veg", "Bacon": "non-veg" },
      Wednesday: { "Toast": "veg", "Sausage": "non-veg", "Uttapam": "veg", "Veg Sandwich": "veg", "Egg Curry": "non-veg", "Tea & Biscuits": "veg" },
      Thursday: { "Idli": "veg", "Bacon": "non-veg", "Poha": "veg", "Vegetable Upma": "veg", "Omelette Roll": "non-veg", "Fried Eggs": "non-veg" },
      Friday: { "Cereal": "veg", "Ham": "non-veg", "Sprouts": "veg", "Cheese Sandwich": "veg", "Chicken Nuggets": "non-veg", "Muffins": "veg" },
      Saturday: { "Poha": "veg", "French Toast": "non-veg", "Dosa": "veg", "Fruit Bowl": "veg", "Egg Bhurji": "non-veg", "Hash Browns": "veg" },
      Sunday: { "Aloo Paratha": "veg", "Veg Cutlets": "veg", "Chicken Patties": "non-veg", "Lassi": "veg", "Omelette": "non-veg", "Waffles": "veg" },
    },
    Lunch: {
      Monday: { "Rajma Chawal": "veg", "Grilled Chicken": "non-veg", "Salad": "veg", "Paneer Tikka": "veg", "Fish Curry": "non-veg", "Dal Fry": "veg" },
      Tuesday: { "Butter Chicken": "non-veg", "Jeera Rice": "veg", "Mix Veg": "veg", "Mutton Curry": "non-veg", "Chapati": "veg", "Veg Pulao": "veg" },
      Wednesday: { "Egg Curry": "non-veg", "Aloo Gobhi": "veg", "Rice": "veg", "Chicken Biryani": "non-veg", "Roti": "veg", "Dal Makhani": "veg" },
      Thursday: { "Fish Fry": "non-veg", "Chole Bhature": "veg", "Veg Salad": "veg", "Chicken Korma": "non-veg", "Veg Soup": "veg", "Paneer Butter Masala": "veg" },
      Friday: { "Grilled Fish": "non-veg", "Pulao": "veg", "Mix Veg Curry": "veg", "Chicken Curry": "non-veg", "Dal Tadka": "veg", "Paratha": "veg" },
      Saturday: { "Egg Fried Rice": "non-veg", "Aloo Paratha": "veg", "Paneer Bhurji": "veg", "Chicken Roast": "non-veg", "Cucumber Salad": "veg", "Roti": "veg" },
      Sunday: { "Mutton Biryani": "non-veg", "Shahi Paneer": "veg", "Plain Rice": "veg", "Tandoori Chicken": "non-veg", "Veg Kofta": "veg", "Chapati": "veg" },
    },
    Dinner: {
      Monday: { "Chicken Curry": "non-veg", "Dal Tadka": "veg", "Steamed Rice": "veg", "Vegetable Soup": "veg", "Fish Tikka": "non-veg", "Roti": "veg" },
      Tuesday: { "Paneer Curry": "veg", "Grilled Chicken": "non-veg", "Mix Veg Curry": "veg", "Rice": "veg", "Mutton Rogan Josh": "non-veg", "Naan": "veg" },
      Wednesday: { "Vegetable Biryani": "veg", "Fried Fish": "non-veg", "Dal": "veg", "Butter Naan": "veg", "Chicken Stew": "non-veg", "Salad": "veg" },
      Thursday: { "Mutton Korma": "non-veg", "Veg Korma": "veg", "Rice": "veg", "Paneer Tikka Masala": "veg", "Fish Curry": "non-veg", "Roti": "veg" },
      Friday: { "Chicken Handi": "non-veg", "Jeera Rice": "veg", "Aloo Matar": "veg", "Grilled Fish": "non-veg", "Dal Fry": "veg", "Paratha": "veg" },
      Saturday: { "Egg Curry": "non-veg", "Veg Manchurian": "veg", "Noodles": "veg", "Chicken Fried Rice": "non-veg", "Spring Rolls": "veg", "Soup": "veg" },
      Sunday: { "Tandoori Chicken": "non-veg", "Malai Kofta": "veg", "Steamed Rice": "veg", "Fish Curry": "non-veg", "Paneer Butter Masala": "veg", "Chapati": "veg" },
    },
  };
  

  const [pageState, setPagesState] = React.useState<number>(0);
  const [day, setDay] = React.useState<string>('Monday');
  const [messTiming, setMessTiming] = React.useState<"Breakfast" | "Lunch" | "Dinner">('Breakfast');

  const handleChangeDay = (event: SelectChangeEvent): void => {
    setDay(event.target.value);
  };

  const handleChangeMessTiming = (event: SelectChangeEvent): void => {
    setMessTiming(event.target.value as "Breakfast" | "Lunch" | "Dinner");
  };

  return (
    <Paper sx={{ p: 2, px: 3, minHeight: '65vh' }}>
      <Stack
        alignItems="flex-end"
        direction="row"
        sx={{
          justifyContent: { xs: 'space-around', md: 'flex-start' },
          gap: { xs: 1, md: 2 },
          mb: 1,
        }}
      >
        <Button
          variant={pageState === 0 ? 'contained' : 'outlined'}
          sx={{
            px: { xs: 1.3, md: 5 },
            borderRadius: 0.7,
            fontSize: { xs: '15px', lg: '17px' },
            py: { xs: 0.5, md: 1 },
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
            width: { xs: 1, md: 'auto' },
          }}
          onClick={() => {
            setPagesState(0);
          }}
        >
          Mess Menu
        </Button>

        <Button
          variant={pageState === 1 ? 'contained' : 'outlined'}
          sx={{
            px: { xs: 1.3, md: 5 },
            borderRadius: 0.7,
            fontSize: { xs: '15px', lg: '17px' },
            py: { xs: 0.5, md: 1 },
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
            width: { xs: 1, md: 'auto' },
          }}
          onClick={() => {
            setPagesState(1);
          }}
        >
          Feedback
        </Button>

        {pageState === 1 && (
          <Select
            value={day}
            onChange={handleChangeDay}
            displayEmpty
            sx={{
              fontSize: { xs: '12px', md: '15px', lg: '17px' },
              borderRadius: 0.7,
              display: { xs: 'none', md: 'block' },
            }}
            inputProps={{ 'aria-label': 'Without label' }}
            size="small"
          >
            {days.map((val) => {
              return (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              );
            })}
          </Select>
        )}

        <Select
          value={messTiming}
          disabled={pageState === 2}
          onChange={handleChangeMessTiming}
          displayEmpty
          sx={{
            fontSize: { xs: '12px', md: '15px', lg: '17px' },
            borderRadius: 0.7,
            display: { xs: 'none', md: 'block' },
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          <MenuItem value="Breakfast">Breakfast</MenuItem>
          <MenuItem value="Lunch">Lunch</MenuItem>
          <MenuItem value="Dinner">Dinner</MenuItem>
        </Select>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

        {/* <Button
          variant={pageState === 2 ? 'contained' : 'outlined'}
          sx={{
            px: { xs: 1.3, md: 5 },
            borderRadius: 0.7,
            fontSize: { xs: '15px', lg: '17px' },
            py: { xs: 0.5, md: 1 },
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
            width: { xs: 1, md: 'auto' },
          }}
          onClick={() => {
            setPagesState(2);
          }}
        >
          Complaint
        </Button> */}
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-start" gap={1}>
        <Select
          value={day}
          onChange={handleChangeDay}
          displayEmpty
          sx={{
            width: '40%',
            fontSize: { xs: '12px', md: '15px', lg: '17px' },
            borderRadius: 0.7,
            display: { xs: 'block', md: 'none' },
            mt: 1,
            mb: 3,
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          {days.map((val) => {
            return (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            );
          })}
        </Select>

        <Select
          value={messTiming}
          disabled={pageState === 2}
          onChange={handleChangeMessTiming}
          displayEmpty
          sx={{
            width: '40%',
            fontSize: { xs: '12px', md: '15px', lg: '17px' },
            borderRadius: 0.7,
            display: { xs: 'block', md: 'none' },
            mt: 1,
            mb: 3,
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          <MenuItem value="Breakfast">Breakfast</MenuItem>
          <MenuItem value="Lunch">Lunch</MenuItem>
          <MenuItem value="Dinner">Dinner</MenuItem>
        </Select>
      </Stack>

      {pageState === 0 && <MenuTable menuItems={menuItems} timing={messTiming} day={day} />}
      {pageState === 1 && <Feedback menuItems={menuItems} day={day} timing={messTiming} />}
      {/* {pageState === 2 && <Complaint />} */}
    </Paper>
  );
}
