'use client'

import { useState, useEffect } from "react";

import Image from "next/image";

import Trash from '../../../public/icons/trash.png'
import Unchecked from '../../../public/images/unchecked.png'
import Checked from '../../../public/images/checked.png'

export default function Tasks({ tasks, deleteTask }: { tasks: any[]; deleteTask: any; }) {
    const [checkedTasks, setCheckedTasks] = useState<boolean[]>(new Array(tasks.length).fill(false));

    const handleTaskClick = (index: number) => {
        const newCheckedTasks = [...checkedTasks];
        newCheckedTasks[index] = !newCheckedTasks[index];
        setCheckedTasks(newCheckedTasks);
    };

    return (
        <>
            <ul className="mt-5 select-none cursor-pointer">
                {tasks.map((task, index) => (
                    <li className="flex justify-between items-center p-1" key={index} onClick={() => handleTaskClick(index)}>
                        <div className="flex items-center">
                            <Image
                                src={checkedTasks[index] ? Checked : Unchecked}
                                alt={checkedTasks[index] ? "Checked icon" : "Unchecked icon"}
                                width={20}
                                className="mr-2"
                            />
                            <span className={checkedTasks[index] ? "line-through" : ""}>{task}</span>
                        </div>
                        <button onClick={(e) => {e.stopPropagation(); deleteTask(index);}}>
                            <Image
                                src={Trash}
                                alt="Trash icon"
                                width={20}
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}