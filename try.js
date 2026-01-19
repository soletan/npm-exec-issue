import {spawnSync} from "node:child_process";

const args = [
    "**\*.@(mjs^|js)"
];

const options = { shell: true, stdio: "inherit" };

console.log( "invoking via npm exec" );
spawnSync( "npm", [ "exec", "the-target", ...args ], options );

console.log( "\ninvoking via node directly" );
spawnSync( "node", [ "node_modules/lib/bin/target.js", ...args ], options );
