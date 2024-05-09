import { exec, fetch, ignoreFail, io, writeToFile } from 'bunosh';

/**
 * 🎉 Hello world command
 */
export async function helloWorld() {
  // use say() to print to the console
  // say('Hello World!');

  // use exec`` to execute shell scripts:
  // await exec`git status`

  // use fetch() to make HTTP requests
  // await fetch('https://reqres.in/api/users')

  // add arguments and options to this function if needed
  // export async function helloWorld(userName, opts = { force: false })
  //
  // bunosh hello:world 'bob' --force

  // use ignoreFail(true) to prevent the command from stopping on error

  io.yell('Heloo Bunosh!');
  io.say('Edit me with bunosh edit');
}
