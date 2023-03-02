import React, {useState, useEffect} from "react"
import uuid from 'react-uuid';

export default function InboxWindow() {
const [inboxTodo, setInboxTodo] = useState("")
const [inboxTodos, setInboxTodos] = useState([])

function handlePressEnter(e) {
    if(e.key === "Enter" && (inboxTodo !== "")) {
        setInboxTodos([...inboxTodos, inboxTodo])
        setInboxTodo("")  
    }
}

    return (
        <>
            <input className="whitespace-normal" type="text" name="todo" value={inboxTodo} placeholder="type something" onChange={(e) => setInboxTodo(e.target.value)} onKeyDown={handlePressEnter} />
            
            <ul>
                {inboxTodos.map((todo) => (
                    <div key={uuid()} className="flex items-start justify-between border-2">
                        <li>{todo}</li>
                        <button>···</button>
                    </div>
                ))}
            </ul>
        </>
        
    )
}
