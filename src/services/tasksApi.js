import axios from "axios";

const API_URL = "http://localhost:4000/tasks";

export const fetchTasks = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createTaskApi = async (task) => {
  const { data } = await axios.post(API_URL, task);
  return data;
};

export const updateTaskApi = async (task) => {
  const { data } = await axios.put(`${API_URL}/${task.id}`, task);
  return data;
};

export const deleteTaskApi = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
