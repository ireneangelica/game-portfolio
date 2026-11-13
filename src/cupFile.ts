// Names and file patterns match CafeFlow.swift in the BobaPlace repo.
export const TOPPINGS = [
  { id: 'boba', name: 'Boba' },
  { id: 'mango', name: 'Mango popping boba' },
  { id: 'coconut', name: 'Coconut jelly' },
] as const

export const TEAS = [
  { id: 'milk-tea', name: 'Milk tea' },
  { id: 'green', name: 'Green milk tea' },
  { id: 'oolong', name: 'Oolong milk tea' },
] as const

export type ToppingId = (typeof TOPPINGS)[number]['id']
export type TeaId = (typeof TEAS)[number]['id']

export const dropFile = (topping: ToppingId) => `cup-drop-${topping}`
export const pourFile = (tea: TeaId, topping: ToppingId) => `cup-tea-${tea}-${topping}`
export const SEAL_FILE = 'cup-seal'
