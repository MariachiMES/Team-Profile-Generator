const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("id" in obj).toEqual(true);
    });

    it("should return an object containing a 'email' property when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("email" in obj).toEqual(true);
    });
  });

  describe("getName", () => {
    it("should return string containing name input", () => {
      const obj = new Manager();

      const result = obj.getName();

      expect(result).toEqual(this.name);
    });
  });

  describe("getId", () => {
    it("should return string containing entered ID number", () => {
      const obj = new Manager();

      const result = obj.getId();

      expect(result).toEqual(this.id);
    });
  });

  describe("getEmail", () => {
    it("should return string containing entered email address", () => {
      const obj = new Manager();

      const result = obj.getEmail();

      expect(result).toEqual(this.email);
    });
  });

  describe("getRole", () => {
    it("should return the manager's entered office number", () => {
      const obj = new Manager();
      const result = obj.getOffice();

      expect(result).toEqual(this.officeNumber);
    });
  });
});
