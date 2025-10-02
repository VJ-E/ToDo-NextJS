'use client'
import { useState, useEffect } from 'react';

export default function HomePage(){
    const [todos, setTodo] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTodo(){
            const res = await fetch("/api/todos");
            const data = await res.json();
            setTodo(data);
            setLoading(false);
        }
        fetchTodo();
    },[]);

    if(loading) return <p>Loading....</p>;

    return (
        <main>
            <h1>Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo)=>(
                        <tr key={todo._id}>
                            <td>{todo.name}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );

    
}