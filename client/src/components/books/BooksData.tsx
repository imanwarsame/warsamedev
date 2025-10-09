import AnOfficerAndASpy from '../../assets/Books/AnOfficerAndASpy.jpg';
import BigPandaAndTinyDragon from '../../assets/Books/BigPandaAndTinyDragon.jpg';
import Dictator from '../../assets/Books/Dictator.jpg';
import HowBigThingsGetDone from '../../assets/Books/HowBigThingsGetDone.jpg';
import HowToBuildACar from '../../assets/Books/HowToBuildACar.jpg';
import LivingThe7Habits from '../../assets/Books/LivingThe7Habits.jpg';
import MuhammadAliTheGreatesMyOwnStory from '../../assets/Books/MuhammadAliTheGreatesMyOwnStory.jpg';
import Never from '../../assets/Books/Never.jpg';
import SteveJobs from '../../assets/Books/SteveJobs.jpg';
import TheAlchemist from '../../assets/Books/TheAlchemist.jpg';
import TheFearIndex from '../../assets/Books/TheFearIndex.jpg';
import TheHuntForRedOctober from '../../assets/Books/TheHuntForRedOctober.jpg';
import TheMomTest from '../../assets/Books/TheMomTest.jpg';

export interface Book {
	title: string;
	author: string;
	coverImage: string;
}

export const books: Book[] = [
	{
		title: 'An Officer and a Spy',
		author: 'Robert Harris',
		coverImage: AnOfficerAndASpy,
	},
	{
		title: 'Big Panda and Tiny Dragon',
		author: 'James Norbury',
		coverImage: BigPandaAndTinyDragon,
	},
	{
		title: 'Dictator',
		author: 'Robert Harris',
		coverImage: Dictator,
	},
	{
		title: 'How Big Things Get Done',
		author: 'Bent Flyvbjerg & Dan Gardner',
		coverImage: HowBigThingsGetDone,
	},
	{
		title: 'How to Build a Car',
		author: 'Adrian Newey',
		coverImage: HowToBuildACar,
	},
	{
		title: 'Living the 7 Habits',
		author: 'Stephen R. Covey',
		coverImage: LivingThe7Habits,
	},
	{
		title: 'The Greatest: My Own Story',
		author: 'Muhammad Ali',
		coverImage: MuhammadAliTheGreatesMyOwnStory,
	},
	{
		title: 'Steve Jobs',
		author: 'Walter Isaacson',
		coverImage: SteveJobs,
	},
	{
		title: 'The Alchemist',
		author: 'Paulo Coelho',
		coverImage: TheAlchemist,
	},
	{
		title: 'The Mom Test',
		author: 'Rob Fitzpatrick',
		coverImage: TheMomTest,
	},
	{
		title: 'Never',
		author: 'Ken Follett',
		coverImage: Never,
	},
	{
		title: 'The Fear Index',
		author: 'Robert Harris',
		coverImage: TheFearIndex,
	},
	{
		title: 'The Hunt for Red October',
		author: 'Tom Clancy',
		coverImage: TheHuntForRedOctober,
	},
];
