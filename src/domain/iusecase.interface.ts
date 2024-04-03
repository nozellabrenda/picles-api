export interface IUseCase<Input, Output>{
    run(unput: Input): Promise<Output>
}