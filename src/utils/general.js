export const compose = (...functions) => arg =>
	functions.reduceRight((prev, f) => f(prev), arg)

export const get = (source, next, ...paths) =>
	paths.length && source[next]
		? get(source[next], ...paths)
		: source && source[next]
