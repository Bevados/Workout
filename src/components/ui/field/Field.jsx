import style from './Field.module.scss'

const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div style={{marginBottom: '1rem'}}>
			<input
				{...register(name, options)}
				{...rest}
				className={style.input}
			/>
			{error && <div className={style.error}>{error}</div>}
		</div>
	)
}

export default Field
