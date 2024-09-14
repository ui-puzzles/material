import { nanoid } from 'nanoid';

export const genUUID = (len = 10) => nanoid(len);

export function* infiniteSequence() {
  let i = 0;

  while (true) {
    yield i++;
  }
}

export function* yieldFetch(
  urls: string[],
): Generator<Promise<Response>, any[], Response> {
  // const results = [];

  // const urlLen = urls.length;
  // let i = 0;

  // while (urlLen > 0) {
  //   const res = yield fetch(urls[0]);
  //   i++;
  //   results.push(res);
  // }

  // return results;
  const result1 = yield fetch('/endpoint1');
  const result2 = yield fetch('/endpoint2');
  return [result1, result2];
}

export const runGenerator = (genFunction: GeneratorFunction) => {
  const generator = genFunction();

  function handle(result: any): any {
    if (result.done) {
      return Promise.resolve(result.value);
    }

    return Promise.resolve(result.value).then((res) => {
      return handle(generator.next(res));
    });
  }

  return handle(generator.next());
};

// runGenerator(yieldFetch).then(results => {
//   console.log(results);
// });
export type AvailableState = 'START' | 'PAUSE' | 'STOP';
export function* stateMachine(): Generator<void, void, AvailableState> {
  while (true) {
    const state = yield;

    switch (state) {
      case 'START':
        console.log('Starting');
        break;
      case 'PAUSE':
        console.log('Pausing');
        break;
      case 'STOP':
        console.log('Stopping');
        break;
    }
  }
}

const machine = stateMachine();

machine.next(); // initialize the generator
machine.next('START');
