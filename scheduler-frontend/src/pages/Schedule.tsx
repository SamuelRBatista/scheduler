import React from 'react';
import { Container, Typography } from '@mui/material';
import { AppointmentForm } from '../components/AppointmentForm';

export const Schedule: React.FC = () => {
  const userId = 1; // Pode vir de login/contexto

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Agendar Serviço
      </Typography>
      <AppointmentForm userId={userId} />
    </Container>
  );
};
