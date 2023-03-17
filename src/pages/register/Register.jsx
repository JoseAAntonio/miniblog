import styles from "./Register.module.css";

import { useState, useEffect } from "react";

export const Register = () => {
	return (
		<div>
			<h1>Cadastre-separa postar</h1>
			<p>Crie seu usuário e compartilhe suas histórias</p>
			<form>
				<label>
					<span>Nome:</span>
					<input
						type='text'
						name='displayName'
						required
						placeholder='Nome do usuário'
					/>
				</label>
				<label>
					<span>Email:</span>
					<input
						type='email'
						name='email'
						required
						placeholder='Insira seu email'
					/>
				</label>
				<label>
					<span>Senha:</span>
					<input
						type='password'
						name='password'
						required
						placeholder='Insira sua senha'
					/>
				</label>
				<label>
					<span>Confirmação de senha:</span>
					<input
						type='password'
						name='ConfirmPassword'
						required
						placeholder='Confirme a sua senha'
					/>
				</label>
				<button className='btn'>Cadastrar</button>
			</form>
		</div>
	);
};
