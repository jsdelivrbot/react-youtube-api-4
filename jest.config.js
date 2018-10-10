module.exports = {
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js|jsx|ts|tsx}'
    ],
    setupFiles: [
        '<rootDir>/testShim.js',
        '<rootDir>/testSetup.js'
    ],
    testEnvironment: 'jsdom'
};
