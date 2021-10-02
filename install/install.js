const child_process = require('child_process');
const path = require('path');
const fs = require('fs');

function buildDisabled(dir) {
    try {
        const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, dir, 'package.json')));
        return packageJson.opencv4nodejs.disableAutoBuild
    }
    catch (e) {
    }
}

if (buildDisabled('../../')) {
    process.exit();
}

const cp = child_process.exec('npm run build', { maxBuffer: Infinity }, function (err, stdout, stderr) {
    const _err = err || stderr
    if (_err) console.error(_err)
})
cp.stdout.pipe(process.stdout)
cp.stderr.pipe(process.stderr)
