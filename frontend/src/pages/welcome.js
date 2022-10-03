import spinner from '../assets/logo-spinner.png'
import '../styles/welcome.css'


function Welcome() {
	const welcome = " Bienvenue ! "
	const title = "Veuillez vous connecter ou vous inscrire."
	return (
		<div className='groupomania-load'>
			<img src={spinner} alt='logo entreprise Groupomania' className='groupomania-spinner' />
			<h2 className='groupomania-titleLoad'>{title}</h2>
			<h1 className='groupomania-welcomeLoad'>{welcome}</h1>

		</div>
	)
}

export default Welcome