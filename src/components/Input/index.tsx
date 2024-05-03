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
                placeholder="Tarefas..."
                className="w-full sm:w-auto h-10 sm:h-auto py-2 sm:py-3 px-4 sm:px-6 border-0 focus:outline-none bg-transparent"
                value={inputValue}
                onChange={handleInput}
                onKeyDown={handleInputSubmit}
                id="task-input"
                name="task-input"
            />
        </>
    )
}