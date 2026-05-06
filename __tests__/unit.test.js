// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test("(123) 456-7890 is a valid phone number", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
})

test("111 111-1111 is a valid phone number", () => {
  expect(isPhoneNumber("111 111-1111")).toBe(true);
})

test("1111111111 is not a valid phone number", () => {
  expect(isPhoneNumber("1111111111")).toBe(false);
})

test("(111) 111-111 is not a valid phone number", () => {
  expect(isPhoneNumber("(111) 111-111")).toBe(false);
})

test("aalakhani@ucsd.edu is a valid email", () => {
  expect(isEmail("aalakhani@ucsd.edu")).toBe(true);
})

test("asodifjoaisj@gmail.afj is a valid email", () => {
  expect(isEmail("asodifjoaisj@gmail.afj")).toBe(true);
})

test("abc is not a valid email", () => {
  expect(isEmail("abc")).toBe(false);
})

test("abc@123.com is not a valid email", () => {
  expect(isEmail("abc@123.com")).toBe(false);
})

test("abcdef is a valid password", () => {
  expect(isStrongPassword("abcdef")).toBe(true);
})

test("a1234 is a valid password", () => {
  expect(isStrongPassword("a1234")).toBe(true);
})

test("12345 is not a valid password", () => {
  expect(isStrongPassword("12345")).toBe(false);
})

test("abcdefghijklmnopqrstuvwxyz is not a valid password", () => {
  expect(isStrongPassword("abcdefghijklmnopqrstuvwxyz")).toBe(false);
})

test("11/11/2001 is a valid date", () => {
  expect(isDate("11/11/2001")).toBe(true);
})

test("1/1/1999 is a valid date", () => {
  expect(isDate("1/1/1999")).toBe(true);
})

test("123/123/1234 is not a valid date", () => {
  expect(isDate("123/123/1234")).toBe(false);
})

test("12/23/93 is not a valid date", () => {
  expect(isDate("12/23/93")).toBe(false);
})

test("#FFFFFF is a valid color", () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
})

test("#123 is a valid color", () => {
  expect(isHexColor("#123")).toBe(true);
})

test("#ZZZZZZ is not a valid color", () => {
  expect(isHexColor("#ZZZZZZ")).toBe(false);
})

test("#1111 is not a valid color", () => {
  expect(isHexColor("#1111")).toBe(false);
})
