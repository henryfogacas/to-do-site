export default function Button({submitTask}: {submitTask: any}) {
    return (
        <>
            <button onClick={submitTask} className="border-0 focus:outline-none py-16px px-50px bg-btn-primary text-white rounded-full">Add task</button>
        </>
    )
}