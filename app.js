const state1 = { username: 'john', point: 100, loading: true };
let state2 = {};

for (let key in state1) {
  Object.assign(state2, state1, { point: 75, loading: false, success: true })
}

console.log('state1',state1,'state2', state2)
