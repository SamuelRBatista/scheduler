import React from 'react';
import { Typography, Container, Card, CardContent, Divider, Fab, Box, Grid} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AppointmentList } from '../components/AppointmentList';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
   const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/schedule');
  }

  return (
    <Container maxWidth="md" sx={{ mt: 12, mb: 6 }}>
      {/* Header do card */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          📅 Meus Agendamentos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Visualize e gerencie seus agendamentos de forma rápida e prática.
        </Typography>
      </Box>

      {/* Card geral */}
      <Card
        sx={{
          borderRadius: 5,
          boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
          p: 3,
          background: "linear-gradient(145deg, #ffffff, #f3f6f9)",
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Agendamentos Atuais
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {/* Grid para agendamentos */}
          <Grid container spacing={3}>
            <AppointmentList>
              {/** Supondo que AppointmentList já retorna uma lista de JSX */}
            </AppointmentList>
          </Grid>

          {/* Botão flutuante */}
          <Fab
            color="primary"
            aria-label="add"
            sx={{
              position: "fixed",
              bottom: 32,
              right: 32,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              "&:hover": {
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              },
            }}
            onClick={handleAddClick}
            
          >
            <AddIcon  />
          </Fab>
        </CardContent>
      </Card>
    </Container>
  );
};
