const child_process = require('child_process');

if (!process.env.SKIP_OPENCV4NODEJS_INSTALL) {
    child_process.spawn('node-pre-gyp', ['install', '--fallback-to-build'], {
        stdio: 'inherit',
    });
}
else {
    console.log('SKIP_OPENCV4NODEJS_INSTALL')
}