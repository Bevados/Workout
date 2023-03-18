import style from './Field.module'

const Field = ({ register, name, options, errors, ...rest }) => {
	return (
		<div>
			<input
				{...register(name, options)}
				{...rest}
				className={style.input}
			></input>
			{errors && <div className={style.error}>{errors}</div>}
		</div>
	)
}

export default Field
