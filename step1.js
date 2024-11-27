import { readFile } from 'fs';
import { exit, argv } from 'process';

function cat(path) {
  readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      exit(1);
    } else {
      console.log(data);
    }
  });
}

cat(argv[2]);
