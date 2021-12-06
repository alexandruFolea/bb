import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {
	SiHomeassistant,
	SiCapacitor,
	SiHarbor,
	SiOpenid,
} from 'react-icons/si';

const Navigation = () => {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);
	const closeMobileMenu = () => setOpen(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 719) {
				closeMobileMenu();
			}
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<nav className='navbar'>
			<div
				className={open ? 'navbar__logo active' : 'navbar__logo'}
				onClick={closeMobileMenu}
			>
				<Link href='/'>
					<a>logo</a>
				</Link>
				{/* <h1>Logo</h1> */}
			</div>

			<ul className={open ? 'navbar__list active' : 'navbar__list'}>
				<li onClick={closeMobileMenu}>
					{open ? <SiHomeassistant /> : ''}
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li onClick={closeMobileMenu}>
					{open ? <SiCapacitor /> : ''}
					<Link href='/brand'>
						<a>Brand</a>
					</Link>
				</li>
				<li onClick={closeMobileMenu}>
					{open ? <SiHarbor /> : ''}
					<Link href='/design'>
						<a>Design</a>
					</Link>
				</li>
				<li onClick={closeMobileMenu}>
					{open ? <SiOpenid /> : ''}
					<Link href='/development'>
						<a>Development</a>
					</Link>
				</li>
			</ul>

			<div
				className={open ? 'navbar__burger active' : 'navbar__burger'}
				onClick={handleClick}
			>
				<FaBars />
			</div>
		</nav>
	);
};

export default Navigation;
