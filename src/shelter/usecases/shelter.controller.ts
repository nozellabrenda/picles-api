import { Controller, Get, Post } from '@nestjs/common';

@Controller('shelter')
export class ShelterController {

    @Post()
    getShelterDetails(): GetShelterDetailsUseCaseOutput {
        return new GetShelterDetailsUseCaseOutput()
    }
}
