import { IdlAccounts } from "@coral-xyz/anchor";
import { Transaction, Signer, PublicKey } from "@solana/web3.js";
import { AccountWithKey } from "@/types";
import { ConditionalVault } from "@/idl/conditional_vault";

export type VaultAccount = IdlAccounts<ConditionalVault>["conditionalVault"];
export type VaultAccountWithKey = AccountWithKey<VaultAccount>;
export interface InitializedVault {
  tx?: Transaction;
  signers: Signer[];
  vault: PublicKey;
  finalizeMint: PublicKey;
  revertMint: PublicKey;
}
