import { PriceAfterTaxPipe } from './price-after-tax.pipe';

describe('PriceAfterTaxPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceAfterTaxPipe();
    expect(pipe).toBeTruthy();
  });
});
