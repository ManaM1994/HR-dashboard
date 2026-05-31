"use client";

import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, RootState } from "./store/store";
import { setTheme } from "./store/slices/themeSlice";
import { setUsers, setLoading, setError } from "./store/slices/usersSlice";
import { fetchUsers } from "./dashboard/api";

function ThemeInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) dispatch(setTheme(saved));
  }, [dispatch]);

  useEffect(() => {
    const loadUsers = async () => {
      dispatch(setLoading(true));
      try {
        const users = await fetchUsers();
        dispatch(setUsers(users));
      } catch {
        dispatch(setError("Failed to load users"));
      } finally {
        dispatch(setLoading(false));
      }
    };
    loadUsers();
  }, [dispatch]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return <>{children}</>;
}

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeInitializer>{children}</ThemeInitializer>
    </Provider>
  );
}
