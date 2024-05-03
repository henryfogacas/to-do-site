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

// Recebe uma prop tasks que é um array de strings do tipo any
// Retorna uma lista não ordenada com as tarefas
// Cada tarefa é um item da lista
// O conteúdo do item é a tarefa
// O key é o index da tarefa
// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.