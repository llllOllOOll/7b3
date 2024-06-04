import { Button } from './ui/button'

const Hero = () => {
	return (
		<div className="container relative flex items-center gap-16 overflow-hidden px-28 pt-36">
			<div>
				<h1 className="text-[85px] font-bold leading-tight text-veryDarkBlue">
					More than just <br /> shorter links!
				</h1>
				<p className="text-lg leading-normal text-gray">
					Build your brand’s recognition and get detailed <br /> insights on how
					your links are performing.
				</p>
				<Button className="mt-8 h-12  rounded-full px-10 text-xs font-medium text-white">
					Get Started
				</Button>
			</div>
			<div className="absolute  -right-16  bottom-0 ">
				<img className="h-96" src="./img/illustration-working.svg" alt="" />
			</div>
		</div>
	)
}

export { Hero }
