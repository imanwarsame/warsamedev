import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { getRandomJapaneseCharacter } from '../../../Utilities';

interface ScrambleTextProps {
	strings: string[];
	timeDelay: number;
}

export default function ScrambleText({ strings, timeDelay }: ScrambleTextProps) {
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [headlineText, setHeadlineText] = useState(strings[0]); // Initialise with the first string

	//Cycle through each string in strings with time delay. Note, doesn't work well in strict mode
	useEffect(() => {
		//Cycles through the length of the strings continuously (e.g 0,1,2,3,0,1,2,3,0,...)
		const intervalId = setInterval(() => {
			setCurrentTextIndex((prevIndex) => (prevIndex + 1) % strings.length);
		}, timeDelay);

		return () => clearInterval(intervalId);
	}, [strings, timeDelay]);

	useEffect(() => {
		let requestId: number | null = null;
		let iteration = 0; //Index of character in string

		const scrambleText = () => {
			const text = strings[currentTextIndex]; //Get current string in array

			//This will scramble first the whole word, then letter by letter it will reveal the string
			setHeadlineText((prevText) => {
				//If at the start of the iteration (i.e. new string) then need to use text rather than the
				//previous text. This is because previous text will be the final form of the previous string
				//which will have an incorrect length
				const textToScramble = iteration === 0 ? text : prevText;

				const scrambledText = textToScramble
					.split('')
					.map((_letter, index) => {
						if (index < iteration) {
							return text[index] || '';
						}
						// return String.fromCharCode(65 + Math.floor(Math.random() * 26));
						return getRandomJapaneseCharacter();
					}, '') // default value
					.join('');

				iteration += 1 / 5;

				if (iteration >= text.length) {
					setHeadlineText(text);
					if (requestId) {
						cancelAnimationFrame(requestId);
					}
				}

				return scrambledText;
			});

			requestId = requestAnimationFrame(scrambleText);
		};

		scrambleText();

		return () => {
			if (requestId) {
				cancelAnimationFrame(requestId);
			}
		};
	}, [strings, currentTextIndex]);

	return (
		<Typography sx={{ typography: { xs: 'subtitle2', md: 'h4' } }}>{headlineText}</Typography>
	);
}
