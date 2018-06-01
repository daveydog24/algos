def selection_sort(arr):
    length = len(arr) - 1
    min_num = arr[length]
    max_num = arr[length]
    min_index = 0
    max_index = 0

    for x in range(0, length):
        for i in range (x, length + 1):
            if arr[i] <= min_num:
                min_index = i
                min_num = arr[i]
            # if arr[i] >= max_num:
            #     max_index = i
            #     max_num = arr[i]

        arr[x], arr[min_index] = min_num, arr[x]
        min_num = arr[x + 1]
        # if min_num != max_num:
        #     arr[length - x], arr[max_index] = max_num, arr[length - x]
        #     max_num = arr[length - x - 1]
    return arr
    
x = [9, 2, 15, 4, 0, 7, 9, 5, 1, 28, 2009, 2020, 5050, 69, 99, 88, 19, 67]
sort = selection_sort(x)
print sort 