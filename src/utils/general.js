export const compose = (...functions) => arg =>
	functions.reduceRight((prev, f) => f(prev), arg)

export const encode = data =>
	Object.entries(data)
		.map(([key, value]) => {
			if (!isPrimitive(value)) {
				throw new Error('can only encode primitive values')
			}
			return encodeURIComponent(key) + '=' + encodeURIComponent(value)
		})
		.join('&')

export const get = (source, next, ...paths) =>
	paths.length && source && source[next]
		? get(source[next], ...paths)
		: source && source[next]

export const isPrimitive = value => value !== Object(value)
