fdescribe("Async Testing examples", () => {
    it("Asynchronous test example with Jasmine done", (done: DoneFn) => {
        let test = false;
        setTimeout(() => {
            console.log("Running assertions");
            test = true;
            expect(test).toBeTruthy();
            done();
        }, 1000);
    });
});