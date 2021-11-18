import {Injectable, OnApplicationBootstrap, OnModuleDestroy, OnModuleInit} from '@nestjs/common';

@Injectable()
export class LifehookService implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy{
    onApplicationBootstrap(): any {
        console.log("on App Boots")
    }

    onModuleDestroy(): any {
        console.log("on Module Destroy")
    }

    onModuleInit(): any {
        console.log("on Module Init")
    }

}
