import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { test } from 'node:test'
import { TEAS, TOPPINGS, SEAL_FILE, dropFile, pourFile } from './cupFile.ts'

const has = (file: string) => existsSync(new URL(`../public/lottie/${file}.json`, import.meta.url))

test('every topping and tea choice has its animation file', () => {
  assert.ok(has(SEAL_FILE))
  for (const topping of TOPPINGS) {
    assert.ok(has(dropFile(topping.id)), dropFile(topping.id))
    for (const tea of TEAS) assert.ok(has(pourFile(tea.id, topping.id)), pourFile(tea.id, topping.id))
  }
})
