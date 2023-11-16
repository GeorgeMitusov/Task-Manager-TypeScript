// export const ACTIONS = {
//   ADD_TODO: 'add-todo',
//   REMOVE_TODO: 'remove-todo',
//   COMPLETE_TODO: 'complete-todo',
// }

export type Actions = 
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: number }
  | { type: 'complete'; payload: number }