import axios from "axios";

const TASKS_API_URL = "http://localhost:4000/tasks";

export const fetchTasks = async ({ pageParam = 1, column }) => {
  const { data } = await axios.get(
    `${TASKS_API_URL}?column=${column}&_page=${pageParam}&_per_page=10&_sort=order`
  );
  return data;
};

export const fetchTasksCount = async () => {
  const res = await axios.get(TASKS_API_URL);
  return res.data.length;
};

export const createTaskApi = async (task) => {
  const { data } = await axios.post(TASKS_API_URL, task);
  return data;
};

export const updateTaskApi = async (task) => {
  const { data } = await axios.put(`${TASKS_API_URL}/${task.id}`, task);
  return data;
};

export const deleteTaskApi = async (id) => {
  await axios.delete(`${TASKS_API_URL}/${id}`);
  return id;
};
