import { Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import UpdateShelterDetailUserCaseInput from "./dtos/update.shelter.details.usecase.input";
import UpdateShelterDetailUserCaseOutput from "./dtos/update.shelter.details.usecase.output";

@Injectable()
export default class UpdateShelterDetailUsecase implements IUseCase<UpdateShelterDetailUserCaseInput, UpdateShelterDetailUserCaseOutput>
{
    run(input: UpdateShelterDetailUserCaseInput): Promise<UpdateShelterDetailUserCaseOutput>{
        throw new Error("Method not implemented.");
    }
}