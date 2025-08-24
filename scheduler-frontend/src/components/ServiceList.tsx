import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { getServices } from '../api/services';

interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
  description?: string;
}

export const ServiceList: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        console.error('Erro ao carregar serviços:', err);
      }
    };
    fetchServices();
  }, []);

  return (
    <Grid container spacing={2} mt={12}>
      {services.map((service) => (
        <Box key={service.id} sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' }, p: 2 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">{service.name}</Typography>
              {service.description && (
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {service.description}
                </Typography>
              )}
              <Typography variant="body2">Duração: {service.duration} min</Typography>
              <Typography variant="body2">Preço: ${service.price}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};
