const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect("id" in obj).toEqual(true);
    });

    it("should return an object containing a 'email' property when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect("email" in obj).toEqual(true);
    });
  });

  describe("getName", () => {
    it("should return string containing name input", () => {
      const obj = new Engineer();

      const result = obj.getName();

      expect(result).toEqual(this.name);
    });
  });

  describe("getId", () => {
    it("should return string containing entered ID number", () => {
      const obj = new Engineer();

      const result = obj.getId();

      expect(result).toEqual(this.id);
    });
  });

  describe("getEmail", () => {
    it("should return string containing entered email address", () => {
      const obj = new Engineer();

      const result = obj.getEmail();

      expect(result).toEqual(this.email);
    });
  });

  describe("getRole", () => {
    it("should return string 'Engineer'", () => {
      const obj = new Engineer();
      const result = obj.getRole();

      expect(result).toEqual("Engineer");
    });
  });

  describe("getGitHub", () => {
    it("should return the user's entered 'GitHub' username", () => {
      const obj = new Engineer();
      const result = obj.getGitHub();

      expect(result).toEqual(this.gitHub);
    });
  });
});
