import Add from '.';

describe("Add", () => {
	// 2+3 = 5
	it("Adds to numbers correctly", () => {
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
	it("Two plus Three equals Five", () => {
		expect(2 + 3).toBe(5);
	});
	it("Object equality", () => {
		const obj = { a: 1 };
		obj['b'] = 2;
		expect(obj).toEqual({ a: 1, b: 2 });
	});
	it("Distributive property", () => {
		expect(Add(1, Add(2, 3))).toBe(Add(Add(1, 2), 3));
	});
});