import React, { useState } from 'react';
import { Fab, Modal, TextField, Button, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createService } from '../api/services';
import { ServiceList } from '../components/ServiceList';

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export const ServicesPage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newService, setNewService] = useState({
    name: '',
    duration: '',
    price: '',
    description: ''
  });

  const handleAddClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setNewService({ name: '', duration: '', price: '', description: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewService(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createService({
        name: newService.name,
        duration: parseInt(newService.duration),
        price: parseFloat(newService.price),      
      });
      handleCloseModal();
      // Recarregar a página para ver os novos serviços
      window.location.reload();
    } catch (err) {
      console.error('Erro ao criar serviço:', err);
    }
  };

  return (
    <>
     
      <ServiceList />

      {/* Botão flutuante para adicionar serviço */}
      <Fab
        color="primary"
        aria-label="add-service"
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
        <AddIcon />
      </Fab>

      {/* Modal de cadastro */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            Adicionar Novo Serviço
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nome do Serviço"
              name="name"
              value={newService.name}
              onChange={handleInputChange}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Duração (minutos)"
              name="duration"
              type="number"
              value={newService.duration}
              onChange={handleInputChange}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Preço"
              name="price"
              type="number"
              value={newService.price}
              onChange={handleInputChange}
              inputProps={{ step: "0.01" }}
              required
              sx={{ mb: 2 }}
            />           
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
              <Button onClick={handleCloseModal}>Cancelar</Button>
              <Button type="submit" variant="contained">Salvar</Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};