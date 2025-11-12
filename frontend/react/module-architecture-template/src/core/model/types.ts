export interface IMeta {
    currentPage: number;
    totalPages: number;
}

// It transforms enum only to string, not working for numbers
export type GetTypeOfValuesFromEnum<T extends string> = `${T}`;

export type TErrorResponse = { error: string; message: string; statusCode: number };

export type SortDirection = "asc" | "desc" | undefined;

// This is the key of the sort params
export type URLSortParamsKey = "";

type SortParams = {
    [K in URLSortParamsKey]: SortDirection;
};

export type URLParams = {
    // This add all params from
} & SortParams;

export type PartialURLParams = Partial<URLParams>;

export type NonSortParams = Omit<URLParams, URLSortParamsKey>;

export type PartialNonSortParams = Partial<NonSortParams>;
