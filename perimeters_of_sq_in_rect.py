def perimeter(n):
    fib_list = [1, 1]
    for i in range( 1,n):
        fib_list.append(fib_list[i-1] + fib_list[i])
    return sum(fib_list) * 4


perimeter(7)