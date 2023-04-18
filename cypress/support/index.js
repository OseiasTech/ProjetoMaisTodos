import '@shelex/cypress-allure-plugin';
import 'mocha-allure-reporter';

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    allureWriter.writeScreenshot(screenshotFileName);
    const videoFileName = `${runnable.parent.title} -- ${test.title} (failed).mp4`;
    allureWriter.writeVideo(videoFileName);
  }
});

