import type z from "zod";
import type { loginSchema } from "./validation";

export type TLoginData = z.infer<typeof loginSchema>;

export const EConfigModule = {
    hh: "hh"
} as const;

export type EConfigModuleType = keyof typeof EConfigModule;

export interface IAppConfig {
    config: EConfigModuleType[];
}

export interface IRole {
    id: number;
    name: string;
    createdAt: string;
}

export interface IUser {
    id: number;
    username: string;
    roleId: IRole["id"];
    role: IRole;
}

export interface IPermissionItemResponse {
    id: number;
    name: string;
    description: string;
    createdAt: string;
}
