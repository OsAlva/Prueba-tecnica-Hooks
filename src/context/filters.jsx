import { createContext,useState } from "react";

//1.Crear el contexto y luego este es el contexto que tenemos que consumir    
export const FiltersContext = createContext();

//2.Crear el Provider, para proveer el contenido(este envuelve a la aplicacion) y este a la vez nos provee el acceso al contexto
//children -> todo lo que envuelve
export function FiltersProvider({children}){

    const [filters,setFilters] =  useState({
        category:'all',
        minPrice: 0  
    })


    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
        {children}
         </FiltersContext.Provider>
    )
}
