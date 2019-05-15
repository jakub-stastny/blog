export function assert(condition, message) {
  if (!condition) {
    throw message || "Assertion failed"
  }
}
// const ensure = (value) => value || throw("Undefined")
