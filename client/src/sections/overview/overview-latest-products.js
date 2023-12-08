import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { URL } from "config";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CustomModal from "src/components/customModal";
import { AcceptRequestConfirmation } from "../customer/accept-request-confirmation";

function timeAgo(timestamp) {
  const currentDate = new Date();
  const pastDate = new Date(timestamp);

  const timeDifference = currentDate - pastDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return seconds + " seconds ago";
  } else if (minutes < 60) {
    return minutes + " minutes ago";
  } else if (hours < 24) {
    return hours + " hours ago";
  } else {
    return days + " days ago";
  }
}

export const OverviewLatestProducts = (props) => {
  const { sx } = props;

  const [limit, setLimit] = useState(4);
  const [requests, setRequests] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const queryClient = useQueryClient();

  const onAcceptRequest = (product) => {
    setModalProduct(product);
    onOpenModal();
  };

  const onRejectRequest = (product) => {
    const jwt = sessionStorage.getItem("jwt");
    const data = {
      id: product.id,
    };

    const deleteInvitation = {
      method: "delete",
      maxBodyLength: Infinity,
      url: URL + "student/invitation/delete/",
      headers: { Authorization: "Bearer " + jwt },
      data: data,
    };

    axios(deleteInvitation)
      .then(function (response) {
        queryClient.invalidateQueries(["getInvitation"]);
      })
      .catch(function (error) {});
  };

  const {
    data: reqs,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => {
      const jwt = sessionStorage.getItem("jwt");
      const getProfileConfig = {
        maxBodyLength: Infinity,
        headers: {
          Authorization: "Bearer " + jwt,
        },
      };

      const newURL = URL + "student/invitation/view/received/";

      const getProfileResponse = await axios.get(newURL, getProfileConfig);
      setRequests(getProfileResponse?.data);
      return getProfileResponse?.data;
    },
    queryKey: ["getInvitation"],
  });

  const OnClickHandler = () => {
    if (limit === 4) setLimit(100);
    else setLimit(4);
  };

  const finalProducts = requests?.slice(0, limit);

  return (
    <Card sx={sx}>
      <CardHeader title="Group Requests" />
      <List>
        {finalProducts.map((product, index) => {
          const hasDivider = index < finalProducts.length - 1;
          const ago = timeAgo(product.time);

          return (
            <ListItem divider={hasDivider} key={product.id}>
              <ListItemText
                primary={product.group_leader_name}
                primaryTypographyProps={{ variant: "subtitle1" }}
                secondary={`${ago}`}
                secondaryTypographyProps={{ variant: "body2" }}
              />
              <IconButton
                onClick={() => {
                  onAcceptRequest(product);
                }}
                edge="end"
              >
                <SvgIcon>
                  <CheckRoundedIcon />
                </SvgIcon>
              </IconButton>
              <CustomModal open={openModal} onClose={onCloseModal}>
                <AcceptRequestConfirmation product={modalProduct} onClose={onCloseModal} />
              </CustomModal>
              <IconButton
                onClick={() => {
                  onRejectRequest(product);
                }}
                edge="end"
                sx={{ marginLeft: 2 }}
              >
                <SvgIcon>
                  <CloseRoundedIcon />
                </SvgIcon>
              </IconButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Grid container marginTop="1.5rem" justifyContent="center" alignItems="center">
        <Grid item>
          {finalProducts.length === 0 && (
            <Typography variant="body2">No pending requests</Typography>
          )}
        </Grid>
      </Grid>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        {requests.length > 4 && (
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
        )}
      </CardActions>
    </Card>
  );
};

OverviewLatestProducts.propTypes = {
  products: PropTypes.array,
  sx: PropTypes.object,
};
