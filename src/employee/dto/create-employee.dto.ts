import { IsNotEmpty, IsInt } from "class-validator";

export class CreateEmployeeDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    gender: number

    @IsNotEmpty()
    address: String

    @IsNotEmpty()
    phone: String

    @IsNotEmpty()
    token: String
}
