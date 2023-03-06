import { useState } from "react"
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import Menu from "./Menu"

import styles from './Hamburger.module.scss'


const Hamburger = () => {
	const [isShow, setIsShow] = useState(false);

	return (
		<div className={styles.wrapper}>
			<button onClick={() =>{setIsShow(!isShow)}}>
				{isShow ? <IoClose color='white' /> : <CgMenuRight color='white' />}
			</button>

			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger