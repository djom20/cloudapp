import React from 'react';
import ReactDOM from 'react-dom';
// import './loginBox.css';

class loginBox extends React.Component {
	render() {
		return (
			<div id="login" class="row">
				<div class="col s12 l6 offset-l6">
					<div class="alt-logo">
						<img src="/resources/images/brand.png" alt=""></img>
					</div>
					<form class="login-form hoverable card-panel z-depth-1">
						<div class="avatar hide">
							<div class="rouner">
								<img ng-model="avatar_img" ng-src="resources/images/user_avatar.png" class="circle" src="resources/images/user_avatar.png"></img>
							</div>
						</div>
						<div class="row js-fields">
							<div class="input-field col s12">
								<input ng-model="username" id="username" type="email" class="validate"></input>
								<label for="email">Usuario/Correo</label>
							</div>
						</div>
						<div class="row js-fields">
							<div class="input-field col s12">
								<input ng-model="password" type="password" class="validate"></input>
								<label for="password">Contraseña</label>
							</div>
						</div>
						<div class="row center-align js-fields">
							<div class="input-field col s12">
								<button ng-click="loginSubmit(username, password)" class="btn waves-effect waves-light light-green" type="submit" name="action">Iniciar Session</button>
								<div class="subsection">
									<a href="#">¿Olvidastes tu contraseña?</a>
									<hr></hr>
									<div class="socialicon">
										<a href="#" class="clearfix">
											<img src="/resources/images/social/facebook.png" alt=""></img>
										</a>
										<a href="#" class="clearfix">
											<img src="/resources/images/social/tweet.png" alt=""></img>
										</a>
										<a href="#" class="clearfix">
											<img src="/resources/images/social/in.png" alt=""></img>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="row preload-login js-preload-login hide">
							<div class="preloader-wrapper active">
								<div class="spinner-layer spinner-blue-only">
									<div class="circle-clipper left">
										<div class="circle"></div>
									</div>
									<div class="gap-patch">
										<div class="circle"></div>
									</div>
									<div class="circle-clipper right">
										<div class="circle"></div>
									</div>
								</div>
							</div>
							<label class="loader-text">Conectando...</label>
						</div>
					</form>
					<div class="helper">
						<p>No tienes una cuenta? <a href="#">Solicitala ya!</a>
						</p>
						<p>Copyright AltiviaOT © Todos los derechos reservados.</p>
						<p>
							<a href="#">Español</a> | <a href="#">Ingles</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default loginBox;
