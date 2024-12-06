import InPut from "./InPut";
import { useRef } from "react";

export default function NewProject({onAdd}){
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    function HandelSaveProject (){
        const projectTitle = title.current.value
        const projectDesc = description.current.value
        const projectDueDate = dueDate.current.value

        onAdd(
            {
                title:projectTitle,
                description:projectDesc,
                dueDate:projectDueDate
            }
        )

    }

    return(
        <>
            <div className="w-[35rem] mt-16">
                <menu className="flex item-center justify-end gap-4 my-4">
                    <li>
                        <button
                            className="text-stone-800 hover:text-stone-950 py-2"
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button onClick={HandelSaveProject} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <InPut ref={title} label="Title"/>
                    <InPut ref={description} label="Description" textarea/>
                    <InPut ref={dueDate} label="Due Date" type="date"/>
                </div>
            </div>
        </>
    )
}