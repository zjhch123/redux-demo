export default (msg1, msg2) => (store) => (next) => (action) => {
  console.log(msg1);
  next(action);
  console.log(msg2);
}