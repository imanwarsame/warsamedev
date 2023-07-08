import Card from './Card/Card';
import { projects } from './ProjectData';

export default function Portfolio() {

	return(
		<div>
			{projects.map((item) => (
				<Card data={item} key={item.id} />
			))}
		</div>
	);
}