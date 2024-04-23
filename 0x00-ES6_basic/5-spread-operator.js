export default function concatArrays(array1, array2, string) {
	const stringArray = string ? Array.from(string) : [];
	return [...array1, ...array2, ...string];
}
