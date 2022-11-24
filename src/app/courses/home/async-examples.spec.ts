import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";

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
    
    it("Asynchronous text example - plain Promise", fakeAsync(() => {
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
        flushMicrotasks();
        console.log("Running test assertions");
        expect(test).toBeTruthy();
    }));

    fit("Asynchronous test example - Promises + setTimeout()", fakeAsync(() => {
        let counter = 0;
        Promise.resolve()
            .then(() => {
                counter += 10;
                setTimeout(() => {
                    counter += 1;                 
                }, 1000);
            });
        expect(counter).toBe(0);
        flushMicrotasks();
        expect(counter).toBe(10);
        tick(500);
        expect(counter).toBe(10);
        tick(500);
        expect(counter).toBe(11);
    }));
});