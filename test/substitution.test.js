const expect = require("chai").expect
const {substitution} = require("../src/substitution.js")

describe("substitution", () => {
  it("should return the message encoded", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
    const expected = 'jrufscpw'
    expect(actual).to.eql(expected)
  })
  it("should keep the spaces and ignore capital letters", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    const expected = 'elp xhm xf mbymwwmfj dne'
    expect(actual).to.eql(expected)
  })
  it("should return the message decoded", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    const expected = 'thinkful'
    expect(actual).to.eql(expected)
  })
  it("should return the message encoded if includes special characters", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
    const expected = "y&ii$r&"
    expect(actual).to.eql(expected)
  })
  it("should return the message decoded if includes special characters", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
    const expected = "message"
    expect(actual).to.eql(expected)
  })
  it("should return false if the alphabet passed is a string with less then 26 characters", () => {
    const actual = substitution("thinkful", "short")
    const expected = false
    expect(actual).to.eql(expected)
  })
  it("should return false if the alphabet characters are not unique", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
    const expected = false
    expect(actual).to.eql(expected)
  })
})