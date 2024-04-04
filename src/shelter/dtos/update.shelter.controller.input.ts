import { IsNotEmpty, IsString, Length } from "class-validator"

export default class UpdateShelterControllerInput {
    @IsNotEmpty
    @IsString
    name: string
    @IsNotEmpty
    @IsString
    @Length(10,11)
    whatsapp: string
    @IsNotEmpty
    @IsString
    phone: string
    @IsNotEmpty
    @IsString
    email: string
}