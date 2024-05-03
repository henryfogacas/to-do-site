export default function Button({ addTask }: { addTask: any }) {
    return (
        <>
            <button onClick={() => addTask('')} className="border-0 focus:outline-none py-16px px-50px bg-btn-primary text-white rounded-full">Add task</button>
        </>
    )
}