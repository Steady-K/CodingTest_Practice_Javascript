function solution(numbers) {
  const digits = numbers.split('');
  const used = Array(digits.length).fill(false);
  const made = new Set();

  function dfs(path) {
    if (path.length > 0) made.add(Number(path.join('')));
    if (path.length === digits.length) return;

    for (let i = 0; i < digits.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(digits[i]);
      dfs(path);
      path.pop();
      used[i] = false;
    }
  }
  dfs([]);

  function isPrime(n) {
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    if (n % 3 === 0) return n === 3;
    for (let i = 5; i * i <= n; i += 6) {         
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }

  let count = 0;
  for (const v of made) if (isPrime(v)) count++;
  return count;
}
