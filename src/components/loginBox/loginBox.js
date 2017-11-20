import React from 'react';
import ReactDOM from 'react-dom';

import './loginBox.css';

class loginBox extends React.Component {
	render() {
		return (
			<div id="login" class="row">
				<div class="col col-sm-12 col-lg-6 offset-lg-6">
					<div class="alt-logo">
						<img src="/public/images/brand.png" alt=""></img>
					</div>
					<form class="login-form hoverable card-panel">
						<div class="row js-fields">
							<div class="col col-sm-12">
								<input placeholder="Usuario/Correo" id="username" type="email" class="form-control"></input>
							</div>
						</div>
						<div class="row js-fields">
							<div class="col col-sm-12">
								<input placeholder="Contraseña" type="password" class="form-control"></input>
							</div>
						</div>
						<div class="row center-align js-fields">
							<div class="input-field col col-sm-12">
								<button class="btn btn-primary" type="submit" name="action">Iniciar Session</button>
								<div class="subsection">
									<a href="#">¿Olvidastes tu contraseña?</a>
									<hr></hr>
									<div class="socialicon clearfix">
										<a href="#">
											<img src="/public/images/social/facebook.png" alt="Facebook"></img>
										</a>
										<a href="#">
											<img src="/public/images/social/tweet.png" alt="Tweeter"></img>
										</a>
										<a href="#">
											<img src="/public/images/social/in.png" alt="Linkin"></img>
										</a>
									</div>
								</div>
							</div>
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
