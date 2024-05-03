'use client'

import { useState } from "react"
import Tasks from "../Tasks"
import Input from "../Input"
import Button from "../Button"

export default function TaskManager() {
    const [task, setTask] = useState<string[]>([])

    function addTask(newTask: string) {
        setTask([...task, newTask])
    }
    return (
        <>
            <div className="flex items-center bg-row-primary space-x-1 mt-5 rounded-full">
                <Input addTask={addTask} />
                <Button addTask={addTask} />
            </div>
            <Tasks tasks={task} />
        </>
    )
}