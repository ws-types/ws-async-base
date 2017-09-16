
export class AsyncableClassBase {

    protected Delay = async (milisecond: number) => {
        return new Promise<void>(() => setTimeout((owner: any): void => {
            owner();
        }, milisecond));
    }

}
