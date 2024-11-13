import React from 'react';
import { Typography, Box } from '@mui/material';

function MessageForm() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Message Form</Typography>
      <Typography>Send a message using the form below...</Typography>
    </Box>
  );
}

export default MessageForm;
