export default class GetPetsUseCaseInput {
    type?: string;
    size?: string;
    gender?: string;
    page?: string;
    itensPerPage?: number;

    constructor(data: Partial<GetPetsUseCaseInput>) {
        Object.assign(this, data)
    }
}