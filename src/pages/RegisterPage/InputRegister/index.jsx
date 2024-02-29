import { forwardRef } from "react"

export const InputRegister = forwardRef(({ label, errors, ...rest}, ref ) => {
    return (
        <div>
            <label>{label}</label>
            <input ref={ref} type="text" {...rest}/>
            {errors ? <p>{errors.message}</p> : null}
        </div>
    )
})
