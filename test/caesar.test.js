const expect = require("chai").expect
const {caesar} = require("../src/caesar.js")


describe("caesar", () => {
  it("should return the message encoded", () => {
    const actual = caesar("thinkful", 3)
    const expected =  'wklqnixo'
    expect(actual).to.eql(expected)
  })
  it("should return the message decoded", () => {
    const actual = caesar("wklqnixo", 3, false)
    const expected = 'thinkful'
    expect(actual).to.eql(expected)
  })
  it("should keep the spaces", () => {
    const actual = caesar("This is a secret message!", 8)
    const expected = 'bpqa qa i amkzmb umaaiom!'
    expect(actual).to.eql(expected)
  })
  it("should ignore capital letters", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
    const expected = 'this is a secret message!'
    expect(actual).to.eql(expected)
  })
  it("should return false if no shift information", () => {
    const actual = caesar("thinkful")
    const expected = false
    expect(actual).to.eql(expected)
  })
  it("should return false if shift is greater then 25", () => {
    const actual = caesar("thinkful", 99)
    const expected = false
    expect(actual).to.eql(expected)
  })
  it("should return false if shift is less then -25", () => {
    const actual = caesar("thinkful", -26)
    const expected = false
    expect(actual).to.eql(expected)
  })
})
