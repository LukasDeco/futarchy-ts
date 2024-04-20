import { PublicKey } from "@solana/web3.js";

export * from "./conditionalVault";
export * from "./proposals";
export * from "./markets";
export * from "./autocrats";
export * from "./tokens";

export type MergeWithOptionalFields<T, U> = {
  [K in keyof (T | U)]: U[K];
} & {
  [K in keyof Omit<U, keyof T>]?: NonNullable<U[K]>;
} & {
  [K in keyof Omit<T, keyof U>]?: NonNullable<T[K]>;
};
export type AccountWithKey<T> = { publicKey: PublicKey; account: T };
