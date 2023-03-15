import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button
				text={isAuth ? 'New' : 'Sign in'}
				clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}
			/>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/* TODO counters */}
		</Layout>
	)
}

export default Home
