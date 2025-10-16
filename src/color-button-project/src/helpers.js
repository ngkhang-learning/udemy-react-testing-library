export function kebabCaseToTitleCase(colorName) {
	// Solution 1
	// const words = colorName.split(/-/);

	// return words
	// 	.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
	// 	.join(" ");

	// Solution 2
	const colorWithSpaces = colorName.replaceAll("-", " ");
	const colorWithCaps = colorWithSpaces.replace(/\b([a-z])/g, (match) =>
		match.toUpperCase()
	);

	return colorWithCaps;
}
