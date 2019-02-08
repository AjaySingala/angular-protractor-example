// Default browser Chrome
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js']
  }

// // Browser = firefox. NOT WORKING!
//   exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     specs: ['spec.js'],
//     capabilities: {
//       browserName: 'firefox'
//     }
//   }

// // Browser = Edge. NOT WORKING!
//  exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     seleniumArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/selenium/MicrosoftWebDriver.exe'],
//     specs: ['spec.js'],
//     capabilities: {
//        'browserName': 'MicrosoftEdge',
//        // javascriptEnabled=true,
//        'platform': 'windows',
//         'version': '11'
//     }
// }


// // Multiple browsers. FIREFOX NOT WORKING!
//   exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     specs: ['spec.js'],
//     multiCapabilities: [{
//       browserName: 'firefox'
//     }, {
//       browserName: 'chrome'
//     }]
//   }
