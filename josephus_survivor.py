def josephus_survivor(n,k):
    survivors = list(range(1,n+1))
    locator = 0
    count = 1
    while len(survivors) > 1:
        remaining = len(survivors) -1
        print(f'| Loop {count}')
        checker = locator+k-1
        print("checker = ", checker, " locator = ", locator)
        if (locator == remaining):
            print("first")
            locator=1
        elif (checker-1 == remaining):
            print("second")
            locator = 0
        elif locator > remaining:
            print("third")
            locator = checker - remaining+1
        else:
            print("fourth")
            locator = checker
        
        if locator < 0:
            locator = 0
        print(survivors, locator)
        print(f'    ')
        count +=1
        del survivors[locator]
    
    return survivors[0]

    

print(josephus_survivor(7, 3))
# print(josephus_survivor(11, 19))