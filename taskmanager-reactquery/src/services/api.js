import axios from "axios";

const API = "http://localhost:3001/tasks";

const api = axios.create({ baseURL: API });

export const fetchTasks = async () => {
  const res = await api.get("/");
  return res.data;
};

export const createTask = async (task) => {
  const res = await api.post("/", task);
  return res.data;
};

export const updateTask = async (task) => {
  const res = await api.put(`/${task.id}`, task);
  return res.data;
};

export const deleteTask = async (task) => {
  const res = await api.delete(`/${task.id}`);
  return res.data;
}
