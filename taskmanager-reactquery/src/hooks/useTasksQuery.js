import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../services/api";

export const useTasksQuery = () => {
  return useQuery({ queryKey: ["tasks"], queryFn: fetchTasks });
};
