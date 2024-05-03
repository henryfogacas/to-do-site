export default function Button({submitTask}: {submitTask: any}) {
    return (
        <>
            <button onClick={submitTask} className="w-full sm:w-auto h-12 sm:h-auto py-3 px-4 sm:px-6 text-base border-0 focus:outline-none rounded-full text-white bg-primary">Adicionar</button>
        </>
    )
}