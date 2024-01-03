import { FC } from "react"

const FormInputItem: FC<InputItemInterface> = ({ type, id, title, placeholder, updateState }) => {

    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text-lg">{title}</span>
            </label>
            <input
                type={type}
                placeholder={placeholder}
                name={id}
                id={id}
                autoComplete="username"
                min={5}
                max={20}
                defaultValue={5}
                onChange={(e) => updateState((prev) => ({ ...prev, [id]: parseInt(e.target.value) }))}
                className="input input-secondary w-full"

            />
        </div>
    )
}

export default FormInputItem