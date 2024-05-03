export default function Tasks({ tasks }: { tasks: any[] }) {
    return (
        <>
            <ul className="p-2 select-none cursor-pointer">
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </>
    )
}