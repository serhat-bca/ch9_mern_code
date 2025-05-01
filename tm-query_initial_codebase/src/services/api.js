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

export const updateTask = async (id, task) => {
  const res = await api.put(`/${id}`, task);
  return res.data;
};
