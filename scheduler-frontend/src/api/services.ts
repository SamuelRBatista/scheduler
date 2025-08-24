import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getServices = async () => {
  const { data } = await axios.get(`${API_URL}/services`);
  console.log('Serviços cadastrados',data);
  return data;
};

export const createAppointment = async (appointment: {
  userId: number;
  serviceId: number;
  date: string;
}) => {
  const { data } = await axios.post(`${API_URL}/appointments`, appointment);
  return data;
};

export const getAppointments = async () => {
  const response = await axios.get(`${API_URL}/appointments`);
  return response.data;
};

export const createService = async (service: {
  name: string;
  duration: number;
  price: number;
}) => {
   console.log('Dados recebidos no createService:', service);
  const { data } = await axios.post(`${API_URL}/services`, service);
  return data;
};