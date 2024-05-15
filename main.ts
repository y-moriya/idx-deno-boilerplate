function add(a: number, b: number): number {
  return a + b;
}

Deno.test(async function addTest() {
  const { assertEquals } = await import(
    "https://deno.land/std@0.166.0/testing/asserts.ts"
  );
  assertEquals(add(2, 3), 5);
});

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
