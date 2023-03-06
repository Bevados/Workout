import styles from './Hamburger.module.scss'
import { menu } from './menu.data'

const Menu = ({isShow}) => {
	const logoutHandler = () => {}

	return (
		<nav className={`${styles.menu} ${isShow ? styles.show : ''}`}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						{item.title}
						{/* <link to={item.link}>{item.title}</link> */}
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
