'use client';

import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme, type Theme } from '@mui/material/styles';

export default function MenuItem(): React.JSX.Element {
  const [menu, setMenu] = React.useState<Record<string, string[]>>({
    Uncategorized: ['Lassi', 'Chai', 'Roti'],
    Indian: ['Idli Sambar', 'Masala Dosa', 'Puri Bhaji', 'Paneer Butter Masala'],
    Continental: ['Bread Jam', 'Rice', 'Dal'],
    NonVeg: ['Eggs', 'Omlette', 'Egg Curry', 'Half Fry'],
    Snacks: ['Coconut', 'Upma', 'Poha', 'Paratha'],
  });

  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogType, setDialogType] = React.useState('');
  const [currentCategory, setCurrentCategory] = React.useState('');
  const [newCategoryName, setNewCategoryName] = React.useState('');
  const [newItem, setNewItem] = React.useState('');
  const [itemsBuffer, setItemsBuffer] = React.useState<string[]>([]);
  const [itemAlreadyExists, setItemAlreadyExists] = React.useState(false);
  const [categoryAlreadyExists, setCategoryAlreadyExists] = React.useState(false);

  const theme: Theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const checkItemExists = (item: string): boolean => {
    const lowerCaseItem = item.toLowerCase();
    return Object.values(menu)
      .flat()
      .some((existingItem) => existingItem.toLowerCase() === lowerCaseItem);
  };

  const checkCategoryExists = (category: string): boolean => {
    const lowerCaseCategory = category.toLowerCase();
    return Object.keys(menu).some((existingCategory) => existingCategory.toLowerCase() === lowerCaseCategory);
  };

  const handleOpenDialog = (type: string, category = ''): void => {
    setDialogType(type);
    setCurrentCategory(category);
    setOpenDialog(true);
    setNewCategoryName(category);
    setItemsBuffer([]);
    setNewItem('');
  };

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
    setNewCategoryName('');
    setNewItem('');
    setItemsBuffer([]);
    setItemAlreadyExists(false);
    setCategoryAlreadyExists(false);
  };

  const handleAddItem = (): void => {
    if (newItem && !itemsBuffer.includes(newItem)) {
      setItemsBuffer((prev) => [...prev, newItem]);
      setNewItem('');
      setItemAlreadyExists(false);
    }
  };

  const handleRemoveBufferedItem = (item: string): void => {
    setItemsBuffer((prev) => prev.filter((i) => i !== item));
  };

  const handleCreateCategory = (): void => {
    if (newCategoryName && itemsBuffer.length > 0) {
      setMenu((prev) => ({
        ...prev,
        [newCategoryName]: itemsBuffer,
      }));
      handleCloseDialog();
    }
  };

  const handleAddToCategory = (): void => {
    if (currentCategory && itemsBuffer.length > 0) {
      setMenu((prev) => ({
        ...prev,
        [currentCategory]: [...prev[currentCategory], ...itemsBuffer],
      }));
      handleCloseDialog();
    }
  };

  const handleDeleteTransferCategory = (): void => {
    setMenu((prev) => {
      const updatedMenu = { ...prev };
      updatedMenu['Uncategorized'] = [...updatedMenu['Uncategorized'], ...updatedMenu[currentCategory]];
      const { [currentCategory]: _, ...rest } = updatedMenu;
      return rest;
    });
    handleCloseDialog();
  };

  const handleDeleteCategory = (): void => {
    setMenu((prev) => {
      const updatedMenu = { ...prev };
      const { [currentCategory]: _, ...rest } = updatedMenu;
      return rest;
    });
    handleCloseDialog();
  };

  const handleRenameCategory = (): void => {
    if (newCategoryName && currentCategory !== newCategoryName) {
      setMenu((prev) => {
        const updatedMenu = { ...prev, [newCategoryName]: prev[currentCategory] };
        const { [currentCategory]: _, ...rest } = updatedMenu;
        return rest;
      });
      handleCloseDialog();
    }
  };

  const handleRemoveItem = (category: string, item: string): void => {
    setMenu((prev) => {
      const updatedCategory = prev[category].filter((i) => i !== item);
      const updatedMenu = { ...prev, [category]: updatedCategory };
      if (updatedCategory.length === 0 && category !== 'Uncategorized') {
        const { [category]: _, ...rest } = updatedMenu;
        return rest;
      }
      return updatedMenu;
    });
  };

  const sortedCategories = ['Uncategorized', ...Object.keys(menu).filter((cat) => (cat !== 'Uncategorized'&& cat !=='NonVeg')),'NonVeg'];

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
        gap={{ xs: 1.9, sm: 3 }}
        mb={3}
      >
        <Typography
          variant="h4"
          fontSize={{ xs: '1.7rem', sm: '2rem' }}
          sx={{ textAlign: { xs: 'center', sm: 'left' } }}
        >
          Menu Items Management
        </Typography>
        <Button
          variant="contained"
          sx={{ borderRadius: 1, px: { xs: 4, sm: 6 }, py: { xs: 0.5, sm: 1 } }}
          onClick={() => {
            handleOpenDialog('addCategory');
          }}
        >
          Add Category
        </Button>
      </Stack>

      <Box p={2} mt={1} mb={1} sx={{ backgroundColor: 'var(--mui-palette-background-level3)', borderRadius: 1 }}>
        <Box sx={{ flex: 1, overflowY: 'auto', height: '48vh', pr: 1 }}>
          {sortedCategories.map((category, idx) => (
            <Box key={category} mb={sortedCategories.length - 1 !== idx ? 6 : 2}>
              <Stack direction="row" alignItems="flex-end" gap={2}>
                <Typography variant="h6" fontSize="19px" color="text.secondary">
                  {category==='Uncategorized' ? 'Others' : category}
                </Typography>
                <Stack direction="row" gap={1}>
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: 'var(--mui-palette-grey-300)',
                      '&:hover': {
                        backgroundColor: 'var(--mui-palette-grey-400)',
                        color: 'var(--mui-palette-primaty-main)',
                      },
                    }}
                    onClick={() => {
                      handleOpenDialog('addItem', category);
                    }}
                  >
                    <AddIcon sx={{ fontSize: '18px', m: '1px' }} />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{
                      display: (category === 'Uncategorized'|| category ==='NonVeg') ? 'none' : 'flex',
                      backgroundColor: 'var(--mui-palette-grey-300)',
                      '&:hover': {
                        backgroundColor: 'var(--mui-palette-grey-400)',
                        color: 'var(--mui-palette-primaty-main)',
                      },
                    }}
                    onClick={() => {
                      handleOpenDialog('renameCategory', category);
                    }}
                  >
                    <EditIcon sx={{ fontSize: '18px', m: '1px' }} />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{
                      display: (category === 'Uncategorized'|| category ==='NonVeg') ? 'none' : 'flex',
                      backgroundColor: 'var(--mui-palette-grey-300)',
                      '&:hover': {
                        backgroundColor: 'var(--mui-palette-grey-400)',
                        color: 'var(--mui-palette-primaty-main)',
                      },
                    }}
                    onClick={() => {
                      handleOpenDialog('deleteCategory', category);
                    }}
                  >
                    <DeleteIcon sx={{ fontSize: '18px', m: '1px' }} />
                  </IconButton>
                </Stack>
              </Stack>
              <Divider sx={{ mt: 0.7, mb: 1.7 }} />
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {menu[category]?.map((item: string) => (
                  <Chip
                    key={item}
                    label={item}
                    color="primary"
                    onDelete={() => {
                      handleRemoveItem(category, item);
                    }}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>
          <Typography variant="h4" fontSize={{ xs: '1.7rem', sm: '2rem' }} color="primary">
            {dialogType === 'addCategory' ? (
              'Add Category'
            ) : dialogType === 'addItem' ? (
              `Add Items to ${currentCategory}`
            ) : dialogType === 'deleteCategory' ? (
              `Delete Category ${currentCategory}`
            ) : (
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                gap={{ xs: 0, md: 1 }}
                alignItems={{ xs: 'flex-start', md: 'flex-end' }}
              >
                Rename Category{' '}
                <span style={{ marginLeft: 1, fontSize: '21px', color: 'var(--mui-palette-secondary-main)' }}>
                  {currentCategory}
                </span>
              </Stack>
            )}
          </Typography>
        </DialogTitle>
        <DialogContent>
          {(dialogType === 'addCategory' || dialogType === 'renameCategory') && (
            <TextField
              fullWidth
              label="Category Name"
              value={newCategoryName}
              onChange={(e) => {
                setNewCategoryName(e.target.value);
                setCategoryAlreadyExists(checkCategoryExists(e.target.value));
              }}
              error={categoryAlreadyExists}
              helperText={categoryAlreadyExists ? (isSmallScreen ? 'Category already exists' : null) : null}
              InputProps={{
                endAdornment: categoryAlreadyExists && (
                  <InputAdornment position="end" sx={{ gap: 0.3, pb: 1 }}>
                    <Chip
                      size="small"
                      label="Category already exists"
                      sx={{
                        display: { xs: 'none', sm: 'block' },
                        background: '#fbe8e8',
                        color: 'var(--mui-palette-primary-main)',
                        borderRadius: 10,
                        px: 1,
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              margin="dense"
            />
          )}
          {(dialogType === 'addCategory' || dialogType === 'addItem') && (
            <Box
              p={1.5}
              mt={dialogType === 'addCategory' ? 1.6 : 0}
              sx={{
                ...(((dialogType === 'addCategory' && newCategoryName === '') || categoryAlreadyExists) && {
                  opacity: 0.5,
                  pointerEvents: 'none',
                }),

                background: 'var(--mui-palette-background-level3)',
                borderRadius: 1,
              }}
            >
              <TextField
                fullWidth
                placeholder="Add Item"
                variant="standard"
                value={newItem}
                onChange={(e) => {
                  const value = e.target.value.trim(); // Trimming whitespace
                  setNewItem(value);
                  setItemAlreadyExists(checkItemExists(value));
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && newItem && !itemAlreadyExists) {
                    handleAddItem();
                  }
                }}
                sx={{
                  mb: 2,
                  background: 'var(--mui-palette-background-level3)',
                  '& .MuiInputBase-input': {
                    background: 'var(--mui-palette-background-level3)',
                  },
                }}
                error={itemAlreadyExists}
                helperText={itemAlreadyExists ? (isSmallScreen ? 'Item already exists' : null) : null}
                InputProps={{
                  endAdornment: newItem && (
                    <InputAdornment position="end" sx={{ gap: 0.3, pb: 1 }}>
                      {itemAlreadyExists ? (
                        <Chip
                          size="small"
                          label="Item already exists"
                          sx={{
                            display: { xs: 'none', sm: 'block' },
                            background: '#fbe8e8',
                            color: 'var(--mui-palette-primary-main)',
                            borderRadius: 10,
                            px: 1,
                          }}
                        />
                      ) : null}
                      <IconButton
                        color="primary"
                        sx={{
                          backgroundColor: '#fbe8e8',
                          '&:hover': { backgroundColor: '#fbd3d3' },
                          '&:disabled': { background: ' var(--mui-palette-grey-200)' },
                        }}
                        size="small"
                        onClick={handleAddItem}
                        disabled={!newItem || itemAlreadyExists}
                      >
                        <CheckIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        color="primary"
                        size="small"
                        sx={{
                          backgroundColor: '#fbe8e8',
                          '&:hover': { backgroundColor: '#fbd3d3' },
                        }}
                        onClick={() => {
                          setNewItem('');
                          setItemAlreadyExists(false);
                        }}
                      >
                        <ClearIcon fontSize="inherit" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  width: 1,
                  p: 1,
                  borderRadius: 1,
                  background: 'white',
                }}
              >
                <Box height="14vh" sx={{ overflowY: 'auto', overflowX: 'hidden' }} width={1}>
                  {itemsBuffer.length === 0 ? (
                    <Stack justifyContent="center" height={1} alignItems="center">
                      <Typography variant="body1" color="text.primary">
                        No items added
                      </Typography>
                    </Stack>
                  ) : (
                    <Stack direction="row" alignItems="flex-start" sx={{ pr: 1 }} flexWrap="wrap" gap={1}>
                      {itemsBuffer.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          sx={{
                            backgroundColor: 'var(--mui-palette-grey-300)',
                            '&:hover': {
                              backgroundColor: 'var(--mui-palette-grey-400)',
                            },
                          }}
                          color="secondary"
                          onDelete={() => {
                            handleRemoveBufferedItem(item);
                          }}
                        />
                      ))}
                    </Stack>
                  )}
                </Box>
              </Box>
            </Box>
          )}

          {dialogType === 'deleteCategory' && (
            <Box mb={1}>
              <Typography variant="h6" fontSize="20px" color="text.primary">
                Are you sure you want to delete this category ?
              </Typography>
              <Typography variant="body2" color="text.secondary" lineHeight={1.2} fontSize="13px" mt="2px">
                Either you can delete all the items in the category with it or transfer the items to Uncategorized and
                delete the category.
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ mb: 0.2 }}>
          {dialogType === 'addCategory' && (
            <Button
              onClick={handleCreateCategory}
              disabled={!newCategoryName || itemsBuffer.length === 0 || categoryAlreadyExists}
              variant="contained"
              sx={{ borderRadius: 1, py: 0.5 }}
              color="primary"
            >
              Create
            </Button>
          )}
          {dialogType === 'addItem' && (
            <Button
              onClick={handleAddToCategory}
              disabled={itemsBuffer.length === 0}
              variant="contained"
              sx={{ borderRadius: 1, py: 0.5 }}
              color="primary"
            >
              Add
            </Button>
          )}
          {dialogType === 'renameCategory' && (
            <Button
              onClick={handleRenameCategory}
              disabled={!newCategoryName || categoryAlreadyExists}
              variant="contained"
              sx={{ borderRadius: 1, py: 0.5 }}
              color="primary"
            >
              Rename
            </Button>
          )}
          {dialogType === 'deleteCategory' && (
            <Box>
              <Button
                sx={{ borderRadius: 1, py: 0.5, ml: 1, mt: 1 }}
                color="primary"
                onClick={handleDeleteCategory}
                variant="contained"
              >
                Delete
              </Button>
              <Button
                sx={{ borderRadius: 1, py: 0.5, ml: 1, mt: 1 }}
                color="primary"
                onClick={handleDeleteTransferCategory}
                variant="contained"
              >
                Transfer & Delete
              </Button>
            </Box>
          )}
          <Button
            sx={{ borderRadius: 1, mt: dialogType === 'deleteCategory' ? 1 : 0, py: 0.5 }}
            color="primary"
            variant="outlined"
            onClick={handleCloseDialog}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
