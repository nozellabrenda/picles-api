export default interface IPetRepository {
    create(data: Partial<Pet>): Promise<Pet>
}