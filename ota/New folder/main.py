# # # # # # # # # # # # # # # num1  = 12
# # # # # # # # # # # # # # # num2 = 54
# # # # # # # # # # # # # # # num3 = 34

# # # # # # # # # # # # # # # if(num1 > num2) and (num1 > num3):
# # # # # # # # # # # # # # #     print(num1, "is the largest numbrer")
# # # # # # # # # # # # # # # elif(num2 > num1) and (num2 > num3):
# # # # # # # # # # # # # # #     print(num2 ,"is the largest number")
# # # # # # # # # # # # # # # else:
# # # # # # # # # # # # # # #     print(num3," is the largest number")    

# # # # # # # # # # # # # # num = int(input(":enter a number here"))

# # # # # # # # # # # # # # if num == 1:
# # # # # # # # # # # # # #   print("it is not a prime number")
# # # # # # # # # # # # # # if num > 1:6

# # # # # # # # # # # # # #   for i in range(2,num):
# # # # # # # # # # # # # #     if num % i == 0:
# # # # # # # # # # # # # #       print("it is NOT a prime number")
# # # # # # # # # # # # # #     else:
# # # # # # # # # # # # # #       print("it is a prime number")

# # # # # # # # # # # # # lower = int(input("enter a number"))
# # # # # # # # # # # # # upper = int(input("enter a another number"))

# # # # # # # # # # # # # for num in range(lower,upper+1):
# # # # # # # # # # # # #     if num > 1:
# # # # # # # # # # # # #         for i in range(2,num):
# # # # # # # # # # # # #               if num % i == 0:
# # # # # # # # # # # # #                    break
# # # # # # # # # # # # #         else:
# # # # # # # # # # # # #               print(num)
            


# # # # # # # # # # # # # factorial
 
# # # # # # # # # # # # num = int(input("enter a number"))

# # # # # # # # # # # # fact = 1

# # # # # # # # # # # # if num < 0 :
# # # # # # # # # # # #     print("factorial of 0 does not exist")
# # # # # # # # # # # # if num == 0:
# # # # # # # # # # # #      print("factorial of 0 is",1)
# # # # # # # # # # # # if num > 0:
# # # # # # # # # # # #     for i in range(1,num+1):
# # # # # # # # # # # #         fact = fact*i
# # # # # # # # # # # # print("factorial of given number is", fact)

# # # # # # # # # # # def fact(a):
# # # # # # # # # # #     if a == 0:
# # # # # # # # # # #         return 1
# # # # # # # # # # #     else:
# # # # # # # # # # #         return ((a)*fact(a-1))
    
# # # # # # # # # # # num = int(input("enter a number here"))

# # # # # # # # # # # result = fact(num)


# # # # # # # # # # # num = int(input("enter the number"))

# # # # # # # # # # # for i in range(1,11):
# # # # # # # # # # #     print(num,"x", i ,"=",num*i)

# # # # # # # # # # def fib(n):

# # # # # # # # # #     a=0
# # # # # # # # # #     b=1

# # # # # # # # # #     print(a)
# # # # # # # # # #     print(b)

# # # # # # # # # #     for i  in range(2,n):

# # # # # # # # # #         c=a+b
# # # # # # # # # #         a=b
# # # # # # # # # #         b=c

# # # # # # # # # #         print(c)

# # # # # # # # # #         # # # # # #code of armstrong number
# # # # # # # # # # # # # # # celsius = int(input("enter temperature in celsius"))

# # # # # # # # # # # # # # # fahrenheit = (celsius *(9/5))+32

# # # # # # # # # # # # # # # print("the converted value is",fahrenheit,"Fahrenheit")

# # # # # # # # # # # # # # a=0
# # # # # # # # # # # # # # b=1

# # # # # # # # # # # # # # num = int(input("enter the number to perform the fibonaci numberts problem"))

# # # # # # # # # # # # # # if num==1:
# # # # # # # # # # # # # #     print(a)
# # # # # # # # # # # # # # else:
# # # # # # # # # # # # # #     print(a)
# # # # # # # # # # # # # #     print(b)
# # # # # # # # # # # # # #     for i in range(1,num+1):
# # # # # # # # # # # # # #         c = a+b
# # # # # # # # # # # # # #         a=b
# # # # # # # # # # # # # #         b=c
# # # # # # # # # # # # # #         print(c)

# # # # # # # # # # # # # char = "#"

# # # # # # # # # # # # # print("the ASCII vale of a", char,"is",ord(char))
# # # # # # # # # # # # import random

# # # # # # # # # # # # num = random.randint(0,10)

# # # # # # # # # # # # print(num)

# # # # # # # # # # # num = int(input("enter a number"))

# # # # # # # # # # # if num < 0:
# # # # # # # # # # #     print("please enter positive number")
# # # # # # # # # # # else:
# # # # # # # # # # #     sum = 0
# # # # # # # # # # #     while num>0:
# # # # # # # # # # #         sum +=num
# # # # # # # # # # #         num -=1

# # # # # # # # # # #         print(sum)

# # # # # # # # # import decimal
# # # # # # # # # int = 10
# # # # # # # # # print(decimal.Decimal(int))
# # # # # # # # # # print(type(decimal.Decimal(int)))

# # # # # # # # string ="devansh is frontend devloper"
# # # # # # # # print(string[::-1])
# # # # # # # vowels = ['a','e','i','o','u']
# # # # # # # word = "frontend devloper"

# # # # # # # count = 0
# # # # # # # for  character in word:
# # # # # # #     if character in vowels:
# # # # # # #         count+=1
# # # # # # #         print(count)

# # # # # # word = "programming"

# # # # # # character = "g"
# # # # # # count = 0
# # # # # # for i in word:
# # # # # #     if i == character:
# # # # # #         count+=1
# # # # # #         print(count)

# # # # # fib = [0,1]
# # # # # n= 5
# # # # # for i in range(n):
# # # # #     fib.append(fib[-1]+fib[-2])
# # # # #     print(','.join(str(e) for e in fib))

# # # # num = int(input("enter a number"))
# # # # for i in range(1,num+1):
# # # #     if num%i==0:
# # # #         print(i)
# # # # # num1 = 10
# # # # # num2 = 20

# # # # # print("value of num1 before swap",num1)
# # # # # print("value of num2 before swap",num2)

# # # # # temp=num1
# # # # # num1=num2
# # # # # num2=temp


# # # # # print("value of num2 after swap",num2)
# # # # # print("value of num1 after swap",num1)

# # # # # for i in range(1,101):
# # # # #     if i>1:
# # # # #      for j in range(2,i):
# # # # #         if (i %j) == 0:
# # # # #             break
# # # # #     else:
# # # # #         print(i)

# # # # nums  = range(1,500)
# # # # def is_prime(num):
# # # #     for x in range(2,num):
# # # #         if(num%x) == 0:
# # # #             return False
# # # #         return True
# # # # # # # # #code of armstrong number
# # # # # # # # celsius = int(input("enter temperature in celsius"))

# # # # # # # # fahrenheit = (celsius *(9/5))+32

# # # # # # # # print("the converted value is",fahrenheit,"Fahrenheit")

# # # # # # # a=0
# # # # # # # b=1

# # # # # # # num = int(input("enter the number to perform the fibonaci numberts problem"))

# # # # # # # if num==1:
# # # # # # #     print(a)
# # # # # # # else:
# # # # # # #     print(a)
# # # # # # #     print(b)
# # # # # # #     for i in range(1,num+1):
# # # # # # #         c = a+b
# # # # # # #         a=b
# # # # # # #         b=c
# # # # # # #         print(c)

# # # # # # char = "#"

# # # # # # print("the ASCII vale of a", char,"is",ord(char))
# # # # # import random

# # # # # num = random.randint(0,10)

# # # # # print(num)

# # # # num = int(input("enter a number"))

# # # # if num < 0:
# # # #     print("please enter positive number")
# # # # else:
# # # #     sum = 0
# # # #     while num>0:
# # # #         sum +=num
# # # #         num -=1

# # # #         print(sum)


# # # num1 = float(input("eter a number for this calculator"))
# # # num2 = float(input("enter a number for this calculator"))

# # # print("press 1 for addition\n press 2 for substraction\n prees 3 for multiplication\n press 4 for division")

# # # choice = int(input("enter tour choce from 1-4"))

# # # if choice == 1:
# # #     print(num1+num2)
# # #     #
# # # elif choice == 2:
# # #     print(num1-num2)

# # # elif choice == 3:
# # #     print(num1*num2)

# # # elif choice == 4:
# # #     print(num1/num2)
# # # else:
# # #     print("invalid numnber")

# # def fibo(n):
# #     if n<=1:
# #         return n
# #     else:
# #         return fibo(n-1)+fibo(n-2)
# # n = int(input("enter a numnber"))
# # if n <= 0:
# #         print("enter a positive number")
# # else:
# #     print("fibonaci sequence")
# #     for i in range(n):
# #         print(fibo(i))


# def fact(n):

#     if n == 1:

#         return  1
#     else:
#         return(n * fact(n-1))
    
# n = int(input("enter a number hare"))

# if n <= 0:
#     print("factorial of number less than 1 does noty exists")
# else:
#     print("factorial of a given numbers is", fact(n))  

 
