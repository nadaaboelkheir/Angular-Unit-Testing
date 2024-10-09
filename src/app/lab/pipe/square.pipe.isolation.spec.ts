import { SquarePipeForLab } from './square.pipe';

describe('SquarePipeForLab', () => {
  let squarePipe: SquarePipeForLab;

  beforeEach(() => {
    squarePipe = new SquarePipeForLab();
  });

  it('expect to return 16 when passing 4', () => {
    const result = squarePipe.transform(4);
    expect(result).toBe(16);
  });

  it("expect to return 'Not a number' when passing wrong parameter", () => {
    const result = squarePipe.transform('invalid');
    expect(result).toBe('Not a number');
  });
});
