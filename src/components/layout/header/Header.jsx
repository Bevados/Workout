import { IoMdArrowBack } from 'react-icons/io'



import { useAuth } from '../../../hooks/useAuth';



import Hamburger from '../hamburger/Hamburger';



import styles from './Header.module.scss';


const Header = ({ backLink }) => {
	// TODO: useHistory hook

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button
				onClick={() => {
					console.log('fff')
				}}
			>
				<IoMdArrowBack />
			</button>
			{/* user profile */}
			<Hamburger />
		</header>
	)
}

export default Header