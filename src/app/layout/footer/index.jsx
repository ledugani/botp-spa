import React from 'react';

export default function Footer() {
	return <div className="footer">
		<p className="footer-text">
			Copyright

			<a href="https://www.tduganenterprise.com/" target="_blank">
				T.Dugan Enterprise
			</a>

			&copy;

			{(new Date().getFullYear())}
		</p>
	</div>
}