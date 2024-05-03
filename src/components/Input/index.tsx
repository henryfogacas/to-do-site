'use client'

import { useState } from "react"

export default function Input({ addTask }: { addTask: any }) {
    const [inputValue, setInputValue] = useState('')

    function handleInput(event: any) {
        setInputValue(event.target.value)
    }

    function handleInputSubmit() {
        addTask(inputValue)
        setInputValue('')
    }

    return (
        <>
            <input
                type="text"
                placeholder="Type your task..."
                className="flex-1 border-0 focus:outline-none bg-transparent p-10px"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleInputSubmit}
                id="task-input"
                name="task-input" />
        </>
    )
}