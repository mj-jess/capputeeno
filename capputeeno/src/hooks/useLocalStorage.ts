import { useState } from "react";

export function useLocalStorage<T>(key: string) {
  const initialValue = localStorage.getItem(key) ?? ''
  const [value, setValue] = useState(initialValue ? JSON.parse(initialValue) : '')

  const updateLocalStorage = (value: T) => {
    setValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

  return [value, updateLocalStorage]
}
