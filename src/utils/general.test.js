import { compose, encode, get, isPrimitive } from './general'

describe('compose', () => {
	it('should compose an arbitrary number of functions into one', () => {
		let exampleFunction
		const exampleNumbers = [10, 100, -100, 1e10, 28734623432]

		const double = n => n * 2
		const triple = n => n * 3
		const quadruple = n => n * 4
		const square = n => n * n
		const cube = n => n * n * n

		exampleFunction = compose(cube)

		exampleNumbers.forEach(number => {
			expect(exampleFunction(number)).toEqual(cube(number))
		})

		exampleFunction = compose(double, square)

		exampleNumbers.forEach(number => {
			expect(exampleFunction(number)).toEqual(double(square(number)))
		})

		exampleFunction = compose(double, square, cube, quadruple)

		exampleNumbers.forEach(number => {
			expect(exampleFunction(number)).toEqual(
				double(square(cube(quadruple(number))))
			)
		})

		exampleFunction = compose(double, triple, quadruple, square, cube)

		exampleNumbers.forEach(number => {
			expect(exampleFunction(number)).toEqual(
				double(triple(quadruple(square(cube(number)))))
			)
		})
	})
})

describe('encode', () => {
	describe('when an empty object is passed', () => {
		it('should return an empty string', () => {
			expect(encode({})).toBe('')
		})
	})

	describe('when an object containing primitive data types is passed', () => {
		it('should return an encoded string', () => {
			expect(
				encode({
					a: 'string',
					b: 123456789,
					c: true,
					d: null,
					e: undefined,
				})
			).toBe('a=string&b=123456789&c=true&d=null&e=undefined')
		})
	})

	describe('when an object containing complex data types is passed', () => {
		it('should throw an error', () => {
			expect(() =>
				encode({
					a: {},
				})
			).toThrowError()
			expect(() =>
				encode({
					a: [],
				})
			).toThrowError()
		})
	})
})

describe('get', () => {
	describe('when no arguments are passed', () => {
		it('should return undefined', () => {
			expect(get()).toBe(undefined)
		})
	})

	describe('when the source is an object', () => {
		const source = {
			a: {
				b: {
					c: {
						d: {
							e: 'f',
						},
					},
				},
			},
		}

		describe('when the requested path exists', () => {
			it('should return the value', () => {
				expect(get(source, 'a')).toBe(source.a)
				expect(get(source, 'a', 'b')).toBe(source.a.b)
				expect(get(source, 'a', 'b', 'c')).toBe(source.a.b.c)
				expect(get(source, 'a', 'b', 'c', 'd')).toBe(source.a.b.c.d)
				expect(get(source, 'a', 'b', 'c', 'd', 'e')).toBe(
					source.a.b.c.d.e
				)
			})
		})

		describe('when the requested path does not exist', () => {
			it('should return undefined', () => {
				expect(get(source, '#')).toBe(undefined)
				expect(get(source, 'a', '#')).toBe(undefined)
				expect(get(source, 'a', 'b', '#')).toBe(undefined)
				expect(get(source, 'b', 'c', 'd', 'e', 'f')).toBe(undefined)
			})
		})

		describe('when no path is specified', () => {
			it('should return undefined', () => {
				expect(get(source)).toBe(undefined)
			})
		})
	})

	describe('when the source is a nested array', () => {
		const source = [
			'level one',
			[
				'level two',
				[
					'level three',
					['level four a'],
					['level four b', ['level five']],
				],
			],
		]

		describe('when the requested path exists', () => {
			expect(get(source, 0)).toBe(source[0])
			expect(get(source, 1, 0)).toBe(source[1][0])
			expect(get(source, 1, 1, 0)).toBe(source[1][1][0])
			expect(get(source, 1, 1, 1, 0)).toBe(source[1][1][1][0])
			expect(get(source, 1, 1, 2, 0)).toBe(source[1][1][2][0])
			expect(get(source, 1, 1, 2, 1, 0)).toBe(source[1][1][2][1][0])
		})

		describe('when the requested path does not exist', () => {
			expect(get(source, 2)).toBe(undefined)
			expect(get(source, 5, 10)).toBe(undefined)
			expect(get(source, 1, 2, 3, 4)).toBe(undefined)
		})

		describe('when no path is specified', () => {
			it('should return undefined', () => {
				expect(get(source)).toBe(undefined)
			})
		})
	})

	describe('when the source is mixed', () => {
		const source = {
			a: [{ b: 1 }, { b: 2, c: [{ d: 'e' }] }],
		}

		describe('when the requested path exists', () => {
			expect(get(source, 'a')).toBe(source.a)
			expect(get(source, 'a', 0)).toBe(source.a[0])
			expect(get(source, 'a', 0, 'b')).toBe(source.a[0].b)
			expect(get(source, 'a', 1)).toBe(source.a[1])
			expect(get(source, 'a', 1, 'b')).toBe(source.a[1].b)
			expect(get(source, 'a', 1, 'c')).toBe(source.a[1].c)
			expect(get(source, 'a', 1, 'c', 0)).toBe(source.a[1].c[0])
			expect(get(source, 'a', 1, 'c', 0, 'd')).toBe(source.a[1].c[0].d)
		})

		describe('when the requested path does not exist', () => {
			expect(get(source, 2)).toBe(undefined)
			expect(get(source, 'a', 10)).toBe(undefined)
			expect(get(source, 1, 'a', 3, 'b')).toBe(undefined)
			expect(get(source, 'a', 1, 'c', 5)).toBe(undefined)
		})

		describe('when no path is specified', () => {
			it('should return undefined', () => {
				expect(get(source)).toBe(undefined)
			})
		})
	})
})

describe('isPrimitive', () => {
	describe('when the value is a primitive data type', () => {
		it('should return true', () => {
			expect(isPrimitive('string')).toBe(true)
			expect(isPrimitive(123456789)).toBe(true)
			expect(isPrimitive(true)).toBe(true)
			expect(isPrimitive(null)).toBe(true)
			expect(isPrimitive(undefined)).toBe(true)
		})
	})

	describe('when the value is not a primitive data type', () => {
		it('should return false', () => {
			expect(isPrimitive({})).toBe(false)
			expect(isPrimitive([])).toBe(false)
		})
	})
})
