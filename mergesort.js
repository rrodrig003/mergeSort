function split(arr) {
    let firstHalf, secondHalf;

    firstHalf = arr.slice(0, arr.length/2)
    
    secondHalf = arr.slice(arr.length/2)

    return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
    let resultArr = [];

    //sort arrays
    while (arr1.length && arr2.length) {
        if (arr1[0] > arr2[0]) {
            resultArr.push(arr2[0])
            arr2.shift();
        } else {
            resultArr.push(arr1[0])
            arr1.shift();
        }
    }

    //push any remaining elements into combined array
    if (arr1.length > 0) resultArr.push(...arr1)
    if (arr2.length > 0) resultArr.push(...arr2)

    return resultArr;
}

function mergeSort(list){

    //first base case to get n arrays per n elements
    if (list.length === 1) return list;

    //initial split
    let [a, b] = split(list);

    //recursively split until base case is reached 
    let list1 = mergeSort(a)
    let list2 = mergeSort(b)

    //once lists from recursions above are returned, merge    
    return merge(list1, list2);
}
