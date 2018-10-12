import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import App from "../../components/App";
import * as ghServices from "../../api/github";
import sinon from "sinon";

describe("App", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should exist", () => {
    expect(component.exists()).to.be.true();
  });

  it("should be a <main>", () => {
    expect(component.type()).to.equal("main");
  });

  // it("should be a text 'Hello World'", () => {
  //   expect(component.text()).to.equal("Hello World");
  // });

  it("should be a <SearchForm>", () => {
    expect(component.find("SearchForm").exists()).to.be.true();
  });

  it("should be a <RepoList>", () => {
    expect(component.find("SearchForm").exists()).to.be.true();
  });

  it("should have a default repos state of empty string", () => {
    expect(component.state().repos).to.equal([]);
  });

  describe("when the handlesubmit() is called", () => {
    let fetchGhReposStub;
    beforeEach(() => {
      fetchGhReposStub = sinon.stub(ghServices, "fetchGhRepos");
      fetchGhReposStub.resolves([{}]);
    });

    it("it should update the state", async () => {
      await component.instance().handleSubmit();
      expect(component.state().repos).to.equal([{}]);
    });
  });
});
