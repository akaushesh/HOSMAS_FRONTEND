'use client';

import * as React from 'react';
import { Clear as ClearIcon } from '@mui/icons-material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ResetIcon from '@mui/icons-material/Refresh';
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

type MealType = 'breakfast' | 'lunch' | 'dinner';

interface MenuItemType {
  item: string;
  type: 'veg' | 'non-veg';
}

const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner'];
const days: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function Menu(): React.JSX.Element {
  const [menu, setMenu] = React.useState<Record<MealType, Record<string, MenuItemType[]>>>({
    breakfast: Object.fromEntries(days.map((day) => [day, []])),
    lunch: Object.fromEntries(days.map((day) => [day, []])),
    dinner: Object.fromEntries(days.map((day) => [day, []])),
  });


  const [selectedDay, setSelectedDay] = React.useState<string>('monday');
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [currentMeal, setCurrentMeal] = React.useState<MealType>('breakfast');
  const [search, setSearch] = React.useState('');
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const newMenuItems = {
    Indian: ['Idli Sambar', 'Masala Dosa', 'Puri Bhaji', 'Paneer Butter Masala'],
    Continental: ['Bread Jam', 'Rice', 'Dal'],
    Snacks: ['Coconut', 'Upma', 'Poha', 'Paratha'],
    Snacks2: ['Coconut2', 'Upma2', 'Poha2', 'Paratha2'],
    NonVeg: ['Eggs', 'Omlette', 'Egg Curry', 'Half Fry'],
    Uncategorized: ['Lassi', 'Chai', 'Roti'],
  };

  const uncategorizedItems = newMenuItems.Uncategorized || [];
  const categorizedItems = Object.keys(newMenuItems).reduce<Record<string, string[]>>((acc, category: string) => {
    if (category !== 'Uncategorized') {
      acc[category] = newMenuItems[category as keyof typeof newMenuItems];
    }
    return acc;
  }, {});

  const handleAddClick = (mealType: MealType): void => {
    setCurrentMeal(mealType);
    setDialogOpen(true);
    setSelectedItems(menu[mealType][selectedDay].map((item) => item.item));
  };

  const handleResetMealClick = (mealType: MealType): void => {
    setMenu((prevMenu) => ({
      ...prevMenu,
      [mealType]: {
        ...prevMenu[mealType],
        [selectedDay]: [],
      },
    }));
  };

  const handleResetAll = (): void => {
    setMenu({
      breakfast: Object.fromEntries(days.map((day) => [day, []])),
      lunch: Object.fromEntries(days.map((day) => [day, []])),
      dinner: Object.fromEntries(days.map((day) => [day, []])),
    });
  };

  const handleDialogClose = (): void => {
    setDialogOpen(false);
    setSearch('');
  };

  const handleRemoveItem = (mealType: MealType, itemToRemove: string): void => {
    setMenu((prevMenu) => ({
      ...prevMenu,
      [mealType]: {
        ...prevMenu[mealType],
        [selectedDay]: prevMenu[mealType][selectedDay].filter(({ item }) => item !== itemToRemove),
      },
    }));
  };

  const toggleSelectItem = (item: string): void => {
    if (selectedItems.includes(item)) {
      setSelectedItems((prev) => prev.filter((selected) => selected !== item));
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  const handleAddToMenu = (): void => {
    const menuItems: MenuItemType[] = selectedItems.map((item) => ({
      item,
      type: newMenuItems.NonVeg.includes(item) ? 'non-veg' : 'veg',
    }));

    setMenu((prevMenu) => ({
      ...prevMenu,
      [currentMeal]: {
        ...prevMenu[currentMeal],
        [selectedDay]: menuItems,
      },
    }));
    handleDialogClose();
  };

  const filteredCategories = React.useMemo(() => {
    const searchLower = search.toLowerCase();
    return Object.keys(categorizedItems).reduce<Record<string, string[]>>((acc, category) => {
      const filteredItems = categorizedItems[category].filter((item) => item.toLowerCase().includes(searchLower));
      if (filteredItems.length > 0) {
        acc[category] = filteredItems;
      }
      return acc;
    }, {});
  }, [search, categorizedItems]);

  const filteredUncategorizedItems = uncategorizedItems.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper sx={{ width: '100%', mt: 4, p: { xs: 2, md: 4 } }} elevation={10}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        gap={{ xs: 1.7, sm: 3 }}
        mb={3}
      >
        <Typography variant="h4" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          Update Menu
        </Typography>

        <Stack direction="row" alignItems="stretch" gap={1}>
          <FormControl sx={{ minWidth: 120,mr:0.6 }} size='small'>
            <InputLabel>Day</InputLabel>
            <Select  value={selectedDay} sx={{py:"2px"}} onChange={(e) => { setSelectedDay(e.target.value); }} label="Day">
              {days.map((day) => (
                <MenuItem key={day} value={day}>
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            onClick={handleResetAll}
            color="error"
            sx={{ borderRadius: 1, borderWidth: '2px','&:hover':{
              borderWidth: '2px',
            } }}
          >
            Reset
          </Button>
          <Button variant="contained" color="primary" sx={{ borderRadius: 1, borderWidth: '2px' }}>
            Save
          </Button>
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} mt={5} spacing={4}>
        {mealTypes.map((mealType) => (
          <Box
            key={mealType}
            sx={{
              width: 1,
              p: 3,
              border: '2px solid var(--mui-palette-secondary-main)',
              borderRadius: 1,
            }}
          >
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="h5" color="text.primary">
                {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
              </Typography>

              <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={1}>
                <IconButton onClick={() => {handleResetMealClick(mealType)}} color="primary" size="medium">
                  <ResetIcon fontSize="inherit" />
                </IconButton>
                <Button
                  size="small"
                  onClick={() => {handleAddClick(mealType)}}
                  variant="outlined"
                  sx={{ borderRadius: 1, borderWidth: '2px' }}
                >
                  Add
                </Button>
              </Stack>
            </Stack>
            <Box
              width={1}
              height="25vh"
              mt={2}
              sx={{ backgroundColor: 'var(--mui-palette-background-level3)', borderRadius: 1, p: 2 }}
            >
              {menu[mealType][selectedDay].length === 0 ? (
                <Stack height={1} justifyContent="center" alignItems="center">
                  <Typography variant="body1" color="text.primary">
                    No items added
                  </Typography>
                </Stack>
              ) : (
                <Stack
                  direction="row"
                  alignItems="flex-start"
                  sx={{ overflowY: 'auto', pr: 1 }}
                  flexWrap="wrap"
                  gap={1}
                >
                  {menu[mealType][selectedDay].map((menuItem, index) => (
                    <Chip
                      sx={{ borderRadius: 1 }}
                      key={`${menuItem.item}-${String(index)}`}
                      label={
                        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
                          <Box sx={{backgroundColor: 'var(--mui-palette-background-level3)', borderRadius:"4px", p: "1px"}}>

                          <Stack
                            sx={{
                              p: 0,
                              border: menuItem.type === 'veg' ? '2px solid green' : '2px solid #8C0606',
                              backgroundColor: 'var(--mui-palette-background-level3)',
                              borderRadius: 0.4,
                              borderWidth: '2px',
                            }}
                            alignItems="center"
                            justifyContent="center"
                          >
                            <FiberManualRecordIcon
                              sx={{ fontSize: '13px', color: menuItem.type === 'veg' ? 'green' : '#8C0606' }}
                            />
                          </Stack>
                          </Box>


                          <Stack
                            sx={{
                              flexGrow: 1,
                              textAlign: 'center',
                            }}
                            alignItems="center"
                            justifyContent="center"
                          >
                            {menuItem.item}
                          </Stack>
                        </Stack>
                      }
                      onDelete={() => { handleRemoveItem(mealType, menuItem.item); }}
                      color="primary"
                    />
                  ))}
                </Stack>
              )}
            </Box>
          </Box>
        ))}
      </Stack>

      <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth>
        <DialogTitle>
          <Typography variant="h4" color="text.secondaryChannel">
            Menu Items
          </Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '52vh',
          }}
        >
          <TextField
            fullWidth
            variant="standard"
            placeholder="Search items..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {search ? (
                    <IconButton
                      size="small"
                      onClick={() => {
                        setSearch('');
                      }}
                      edge="end"
                    >
                      <ClearIcon />
                    </IconButton>
                  ) : null}
                </InputAdornment>
              ),
            }}
          />

          <Box p={2} mt={1} mb={1} sx={{ backgroundColor: 'var(--mui-palette-background-level3)', borderRadius: 1 }}>
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                height: '38vh',
                pr: 1,
              }}
            >
              {filteredUncategorizedItems.length === 0 && Object.keys(filteredCategories).length === 0 ? (
                <Stack height={1} justifyContent="center" alignItems="center">
                  <Typography variant="body1" color="text.primary">
                    No items to show
                  </Typography>
                </Stack>
              ) : (
                <>
                  {filteredUncategorizedItems.length > 0 && (
                    <>
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        Others
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                        {filteredUncategorizedItems.map((item) => (
                          <Chip
                            key={item}
                            label={item}
                            color={selectedItems.includes(item) ? 'primary' : 'secondary'}
                            onClick={() => {
                              toggleSelectItem(item);
                            }}
                            sx={{
                              cursor: 'pointer',
                              fontSize: '14px',
                              borderRadius: 1,
                              ...(selectedItems.includes(item) && {
                                backgroundColor: 'var(--mui-palette-primary-main)',
                              }),
                              ...(!selectedItems.includes(item) && {
                                backgroundColor: 'var(--mui-palette-grey-300)',
                                '&:hover': {
                                  backgroundColor: 'var(--mui-palette-grey-400)',
                                },
                              }),
                            }}
                          />
                        ))}
                      </Stack>
                      <Divider sx={{ my: 2 }} />
                    </>
                  )}

                  {Object.keys(filteredCategories).map((category) => (
                    <Box key={category} sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        {category}
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {filteredCategories[category].map((item) => (
                          <Chip
                            key={item}
                            label={item}
                            color={selectedItems.includes(item) ? 'primary' : 'secondary'}
                            onClick={() => {
                              toggleSelectItem(item);
                            }}
                            sx={{
                              cursor: 'pointer',
                              fontSize: '14px',
                              borderRadius: 1,
                              ...(selectedItems.includes(item) && {
                                backgroundColor: 'var(--mui-palette-primary-main)',
                              }),
                              ...(!selectedItems.includes(item) && {
                                backgroundColor: 'var(--mui-palette-grey-300)',
                                '&:hover': {
                                  backgroundColor: 'var(--mui-palette-grey-400)',
                                },
                              }),
                            }}
                          />
                        ))}
                      </Stack>
                      <Divider sx={{ mb: 2, mt: 2.4 }} />
                    </Box>
                  ))}
                </>
              )}
            </Box>
          </Box>

          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleAddToMenu}>
            Add to {currentMeal.charAt(0).toUpperCase() + currentMeal.slice(1)}
          </Button>
        </DialogContent>
      </Dialog>
    </Paper>
  );
}

export default Menu;
