import { from } from 'rxjs';
import { exp } from './exp';
describe('multiplication unit tests',()=>{
  it('Should 2 ^ 0 = 1',()=>{
    let result = 0;
    result = exp(2,0);
    expect(result).toBe(1);
  });
  it('Should 2 ^ 1 = 2',()=>{
    let result = 0;
    result = exp(2,1);
    expect(result).toBe(2);
  });
  it('Should 2 ^ 16 = 65536',()=>{
    let result = 0;
    result = exp(2,16);
    expect(result).toBe(65536);
  });
  it('Should 2 ^ 5 = 32',()=>{
    let result = 0;
    result = exp(2,5);
    expect(result).toBe(32);
  });
})