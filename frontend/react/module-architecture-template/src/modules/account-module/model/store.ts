import { create } from "zustand";
import type { IUser } from "./types";

interface AccountStoreState extends IUser {
    isAuth: boolean;
}

interface AccountStoreActions {
    setAccount: (user: Partial<AccountStoreState>) => void;
    resetAccount: () => void;
}

type AccountStore = AccountStoreState & AccountStoreActions;

const DEFAULT_VALUES_ACCOUNT_STATE: AccountStoreState = {
    id: 0,
    username: "",
    roleId: 0,
    role: { id: 0, name: "", createdAt: "" },
    isAuth: false
};

export const useAccountStore = create<AccountStore>()((set) => ({
    ...DEFAULT_VALUES_ACCOUNT_STATE,

    setAccount: (user) => set({ ...user }),
    resetAccount: () => set(DEFAULT_VALUES_ACCOUNT_STATE)
}));
