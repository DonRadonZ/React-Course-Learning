import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key); //returns null if key is not present
        if (storedValue === null) return []; //early return
        return storedValue ? JSON.parse(storedValue) : initialState;
      });

      useEffect(
        function(){
        localStorage.setItem('watched', JSON.stringify(value));
      },
      [value,key]
      );

    return [value, setValue];
}