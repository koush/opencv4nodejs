const child_process = require('child_process');
const os = require('os');

const cp = child_process.spawn(__dirname + '/node-gyp-' + os.platform() + '.sh', process.argv.slice(3), { maxBuffer: Infinity }, function(err, stdout, stderr) {
  const _err = err || stderr
  if (_err) console.error(_err)
})
cp.stdout.pipe(process.stdout)
cp.stderr.pipe(process.stderr)
