type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(actual: any): ToBeOrNotToBe {
  return {
    toBe(expected: any) {
      if (actual !== expected) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe(expected: any) {
      if (actual === expected) {
        throw new Error("Equal");
      }
      return true;
    },
  };
}