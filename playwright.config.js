testDir: 'tests',
timeout: 30000,
use: {
    headless: true,
    browserName: 'chromium',
},
globalSetup: './global-setup.js',
globalTeardown: './global-teardown.js',