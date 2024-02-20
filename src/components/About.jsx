import * as data from '../data/data.json';
export const About = () => {
	return (
		<div className="flex flex-col md:flex-row flex-grow w-full">
			<div className="flex flex-col w-[100%] md:w-[60%] place-items-center">
				<img
					src={data.my_image}
					alt="my_img"
					className="rounded-[50%] object-cover h-32 w-32"
				/>
				<div>
					{data.name} {data.last_name}
				</div>
			</div>

			<div className="p-5">
				<h1>Hello, Welcome to my website</h1>
				<br />
				<p>
					My name is Makara, I am a Software Developer. Feel free to explore the
					website
				</p>
			</div>
		</div>
	);
};
