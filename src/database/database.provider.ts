import { DynamicModule } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";


export const DatabaseProvider: DynamicModule = MongooseModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async (_configService: ConfigService) => {
        return {
            uri: _configService.get("MONGODBCONNECT"),
        };
    },
});