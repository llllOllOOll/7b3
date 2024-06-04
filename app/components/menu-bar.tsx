import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"
import { Search, AlignJustify } from "lucide-react"

const MenuBar = () => {
	return (
		<header className="px-4 py-4">
			<div className="flex items-center justify-between">
				<div className="flex gap-4 items-center">
					<AlignJustify className="sm:hidden text-gray-400" />
					<div className="font-extrabold leading-tight text-xl bg-zinc-700 text-white p-2 rounded-md">seven</div>
				</div>

				<nav className="hidden sm:block">
					<ul className="flex gap-4">
						<li>Come soon</li>
						<li>Come soon</li>
						<li>Come soon</li>
					</ul>
				</nav>
				<div className="flex gap-2 items-center">
					<Search className="text-gray-400" />
					<Button asChild variant="outline" size="lg">
						<Link to="#">
							Login
						</Link>
					</Button>
				</div>
			</div>
		</header>
	)
}

export { MenuBar }
