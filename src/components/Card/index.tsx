import Image from "next/image";
import Clipboard from '../../../public/icons/clipboard.svg'
import Logo from '../../../public/images/Preto_dt_branco.png'

import TaskManager from "../TaskManager";

export default function Card() {
    return (
        <>
            <div className="p-12">
                <div className="flex justify-center mb-6">
                    <Image
                        src={Logo}
                        alt="Logo da Trindtech"
                        width={200}
                    />
                </div>
                <div className="bg-white shadow-xl rounded-xl mx-2 sm:mx-5 md:mx-auto w-full sm:w-auto max-w-xs sm:max-w-md md:max-w-lg">
                    <div className="flex items-center justify-center bg-black text-white p-5 rounded-t-lg">
                        <h1 className="mr-2 text-3xl text-bold">Lista de tarefas</h1>
                        <Image
                            src={Clipboard}
                            alt="Notebook icon"
                            width={30}
                            height={20} />
                    </div>
                    <div className="p-10">
                        <TaskManager />
                    </div>
                </div>
            </div>
        </>
    );
}