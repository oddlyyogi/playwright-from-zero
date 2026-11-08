// Plays the part of an AI tool: it starts the server and calls its tools.
import { spawn } from 'node:child_process';
import readline from 'node:readline';

const args = ['playwright', 'mcp', '--headless'];
const server = spawn('npx', args, { stdio: ['pipe', 'pipe', 'inherit'] });
const waiting = new Map();
readline.createInterface({ input: server.stdout }).on('line', (line) => {
  const message = JSON.parse(line);
  waiting.get(message.id)?.(message.result);
});

let id = 0;
function send(method, params) {
  id += 1;
  const body = { jsonrpc: '2.0', id, method, params };
  server.stdin.write(JSON.stringify(body) + '\n');
  return new Promise((resolve) => waiting.set(id, resolve));
}
const call = (name, args) => send('tools/call', { name, arguments: args });

await send('initialize', {
  protocolVersion: '2025-06-18',
  capabilities: {},
  clientInfo: { name: 'demo', version: '1.0' },
});

const { tools } = await send('tools/list', {});
const names = tools.slice(0, 3).map((tool) => tool.name).join(', ');
console.log(tools.length, 'tools, such as', names);

const url = 'https://practicesoftwaretesting.com/contact';
await call('browser_navigate', { url });
const snapshot = await call('browser_snapshot', {});
const lines = snapshot.content[0].text.split('\n');
console.log(lines.filter((l) => /textbox|button "Send"/.test(l)).join('\n'));

await call('browser_close', {});
server.kill();
