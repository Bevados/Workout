import React from 'react'

import styles from './Button.module.scss'

const Button = ({text, clickHandler, size = 'xl'}) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={`${styles.button} ${styles[size]}`}
				onClick={clickHandler}
			>
				{text}
			</button>
		</div>
	)
}

export default Button
