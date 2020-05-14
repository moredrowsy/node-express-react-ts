import shell from 'shelljs';

// copy client build to distribution
shell.mkdir('-p', 'dist/client/build');
shell.rm('-rf', 'dist/client/build');
shell.cp('-R', 'src/client/build', 'dist/client/build');

// copy public assets to distribution
shell.mkdir('-p', 'dist/public');
shell.rm('-rf', 'dist/public');
shell.cp('-R', 'src/public', 'dist/public');
