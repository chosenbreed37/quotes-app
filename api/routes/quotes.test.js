import test from 'ava';
import http from 'ava-http';
import app from '../server';

const base = 'http://localhost:3001';

test.before(t => {
    app.on('appStarted', () => {
        t.pass();
    });
});

test('can get all quotes...', async t => {
    const res = await http.get(base + '/quotes');
    t.true(res !== null);
});
