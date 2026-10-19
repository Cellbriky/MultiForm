'use client';

import { Dialog, DialogContent, Typography, Button, Box } from '@mui/material';

type SuccessDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function SuccessDialog({ open, onClose }: SuccessDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      aria-labelledby="success-dialog-title"
      aria-describedby="success-dialog-description"
    >
      <DialogContent sx={{ textAlign: 'center', py: 5, px: 3 }}>
        <div style={{ fontSize: 68, color: '#22c55e', }} />

        <div id="success-dialog-title" >
          Submission Successful!
        </div>

        <Typography
          id="success-dialog-description"
          color="text.secondary"
          sx={{ mb: 3, lineHeight: 1.7 }}
        >
          Thank you for completing your subscription form. Your information has been submitted
          successfully.
        </Typography>

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
    </Dialog>
  );
}
