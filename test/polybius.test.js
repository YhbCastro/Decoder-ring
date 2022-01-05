const expect = require("chai").expect
const { polybius } = require("../src/polybius.js")

describe("polybius", () => {
  it("should return the message encoded", () => {
    const actual = polybius("thinkful")
    const expected = "4432423352125413"
    expect(actual).to.eql(expected)
  })
  it("should keep the spaces", () => {
    const actual = polybius("Hello world")
    const expected = '3251131343 2543241341'
    expect(actual).to.eql(expected)
  })
  it("should return the message decoded", () => {
    const actual = polybius("3251131343 2543241341", false)
    const expected = "hello world"
    expect(actual).to.eql(expected)
  })
  it("should both j and i when decoding messages", () => {
    const actual = polybius("4432423352125413", false)
    const expected = "thi/jnkful"
    expect(actual).to.eql(expected)
  })
  it("should return false if the number of characters excluding spaces is not even", () => {
    const actual = polybius("44324233521254134", false)
    const expected = false
    expect(actual).to.eql(expected)
  })
})