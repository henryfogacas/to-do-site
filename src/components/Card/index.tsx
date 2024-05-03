import Image from "next/image";
import Icon from '../../../public/images/icon.png'

import TaskManager from "../TaskManager";

export default function Card() {
    return (
        <>
            <div className="font-mono p-5 bg-white shadow-lg rounded-lg mx-auto">
                <div className="flex items-center justify-center">
                    <h2 className="mr-2">To do list</h2>
                    <Image
                        src={Icon}
                        alt="Notebook icon"
                        width={30}
                        height={20} />
                </div>
                <TaskManager />
            </div>
        </>
    );
}