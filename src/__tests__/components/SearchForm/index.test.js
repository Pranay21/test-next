import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import SearchForm from "../../../components/SearchForm";
import sinon from "sinon";

describe("Given SearhForm", () => {
  let component;
  let handleSubmitSpy;
  beforeEach(() => {
    handleSubmitSpy = sinon.spy();
    component = shallow(<SearchForm handleSubmit={handleSubmitSpy} />);
  });

  it("should exist as 'form' with class 'search-form'", () => {
    expect(component.is("form.search-form")).to.be.true();
  });

  it("should contain an input", () => {
    expect(component.find("input.search-input")).to.have.length(1);
  });

  it("should contain a <button> and text <search>", () => {
    expect(component.find("button.search-button")).to.have.length(1);
    expect(component.find("button").text()).to.equal("Search");
  });

  it("should have a default state of searchText as empty string", () => {
    expect(component.state().searchText).to.equal("");
  });

  describe("when the input text changes", () => {
    let mockText;
    let input;
    beforeEach(() => {
      mockText = "hello";
      input = component.find("input");
      input.simulate("change", { target: { value: mockText } });
    });

    it("should update the component state", () => {
      expect(component.state().searchText).to.equal(mockText);
    });

    describe("Then the form is submitted", () => {
      beforeEach(() => {
        component.simulate("submit", { preventDefault: sinon.spy() });
      });

      it('should call "handleSubmit" prop', () => {
        sinon.assert.calledOnce(handleSubmitSpy);
        sinon.assert.calledWith(handleSubmitSpy, mockText);
      });
    });
  });
});
