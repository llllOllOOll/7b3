import { Button } from "~/components/ui/button"
import { Hero } from "~/components/Hero"

export default function Home() {
	return (
		<div>
			<header className="container flex items-center justify-between  px-28 py-8">
				<div className="flex items-center gap-4">
					<img src="/img/logo.svg" alt="" />
					<nav>
						<ul className="flex gap-4">
							<li>Features</li>
							<li>Princing</li>
							<li>Resources</li>
						</ul>
					</nav>
				</div>
				<div>
					<span className="mr-4">Login</span>
					<Button>Sign Up</Button>
				</div>
			</header>
			<Hero />
		</div>
	)
}
