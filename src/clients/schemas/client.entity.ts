import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;
    
    @Prop({ require: true })
    email: string;
    
    @Prop({ require: true, default: 'No Image' })
    image: string;

    @Prop({ minlength: 8 })
    phoneNumber: number;

    @Prop({ required: true })
    active: Boolean;
}

export const ClientSchema = SchemaFactory.createForClass(Client);