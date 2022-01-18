export{}

test("Test Name", () =>{

    const numbers = [2, 5, 7, 43, 77, 100, 45, 77, 88, 84, 90]

    let numbersMoreThanHundred = numbers.filter((a) => a >= 100)

    expect(numbersMoreThanHundred.length).toBe(1)
    expect(numbersMoreThanHundred[0]).toBe(100)
})