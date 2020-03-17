process.env.UV_THREADPOOL_SIZE=5;
const crypto = require("crypto");
const start = Date.now();

let context = {i: 0}

function logHashTime(context) {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    context.i += 1;
    console.log(`Hash: ${Date.now() - start}, 'context.i' incremented to: ${context.i}`);
  });
}

for (i = 0; i < 100; i++) {
  logHashTime(context)
}
