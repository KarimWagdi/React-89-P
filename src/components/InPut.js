import { forwardRef } from "react"
const InPut = forwardRef( function InPut({label,textarea, ...props}, ref){
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    return(
        <>
          <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold text-stone-900">
                {label}
            </label>
            { 
                textarea ? 
                <textarea ref={ref} className={classes} {...props}></textarea>
                : <input ref={ref} className={classes} {...props}></input> 
             }
          </p>  
        </>
    )
})
export default InPut