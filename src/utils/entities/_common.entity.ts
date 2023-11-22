import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class CommonEntity{
    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}