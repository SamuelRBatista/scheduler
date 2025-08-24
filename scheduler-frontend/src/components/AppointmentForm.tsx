import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, MenuItem, Box, Alert } from '@mui/material';
import { getServices, createAppointment } from '../api/services';

interface Service {
  id: number;
  name: string;
}

interface AppointmentFormProps {
  userId: number;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ userId }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [serviceId, setServiceId] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        console.error('Erro ao carregar serviços:', err);
        setError('Não foi possível carregar os serviços.');
      }
    };
    fetchServices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!serviceId || !date) {
      setError('Preencha todos os campos.');
      setSuccess(null);
      return;
    }

    try {
      await createAppointment({ userId, serviceId, date });
      setSuccess('Agendamento criado com sucesso!');
      setError(null);
      setServiceId(0);
      setDate('');
    } catch (err) {
      console.error('Erro ao criar agendamento:', err);
      setError('Erro ao criar o agendamento. Tente novamente.');
      setSuccess(null);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, p: 2 }}>
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={2}>
        <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1 }}>
          <TextField
            select
            label="Serviço"
            value={serviceId}
            onChange={e => setServiceId(Number(e.target.value))}
            fullWidth
            required
          >
            {services.map(service => (
              <MenuItem key={service.id} value={service.id}>
                {service.name}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1 }}>
          <TextField
            label="Data e hora"
            type="datetime-local"
            value={date}
            onChange={e => setDate(e.target.value)}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        <Box sx={{ width: '100%', p: 1 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Agendar
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
