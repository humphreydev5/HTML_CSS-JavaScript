/*
#include <stdio.h>

int main(void)
{
  int a = 15, b, c;
  b = a++ + a++;
  a = b++ + b++;
  printf("a=%d b=%d", a, b);
  return 0;
}
*/

#include <stdio.h>

int main(void)
{
  int a = 15, b;
  
  // Increment 'a' and 'b' separately before using their values
  int a1 = a++;
  int a2 = a++;
  int b1 = a++;
  int b2 = a++;

  a = a1 + a2;
  b = b1 + b2;
  
  printf("a=%d b=%d\n", a, b);
  return 0;
}

