'use client'

import { useState } from "react"
import Tasks from "../Tasks"
import Input from "../Input"
import Button from "../Button"

export default function TaskManager() {
    const [task, setTask] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    function addTask(newTask: string) {
        setTask([...task, newTask])
    }

    function submitTask() {
        if (inputValue !== '') {
            addTask(inputValue);
            setInputValue('');
        }
    }


    function deletetask(taskIndex: number) {
        const newTasks = task.filter((_, index) => index !== taskIndex)
        setTask(newTasks)
    }

    return (
        <>
            <div className="flex items-center bg-row-primary space-x-1 mt-5 rounded-full">
                <Input inputValue={inputValue} setInputValue={setInputValue} submitTask={submitTask}/>
                <Button submitTask={submitTask} />
            </div>
            <Tasks tasks={task} deleteTask={deletetask}/>
        </>
    )
}