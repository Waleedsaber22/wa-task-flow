import axios from "axios";

const TASKS_API_URL =
  process.env.REACT_APP_TASKS_API_URL || "http://localhost:4000/tasks";

export const fetchTasks = async ({ pageParam = 1, column, search }) => {
  const paginationQuery = `_page=${pageParam}&&_per_page=10&_sort=order`;
  const { data } = await axios.get(
    `${TASKS_API_URL}?column=${column}&${search ? "" : paginationQuery}`
  );

  if (search) {
    const searchedTasks = data.filter(
      (t) =>
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase())
    );

    return { data: searchedTasks, items: searchedTasks.length, pages: 1 };
  }
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
  const payload = { ...task };
  delete payload.isUpdating;
  const { data } = await axios.put(`${TASKS_API_URL}/${task.id}`, payload);
  return data;
};

export const deleteTaskApi = async (id) => {
  await axios.delete(`${TASKS_API_URL}/${id}`);
  return id;
};
