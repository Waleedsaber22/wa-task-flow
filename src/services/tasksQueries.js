import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchTasks,
  createTaskApi,
  updateTaskApi,
  deleteTaskApi,
  fetchTasksCount,
} from "./tasksApi";

import { useInfiniteQuery } from "@tanstack/react-query";

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
};

export const useTasksByColumn = (column, search) => {
  return useInfiniteQuery({
    queryKey: [`tasks`, column, search],
    queryFn: ({ pageParam = 1 }) => fetchTasks({ pageParam, column, search }),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.next) return undefined;
      return pages.length + 1;
    },
    placeholderData: (data) => data,
  });
};

export const useTasksCount = () => {
  return useQuery({
    queryKey: ["tasks-count"],
    queryFn: fetchTasksCount,
  });
};

export const useAddTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTaskApi,
    onSuccess: (task) => {
      // invalidate only that column
      queryClient.invalidateQueries({
        queryKey: ["tasks", task.column],
      });

      // invalidate total count
      queryClient.invalidateQueries({
        queryKey: ["tasks-count"],
      });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTaskApi,
    onSuccess: (_, variables) => {
      if (variables.isUpdating) {
        queryClient.invalidateQueries({
          queryKey: ["tasks", variables.column],
        });
      } else {
        queryClient.invalidateQueries({
          queryKey: ["tasks"],
        });
      }
    },
  });
};

export const useDeleteTask = (deletedTask) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTaskApi,
    onSuccess: () => {
      // invalidate only that column
      queryClient.invalidateQueries({
        queryKey: ["tasks", deletedTask.column],
      });

      // invalidate total count
      queryClient.invalidateQueries({
        queryKey: ["tasks-count"],
      });
    },
  });
};
