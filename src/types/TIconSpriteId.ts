import { ECategory } from "./TExpense";

export enum EExpensesButtonSpriteId {
  delete = "delete",
  edit = "edit",
  logo = "logo",
}

export type TIconsSpriteId = ECategory | EExpensesButtonSpriteId;
