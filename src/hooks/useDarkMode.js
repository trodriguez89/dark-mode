import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";


export const useDarkMode = (initialValue) => {
    const [values, setValues] = useLocalStorage(initialValue)

    useEffect(() => {
        if(values === true){
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    }, [values])

    return [values, setValues];
}