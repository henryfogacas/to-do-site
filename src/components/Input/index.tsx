'use client'

export default function Input({ inputValue, setInputValue, submitTask }: { inputValue: any, setInputValue: any, submitTask: any }) {
    function handleInput(event: any) {
        setInputValue(event.target.value)
    }

    function handleInputSubmit(event: any) {
        if (event.key == 'Enter')
            submitTask()
    }

    return (
        <>
            <input
                type="text"
                placeholder="Type your task..."
                className="flex-1 border-0 focus:outline-none bg-transparent p-10px"
                value={inputValue}
                onChange={handleInput}
                onKeyDown={handleInputSubmit}
                id="task-input"
                name="task-input"
            />
        </>
    )
}