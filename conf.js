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

// // Browser = Edge. WORKING!
// exports.config = {
//     //directConnect: false,
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     specs: ['spec.js'],
//     capabilities: {
//         'browserName': 'MicrosoftEdge',
//         // javascriptEnabled=true,
//         'platform': 'windows'
//             // 'version': '11'
//     }
// }


// // Multiple browsers. FF NOT WORKING!
// exports.config = {
//     directConnect: false,
//     framework: 'jasmine',
//     specs: ['spec.js'],
//     seleniumAddress: 'http://localhost:4444/wd/hub',

//     multiCapabilities: [
//         { 'browserName': 'chrome' },
//         // { 'browserName': 'firefox', 'marionette': true },
//         { 'browserName': 'MicrosoftEdge', 'platform': 'windows' }
//     ]
// };