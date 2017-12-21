import test from 'ava';
import createDatatStore from './memory.quotes';

test('Can get all quotes', async t => {
    const service = createDatatStore();
    const quotes = await service.getAll();
    t.true(quotes.length > 0);
});
