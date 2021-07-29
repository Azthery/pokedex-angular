import { NoScriptPipe } from './no-script.pipe';

describe('StatsPokemonPipe', () => {
  it('create an instance', () => {
    const pipe = new NoScriptPipe();
    expect(pipe).toBeTruthy();
  });
});
