/** See Problems.md. Implement using recursion. */
export function power(base: number, exponent: number): number {
  if (base === 0) {
    return 1
  }
  if(exponent === 1){
    return base;
  }
  return base* power(base,(exponent-1))
}
console.log(power(2,4))