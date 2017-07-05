import Add from '.';

describe("Add", () => {
	// 2+3 = 5
	it("Adds two numbers correctly", () => {
		expect(Add(2, 3)).toBe(5);
	});
	// 2+3 = 3+2
	it("Commutative property", () => {
		expect(Add(2, 3)).toBe(Add(3, 2));
	});
	// 1+(2+3) = (1+2)+3
	it("Distributive property", () => {
		expect(Add(1, Add(2, 3))).toBe(Add(Add(1, 2), 3));
	});
});

describe("Testing Matchers", () => {
	it("Exact equality", () => {
		expect(2 + 3).toBe(5);
	});
	it("Object equality", () => {
		const obj = { a: 1 };
		obj['b'] = 2;
		expect(obj).toEqual({ a: 1, b: 2 });
	});
	it("Testing the opposite of a matcher", () => {
		expect(2 + 3).not.toBe(0);
	});
});

describe("Add", () => {
	// 2+3 = 5
	it("Adds two numbers correctly", () => {
		expect(Add(2, 3)).toMatchSnapshot();
	});
});