import React from 'react';
import './styles.css';

export default function Footer() {
	return (
		<div className="footer mb-2">
			<p className="footer-text">
				Copyright

				<a
					href="https://www.tduganenterprise.com/"
					target="_blank"
					rel="noreferrer"
					className="t-link"
				>
					T.Dugan Enterprise
				</a>

				&copy;

				{(new Date().getFullYear())}
			</p>
		</div>
	);
}