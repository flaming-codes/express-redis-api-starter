export function hasNoPipeError(result: [Error | null, any] | null) {
	return result && result[0] === null;
}
