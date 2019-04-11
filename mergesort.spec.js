describe('Split Array function', function() {
    let testArr;
    beforeEach(() => {
        testArr = [2,5,9,1,7]
        spyOn(window, 'split').and.callThrough();
    })
    it('is able to split an array into two halves', function() {
        // split(testArr);
        expect(split(testArr)).toEqual([[2,5], [9,1,7]]);
    });
  });

describe('Merge function', function(){
    let testArr;
    beforeEach(() => {
        testArr = [2,5,9,1,7]
        spyOn(window, 'merge').and.callThrough();
    })

    it('is able to merge two sorted arrays into one sorted array', function(){
        // test the merging algorithm
        expect(merge(testArr)).toEqual([[1,2,5,7,9]]);
    });
