export declare class AsyncableClassBase {
    protected Delay: (miliseconds: number) => Promise<void>;
    protected DoAndWait: <T>(action: () => T, miliseconds: number) => Promise<T>;
    protected WaitAndDo: <T>(action: () => T, miliseconds: number) => Promise<T>;
}
