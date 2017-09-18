
export class AsyncableClassBase {

    protected Delay = async (miliseconds: number): Promise<void> => {
        return new Promise<void>(resolve => {
            setTimeout(resolve, miliseconds);
        });
    }

    protected DoAndWait = async<T>(action: () => T, miliseconds: number): Promise<T> => {
        const result = await action();
        await this.Delay(miliseconds);
        return result;
    }

    protected WaitAndDo = async<T>(action: () => T, miliseconds: number): Promise<T> => {
        await this.Delay(miliseconds);
        const result = await action();
        return result;
    }

}
