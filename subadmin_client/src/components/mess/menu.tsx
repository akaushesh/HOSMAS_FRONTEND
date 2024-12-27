'use client';

import * as React from 'react';
import { Clear as ClearIcon } from '@mui/icons-material';
import ResetIcon from '@mui/icons-material/Refresh';
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

type MealType = 'breakfast' | 'lunch' | 'dinner';

const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner'];

function Menu(): React.JSX.Element {
  const [menu, setMenu] = React.useState<Record<MealType, string[]>>({
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [currentMeal, setCurrentMeal] = React.useState<MealType>('breakfast');
  const [search, setSearch] = React.useState('');
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const newMenuItems = {
    Indian: ['Idli Sambar', 'Masala Dosa', 'Puri Bhaji', 'Paneer Butter Masala'],
    Continental: ['Bread Jam', 'Rice', 'Dal'],
    Snacks: ['Coconut', 'Upma', 'Poha', 'Paratha'],
    Snacks2: ['Coconut2', 'Upma2', 'Poha2', 'Paratha2'],
    Uncategorized: ['Lassi', 'Chai', 'Roti'],
  };

  // Extract categorized and uncategorized items
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
    setSelectedItems(menu[mealType]);
  };

  const handleResetMealClick = (mealType: MealType): void => {
    setMenu((prevMenu) => ({
      ...prevMenu,
      [mealType]: [],
    }));
  };

  const handleResetAll = (): void => {
    setMenu({
      breakfast: [],
      lunch: [],
      dinner: [],
    });
  };

  const handleDialogClose = (): void => {
    setDialogOpen(false);
    setSearch('');
  };

  const handleRemoveItem = (mealType: MealType, item: string): void => {
    setMenu((prevMenu) => ({
      ...prevMenu,
      [mealType]: prevMenu[mealType].filter((menuItem) => menuItem !== item),
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
    setMenu((prevMenu) => ({
      ...prevMenu,
      [currentMeal]: selectedItems,
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
    <Paper
      sx={{
        minHeight: '65vh',
        width: '100%',
        mt: 4,
        p: { xs: 2, md: 4 },
      }}
      elevation={10}
    >
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

        <Stack direction="row" alignItems="center" gap={1}>
          <Button
            variant="outlined"
            onClick={handleResetAll}
            sx={{
              borderRadius: 1,
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
              },
              px: { xs: 4, sm: 6 },
              py: { xs: 0.5, sm: 1 },
            }}
            color="error"
          >
            Reset
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 1,
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
              },
              px: { xs: 4, sm: 6 },
              py: { xs: 0.5, sm: 1 },
            }}
            color="primary"
          >
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
                <IconButton
                  onClick={() => {
                    handleResetMealClick(mealType);
                  }}
                  color="primary"
                  size="medium"
                >
                  <ResetIcon fontSize="inherit" />
                </IconButton>

                <Button
                size="small"
                onClick={() => {
                  handleAddClick(mealType);
                }}
                variant="outlined"
                sx={{
                  borderRadius: 1,
                  py: 0.5,
                  px: 3,
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
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
              {menu[mealType].length === 0 ? (
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
                  {menu[mealType].map((item, index) => (
                    <Chip
                      sx={{ borderRadius: 1 }}
                      key={`${item}-${String(index)}`}
                      label={item}
                      onDelete={() => {
                        handleRemoveItem(mealType, item);
                      }}
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
                      <Divider sx={{ mb: 2,mt:2.4 }} />
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
