/** See Problems.md. Implement using recursion. */
export function fib(n: number): number {
  if(n===1 || n===2){
    return 1
  }
  return fib(n-1) * fib(n-2)
}
