#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

int solution(int n, const char* control) {
    for (int i = 0; i < strlen(control); i++) {
        if (control[i] == 'w') n += 1;
        else if (control[i] == 's') n -= 1;
        else if (control[i] == 'd') n += 10;
        else if (control[i] == 'a') n -= 10;
    }
    return n;
}

