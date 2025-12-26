import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  fullyParallel: true,
  webServer: {
    command: 'npm start',
    url: 'http://localhost:5000/',
    reuseExistingServer: true,    
  },
  use: {
    baseURL: 'http://localhost:5000/',
    headless: !!process.env.CI, // headless on CI, headed locally
  },
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'], },
  //     dependencies:[
  //       'auth-setup'
  //     ]
  //   },
  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //     dependencies:[
  //       'auth-setup'
  //     ]
  //   },
  //   {
  //     name: 'auth-setup',
  //     testMatch: 'tests/setup/Auth.setup.ts',
  //   }
  // ]

});
