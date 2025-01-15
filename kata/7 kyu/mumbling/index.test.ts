import assert from 'assert';
import { describe, it } from 'node:test';
import accum from './index.ts';

describe('accum', () => {
  it('should mumble string', () => {
    assert.strictEqual(
      accum('ZpglnRxqenU'),
      'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
    );
    assert.strictEqual(
      accum('NyffsGeyylB'),
      'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
    );
    assert.strictEqual(
      accum('MjtkuBovqrU'),
      'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu',
    );
    assert.strictEqual(
      accum('EvidjUnokmM'),
      'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm',
    );
    assert.strictEqual(
      accum('HbideVbxncC'),
      'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc',
    );
  });
});
