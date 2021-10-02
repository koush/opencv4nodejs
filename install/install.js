const child_process = require('child_process');

const cp = child_process.exec('npm run build', { maxBuffer: Infinity }, function (err, stdout, stderr) {
    const _err = err || stderr
    if (_err) console.error(_err)
})
cp.stdout.pipe(process.stdout)
cp.stderr.pipe(process.stderr)
