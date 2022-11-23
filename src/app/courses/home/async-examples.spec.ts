import { fakeAsync, flush, tick } from "@angular/core/testing";

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

    it("Asynchronous test example - setTimeout()", fakeAsync(() => {
        let test = false;
        setTimeout(() => {});
        setTimeout(() => {
            console.log("Running assertions setTimeout()");
            test = true;
        }, 1000);
        // tick(100);
        flush();
        expect(test).toBeTruthy();
    }));
    
    fit("Asynchronous text example - plain Promise", () => {
        let test = false;
        console.log("Creating promise");

        Promise.resolve()
            .then(() => {
                console.log("Promise first then() evaluated successfully");
                Promise.resolve();
            })
            .then(() => {
                console.log("Promise second then() evaluated successfully");
                test = true;
            });
        console.log("Running test assertions");
        expect(test).toBeTruthy();
    });
});