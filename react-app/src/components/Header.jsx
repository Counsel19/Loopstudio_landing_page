import React from 'react'
import logo from '../images/logo.svg'

const Header = () => {
    return (
			<header className="header">
				<div className="logo">
					<img src={logo} alt="Loopstudious" />
				</div>
				<nav>
					<ul>
						<li>
							<button>About</button>
						</li>
						<li>
							<button>Careers</button>
						</li>
						<li>
							<button>Events</button>
						</li>
						<li>
							<button>Products</button>
						</li>
						<li>
							<button>Support</button>
						</li>
					</ul>
				</nav>

				<div className="menu-btn">
					<div className="btn btn-1"></div>
					<div className="btn btn-2"></div>
					<div className="btn btn-3"></div>
				</div>
			</header>
		);
}

export default Header
