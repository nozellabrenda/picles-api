import { IUseCase } from "src/domain/iusecase.interface";
import CreatePetUseCaseInput from "./create.pet.usecase.input";
import CreatePetUseCaseOutput from "./create.pet.usecase.output";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>{
    run(unput: CreatePetUseCaseInput): Promise<CreatePetUseCaseOutput> {
        throw new Error("Method not implemented.");
    }
}
