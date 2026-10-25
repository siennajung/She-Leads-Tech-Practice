/** See Problems.md. Implement using recursion. */
export function recursiveRange(n: number): number {
  // TODO: implement the base case and recursive step.
  if (n===0){
    return 0
  }
  return n*recursiveRange(n-1)
}
