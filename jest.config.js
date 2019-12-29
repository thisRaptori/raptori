module.exports = {
	transform: {
		'^.+\\.js$': `<rootDir>/jest-preprocess.js`,
	},
	testPathIgnorePatterns: ['node_modules', '.cache'],
}
