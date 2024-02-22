import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Foods extends Document {
    @Prop()
    Locationid: string;
    @Prop()
    Applicant: string;
    @Prop()
    FacilityType: string;
    @Prop()
    Cnn: string;
    @Prop()
    LocationDescription: string;
    @Prop()
    Address: string;
    @Prop()
    Blocklot: string;
    @Prop()
    Block: string;
    @Prop()
    Lot: string;
    @Prop()
    Permit: string;
    @Prop()
    Status: string;
    @Prop()
    FoodItems: string;
    @Prop()
    X: string;
    @Prop()
    Y: string;
    @Prop()
    Latitude: string;
    @Prop()
    Longitude: string;
    @Prop()
    Schedule: string;
    @Prop()
    Dayshours: string;
    @Prop()
    NOISent: string;
    @Prop()
    Approved: string;
    @Prop()
    Received: string;
    @Prop()
    PriorPermit: string;
    @Prop()
    ExpirationDate: string;
    @Prop()
    Location: string;
    @Prop()
    Fire_Prevention_Districts: string;
    @Prop()
    Police_Districts: string;
    @Prop()
    Supervisor_Districts: string;
    @Prop()
    Zip_Codes: string;
    @Prop()
    Neighborhoods_old: string;
}

export const FoodsSchema = SchemaFactory.createForClass(Foods);
