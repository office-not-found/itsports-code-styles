import { QueryClientProvider } from "@tanstack/react-query";
import { type PropsWithChildren } from "react";
import { queryClient } from "@/core/config/query";

export const QueryProvider = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
