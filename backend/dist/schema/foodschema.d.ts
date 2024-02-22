/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from "mongoose";
export declare class Foods extends Document {
    Locationid: string;
    Applicant: string;
    FacilityType: string;
    Cnn: string;
    LocationDescription: string;
    Address: string;
    Blocklot: string;
    Block: string;
    Lot: string;
    Permit: string;
    Status: string;
    FoodItems: string;
    X: string;
    Y: string;
    Latitude: string;
    Longitude: string;
    Schedule: string;
    Dayshours: string;
    NOISent: string;
    Approved: string;
    Received: string;
    PriorPermit: string;
    ExpirationDate: string;
    Location: string;
    Fire_Prevention_Districts: string;
    Police_Districts: string;
    Supervisor_Districts: string;
    Zip_Codes: string;
    Neighborhoods_old: string;
}
export declare const FoodsSchema: import("mongoose").Schema<Foods, import("mongoose").Model<Foods, any, any, any, Document<unknown, any, Foods> & Foods & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Foods, Document<unknown, {}, import("mongoose").FlatRecord<Foods>> & import("mongoose").FlatRecord<Foods> & {
    _id: import("mongoose").Types.ObjectId;
}>;
