import { Controller, Get, Post } from '@nestjs/common';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';

@Controller('shelter')
export class ShelterController {

    @Get()
    getShelterDetails(): GetShelterDetailsUseCaseOutput {
        return new GetShelterDetailsUseCaseOutput({
            shelterName: 'Luz dos Bichos',
            shelterEmail: 'luzdb@gmail.com',
            shelterPhone: '19982149070',
            shelterWhatsApp: '19982149070',
            updatedAT: new Date(),
            createdAt: new Date()
        })
    }
}
