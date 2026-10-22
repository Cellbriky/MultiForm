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
        <DialogContent sx={{}} >
          
          <Box sx={{mb:4}}>
            <img src="icon-thank-you.svg" />
          </Box>
          <Header>Thank you!</Header>
          <div>Thanks for confirming your subscription!<br/> We hope you have fun using our platform. If you ever need support, please feel free to email us at support@israel.com</div>
          <Box>
            <Button
              variant="contained"
              onClick={onClose}
              sx={{
                backgroundColor: '#483FFE',
                textTransform: 'none',
                px: 5,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#3728db',
                },
              }}
            >
              Done
            </Button>
          </Box>
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
