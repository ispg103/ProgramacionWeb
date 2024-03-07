import { Button } from '../Button/Button'
export function Form(){
    return(
        <>
        <section>
            <form className="TodoForm">
                <input type="text" className="Todo-input" placeholder="Enter your task"/>
            </form>
            <Button/>
        </section>
        </>
    )
}