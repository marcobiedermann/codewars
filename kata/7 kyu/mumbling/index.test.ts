import { describe, expect, it } from 'vitest';
import accum from '.';

describe('accum', () => {
  it('should mumble string', () => {
    expect.assertions(5);

    expect(accum('ZpglnRxqenU')).toBe(
      'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
    );
    expect(accum('NyffsGeyylB')).toBe(
      'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
    );
    expect(accum('MjtkuBovqrU')).toBe(
      'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu',
    );
    expect(accum('EvidjUnokmM')).toBe(
      'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm',
    );
    expect(accum('HbideVbxncC')).toBe(
      'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc',
    );
  });
});
