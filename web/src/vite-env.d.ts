/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

declare module "*.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

type TypeEmptyObject = Record<string, never>;

type IDataSource = {
    page: number;
    size: number;
    totalElements: number;
    content: any[];
};
