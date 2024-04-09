import { Inject, Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import UpdateShelterDetailUserCaseInput from "./dtos/update.shelter.details.usecase.input";
import UpdateShelterDetailUserCaseOutput from "./dtos/update.shelter.details.usecase.output";
import ShelterTokens from "../shelter.tokens";
import IShelterRepository from "../interfaces/shelter.repository.interface";

@Injectable()
export default class UpdateShelterDetailUsecase implements IUseCase<UpdateShelterDetailUserCaseInput, UpdateShelterDetailUserCaseOutput>
{
    constructor (
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRepository: IShelterRepository
    ) {}

    async run(input: UpdateShelterDetailUserCaseInput): Promise<UpdateShelterDetailUserCaseOutput>{
        
        await this.shelterRepository.update(input)

        const shelter = await this.shelterRepository.get()

        return new UpdateShelterDetailUserCaseOutput({
            name: shelter.name,
            phone: shelter.phone,
            whatsApp: shelter.whatsApp,
            email: shelter.email,
            updatedAt: shelter.updatedAt,
            createdAt: shelter.createdAt
        })
    }
}