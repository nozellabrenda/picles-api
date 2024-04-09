import { Injectable } from "@nestjs/common";
import IPetRepository from "./interface/pet.repository.interface";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export default class PetRepository implements IPetRepository {
    constructor (
        @InjectModel(Pet.name)
        private readonly petModel: Model<Pet>,
    ) {}

    async create(data: Partial<Pet>): Promise<Pet> {
        return this.petModel.create ({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()

        })
    }
}