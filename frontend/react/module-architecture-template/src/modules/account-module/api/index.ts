import { type TLoginData, type IPermissionItemResponse, type IUser } from "../model";
import { instanceApi } from "@/core/api";

export const fetchLogin = (data: TLoginData) =>
    instanceApi.post<IUser>("/auth/login", data).then(({ data }) => data);

export const fetchLogout = () =>
    instanceApi.post<void>("/auth/logout").then(({ data }) => data);

export const fetchGetAllPermission = () =>
    instanceApi.get<IPermissionItemResponse[]>("/permission").then(({ data }) => data);

export const fetchGetSelf = () =>
    instanceApi.get<IUser>("/user/self").then(({ data }) => data);
