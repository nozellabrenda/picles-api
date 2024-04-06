import { Body, Controller, Get, Inject, Post, Put } from '@nestjs/common';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';
import ShelterTokens from './shelter.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import UpdateShelterDetailUserCaseInput from './usecases/dtos/update.shelter.details.usecase.input';
import UpdateShelterDetailUserCaseOutput from './usecases/dtos/update.shelter.details.usecase.output';

@Controller('shelter')
export class ShelterController {

    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly getShelterDetailUsecase: IUseCase<null,GetShelterDetailsUseCaseOutput>;

    @Inject(ShelterTokens.updateShelterDetailUseCase)
    private readonly updateShelterDetailUseCase: IUseCase<UpdateShelterDetailUserCaseInput,UpdateShelterDetailUserCaseOutput>;

    @Get()
    async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput>{
        return await this.getShelterDetailUsecase.run(null);
    }

    @Put()
    async updateShelterDetail(@Body() input:UpdateShelterDetailUserCaseInput):
    Promise<UpdateShelterDetailUserCaseOutput>{
        const useCaseInput = new UpdateShelterDetailUserCaseInput ({ ...input});
        return await this.updateShelterDetailUseCase.run(useCaseInput);
    }
    
}
