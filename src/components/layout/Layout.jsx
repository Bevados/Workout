import styles from './Layout.module.scss'
import Header from './header/Header'

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	return (
		<section
			className={`${styles.wrapper} ${!!heading && styles.otherPage}`}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />

			{heading && <h1 className={styles.heading}>{heading}</h1>}

			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout
