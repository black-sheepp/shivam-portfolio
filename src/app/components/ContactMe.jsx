import React from "react";
import Styles from "./ContactMe.module.css";
import AccountNotify from "./AccountNotify";

const ContactMe = () => {
	return (
		<section className=' p-4 lg:px-28'>
			<div className="mb-10">
				<h1 className='text-yellow text-4xl my-4'>Contact Me</h1>
				<div className='xl:flex'>
					<div className="w-11/12 flex flex-col justify-center mb-4">
						<div className="mt-10 text-center flex flex-col justify-center">
							<p className="text-cyan text-2xl">Follow Me:</p>
							<AccountNotify/>
						</div>
						<p className='text-pink text-3xl lg:text-6xl font-semibold text-center'>Want to contact me?</p>
						<p className='text-xl text-white text-center'>
							Please, use the provided form or send an email to &quot;
							<small className='text-2xl lg:text-3xl text-cyan'>shivamguptanitw@gmail.com</small>&quot;:
						</p>
					</div>
					<div className={Styles.form_container}>
						<form className={Styles.form}>
							<div className={Styles.form_group}>
								<label htmlFor='name'>Name</label>
								<input type='text' id='name' name='name' required='' />
							</div>
							<div className={Styles.form_group}>
								<label htmlFor='email'>Email</label>
								<input type='text' id='email' name='email' required='' />
							</div>
							<div className={Styles.form_group}>
								<label htmlFor='textarea'>Your Message: </label>
								<textarea
									name='textarea'
									id='textarea'
									rows={10}
									cols={50}
									required=''
									defaultValue={""}
								/>
							</div>
							<button className={Styles.form_submit_btn} type='submit'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactMe;
