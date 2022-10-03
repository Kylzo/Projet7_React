import { Link } from 'react-router-dom'
import logo from '../assets/icon.png'
import '../styles/Banner.css'

function Banner() {
	const title = 'Workplace'
	const accueil = 'Accueil'
	const login = 'Connexion'
	const signup = 'Inscription'
	return (
		<div className='groupomania-banner'>
			<img src={logo} alt='logo entreprise Groupomania' className='groupomania-logo' />
			<h1 className='groupomania-title'>{title}</h1>
			<nav className='goupomania-navbar'>
				<Link to="/" className='groupomania-navbarHome'>{accueil}</Link>
				<Link to="/login" className='groupomania-navbarLog'>{login}</Link>
				<Link to="/signup" className='groupomania-navbarSign'>{signup}</Link>
			</nav>
		</div>
	)
}

export default Banner
