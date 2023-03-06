import { useAuth } from '../../../hooks/useAuth'
import styles from './Header.module.scss'
import {FiArrowLeft} from 'react-icons/fi'
import Hamburger from '../hamburger/Hamburger'

const Header = ({backLink}) => {
	// TODO: useHistory hook

	const {isAuth} = useAuth();

	return (
		<header className={styles.header}>
			<button
				onClick={() => {
					console.log('fff')
				}}
			>
				<FiArrowLeft />
			</button>
			{/* user profile */}
			<Hamburger />
		</header>
	)
}

export default Header