export const compose = (...functions) => arg =>
	functions.reduceRight((prev, f) => f(prev), arg)
