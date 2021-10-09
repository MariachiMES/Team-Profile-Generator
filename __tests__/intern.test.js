const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Intern();
      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
      const obj = new Intern();

      expect("id" in obj).toEqual(true);
    });

    it("should return an object containing a 'email' property", () => {
      const obj = new Intern();

      expect("email" in obj).toEqual(true);
    });
  });

  describe("getName", () => {
    it("should return string containing name", () => {
      const obj = new Intern();

      const result = obj.getName();

      expect(result).toEqual(this.name);
    });
  });

  describe("getId", () => {
    it("should return string containing entered ID number", () => {
      const obj = new Intern();

      const result = obj.getId();

      expect(result).toEqual(this.id);
    });
  });

  describe("getEmail", () => {
    it("should return string containing entered email address", () => {
      const obj = new Intern();

      const result = obj.getEmail();

      expect(result).toEqual(this.email);
    });
  });

  describe("getRole", () => {
    it("should return string containing the user's entered school", () => {
      const obj = new Intern();
      const result = obj.getSchool();

      expect(result).toEqual(this.school);
    });
  });
});
