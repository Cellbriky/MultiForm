'use client';

import { Dialog, Typography, Button, Box } from '@mui/material';
import { DialogContainer, DialogContent, Header } from './styles';
type SuccessDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function SuccessDialog({ open, onClose }: SuccessDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      aria-labelledby="success-dialog-title"
      aria-describedby="success-dialog-description"
    >
      <DialogContainer>
        <DialogContent sx={{}}>
          <Box sx={{ mb: 2, mt: 6 }}>
            <img src="icon-thank-you.svg" />
          </Box>
          <Header>Thank you!</Header>
          <Box sx={{ mb: 6, color: ' #92929c' }}>
            Thanks for confirming your subscription!
            <br /> We hope you have fun using our <br /> platform. If you ever need support, <br />{' '}
            please feel free to email us at support@israel.com
          </Box>
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
