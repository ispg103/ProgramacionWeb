import { useContext } from "react";
import { TasksContext } from "../context/TaskContext";

export const useContexts=()=>{
    const context = useContext(TasksContext);

if(!context){
    throw new Error("This Component should be within TaskContextProvider")
}

return{
    ...context
}
}