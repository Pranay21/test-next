import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import RepoList from "../../../components/RepoList";

describe("Given RepoList", () => {
  function renderComponent(props = {}) {
    return shallow(<RepoList {...props} />);
  }
  it("should be a <ul/> with classname", () => {
    const component = renderComponent();
    expect(component.is("ul.repo-List")).to.be.true();
  });

  describe("when list is empty", () => {
    it("should render no repoItems", () => {
      const component = renderComponent();
      expect(component.find("li").length).to.equal(0);
    });
  });

  describe("when the list has repos", () => {
    it("should render repoItems", () => {
      const component = renderComponent({
        repos: [{ name: "test1" }, { name: "test2" }]
      });
      expect(component.find("li").length).to.equal(2);
    });
  });

  describe("when the list is not valid", () => {
    it("should display a message", () => {
      const component = renderComponent({ repos: "gvsjhv" });
      expect(component.find("p").text()).to.equal("Invalid User");
    });
  });
});
