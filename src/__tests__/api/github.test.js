import { expect } from "code";
import sinon from "sinon";
import { fetchGhRepos } from "../../api/github";

describe("Given out GitHub Api", () => {
  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(window, "fetch");
  });
  afterEach(() => {
    sinon.restore();
  });

  describe("when fetchGhRepos() is called", () => {
    describe("Then the call is successful", () => {
      const mockValue = [{}];
      const json = sinon.stub().returns(mockValue);

      beforeEach(() => {
        fetchStub.resolves({ json });
      });

      it("should return the repos", () => {
        fetchGhRepos().then(repos => {
          expect(repos).to.equal(mockValue);
        });
      });
    });

    describe("then the call is unsuccessful", () => {
      beforeEach(() => {
        fetchStub.rejects({ message: "Sorry..." });
      });

      it("should throw the error", () => {
        fetchGhRepos()
          .then(() => {
            expect(true).to.be.false();
          })
          .catch(e => {
            expect(e.message).to.equal("Sorry...");
          });
      });
    });
  });
});
