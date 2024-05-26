import * as React from 'react';
import type { ErrorResponse } from '@/services/auth';
import type { SuccessResponse } from '@/services/invitation';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { LoadingButton } from '@mui/lab';
import { Grid, IconButton, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useQueryClient } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

import { logger } from '@/lib/default-logger';
import { useSendInvitation } from '@/hooks/mutation/use-invitation';
import { primaryRed, secondaryGrey } from '@/styles/theme/colors';

interface InviteMemberProps {
  onClose: () => void;
}

export default function InviteMember({ onClose }: InviteMemberProps): React.JSX.Element {
  const [questionMarkColor, setQuestionMarkColor] = React.useState('#fff');
  const [privateToken, setPrivateToken] = React.useState<string>('');
  const [errorText, setErrorText] = React.useState<string>('');
  const queryClient = useQueryClient();

  const onSuccess = async (res: AxiosResponse<SuccessResponse>): Promise<void> => {
    await queryClient.invalidateQueries({ queryKey: ['getSentInvitationStatus'] });
    logger.debug('Invitation sent', res);
    onClose();
  };

  const onError = (error: AxiosError<ErrorResponse>): void => {
    if (error?.response?.data?.detail) {
      setErrorText(error?.response?.data?.detail);
    } else {
      setErrorText('Invalid Token');
    }
    logger.error('Invitation error', error);
  };

  const { mutate: sendInvitation, isPending } = useSendInvitation({ onSuccess, onError });

  const handleIconButtonClick = (): void => {
    setQuestionMarkColor('red');
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPrivateToken(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    logger.debug('Private Token', privateToken);
    sendInvitation({ token: privateToken });
  };

  return (
    <Box padding="1rem">
      <Typography variant="h4" marginBottom="1rem">
        Invite Member
      </Typography>

      <Grid container justifyContent="space-between">
        <Grid item xs={4}>
          <Grid
            container
            sx={{ backgroundColor: secondaryGrey[300], height: '16rem', borderRadius: '8px' }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <GroupAddOutlinedIcon sx={{ fontSize: '6rem' }} fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7.5}>
          <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
            <IconButton
              onClick={handleIconButtonClick}
              sx={{ backgroundColor: primaryRed[400], color: questionMarkColor }}
            >
              <QuestionMarkIcon />
            </IconButton>
          </div>

          <form onSubmit={onSubmitHandler}>
            <Stack spacing={2}>
              <Typography variant="h5">Enter Private Token</Typography>
              <TextField onChange={onChangeHandler} size="small" variant="outlined" type="text" />
              <LoadingButton loading={isPending} type="submit" variant="contained">
                Invite
              </LoadingButton>
              {errorText === '' ? (
                <Typography variant="body2" color="text.secondary">
                  Remember to not share your private key publically
                </Typography>
              ) : (
                <Typography variant="body2" color="error">
                  {errorText}
                </Typography>
              )}
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
