export enum ACTIONS {
  ADD_TODO = 'add-todo',
  REMOVE_TODO = 'remove-todo',
  COMPLETE_TODO = 'complete-todo',
  EDIT_TODO = 'edit-todo',
}

export type Actions = 
  | { type: typeof ACTIONS.ADD_TODO; payload: string }
  | { type: typeof ACTIONS.COMPLETE_TODO; payload: number }
  | { type: typeof ACTIONS.REMOVE_TODO; payload: number }
  | { type: typeof ACTIONS.EDIT_TODO; payload: { value: string, id: number } }