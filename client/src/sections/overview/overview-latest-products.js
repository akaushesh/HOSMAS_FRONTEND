import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import EllipsisVerticalIcon from "@heroicons/react/24/solid/EllipsisVerticalIcon";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

export const OverviewLatestProducts = (props) => {
  const { products = [], sx } = props;

  const [limit, setLimit] = useState(4);

  const OnClickHandler = () => {
    if (limit === 4) setLimit(100);
    else setLimit(4);
  };

  const finalProducts = products.slice(0, limit);

  return (
    <Card sx={sx}>
      <CardHeader title="Group Requests" />
      <List>
        {finalProducts.map((product, index) => {
          const hasDivider = index < finalProducts.length - 1;
          const ago = formatDistanceToNow(product.updatedAt);

          return (
            <ListItem divider={hasDivider} key={product.id}>
              <ListItemText
                primary={product.name}
                primaryTypographyProps={{ variant: "subtitle1" }}
                secondary={`${ago} ago`}
                secondaryTypographyProps={{ variant: "body2" }}
              />
              <IconButton edge="end">
                <SvgIcon>
                  <CheckRoundedIcon />
                </SvgIcon>
              </IconButton>
              <IconButton edge="end" sx={{ marginLeft: 2 }}>
                <SvgIcon>
                  <CloseRoundedIcon />
                </SvgIcon>
              </IconButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          onClick={OnClickHandler}
          endIcon={
            <SvgIcon fontSize="small">
              {limit === 4 ? <ArrowRightIcon /> : <ArrowLeftIcon />}
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          {limit === 4 ? "View all" : "View Less"}
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestProducts.propTypes = {
  products: PropTypes.array,
  sx: PropTypes.object,
};
