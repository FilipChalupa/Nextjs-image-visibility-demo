import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<div className="container">
			<Head>
				<title>Next image experiment</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<header className="header">
					<button onClick={() => setIsOpen(!isOpen)}>toggle menu</button>
					<nav className={`menu is-${isOpen ? 'open' : 'close'}`}>
						<div className="menu-title">This is menu</div>
						<div className="menu-images">
							<figure className="menu-image">
								<img
									src="https://placekitten.com/120/120"
									width={120}
									height={120}
									alt=""
								/>
								<figcaption>Standard img tag</figcaption>
							</figure>
							<figure className="menu-image">
								<Image
									src="https://placekitten.com/120/120"
									width={120}
									height={120}
									alt=""
								/>
								<figcaption>Next image</figcaption>
							</figure>
						</div>
					</nav>
				</header>
				<div className="dots">
					{[...Array(100)].map((_, i) => (
						<div className="dot" key={i} />
					))}
				</div>
			</main>

			<style global jsx>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}
				* {
					box-sizing: border-box;
				}
				body {
					max-width: 400px;
					margin: 40px auto;
					background-color: #333333;
				}
				.dots {
					display: flex;
					flex-wrap: wrap;
				}
				.dot {
					width: 40px;
					height: 40px;
					border: 1px solid gray;
					background-color: white;
					transition: background-color 0.2s;
				}
				.dot:hover {
					background-color: gray;
				}
				.header {
					position: relative;
				}
				.menu {
					position: absolute;
					top: 100%;
					left: 0;
					background-color: #ffc0cbee;
					padding: 20px;
					transition-property: opacity, visibility;
					transition-duration: 0.2s;
				}
				.menu.is-close {
					opacity: 0;
					visibility: hidden;
				}
				.menu-title {
					height: 40px;
					line-height: 40px;
					font-weight: bold;
				}
				.menu-images {
					display: flex;
					gap: 40px;
				}
				.menu-image {
					margin: 0;
					text-align: center;
				}
			`}</style>
		</div>
	)
}
