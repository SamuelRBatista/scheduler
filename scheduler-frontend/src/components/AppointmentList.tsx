import React, { useEffect, useState } from 'react';
import { getAppointments } from '../api/services';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';

interface Appointment {
  id: number;
  date: string;
  status: string;
  user: {
    name: string;
    email: string;
  };
  service: {
    name: string;
    duration: number;
    price: number;
  };
}

export const AppointmentList: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (err) {
        console.error('Erro ao carregar agendamentos:', err);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <Grid container spacing={3}>
      {appointments.map((appt) => (
        <Grid item xs={12} sm={6} key={appt.id}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600}>
                {appt.user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {appt.user.email}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1" fontWeight={500}>
                Serviço: {appt.service.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duração: {appt.service.duration} min | Preço: ${appt.service.price.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                Data: {new Date(appt.date).toLocaleString()} | Status: {appt.status}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
