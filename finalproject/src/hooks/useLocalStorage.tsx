import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValues: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if(typeof initialValues === 'function') {
      return (initialValues as ()=> T)()
    } else { 
      return initialValues
    }
  });



  useEffect(()=> {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}


