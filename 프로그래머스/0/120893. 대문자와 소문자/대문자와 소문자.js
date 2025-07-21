function solution(my_string) {
  return my_string.replace(/[a-zA-Z]/g, ch =>
    ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
  );
}
