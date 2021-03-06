/// <reference path="Component.d.ts" />

declare module "noflo/src/lib/IP" {

    import {Component} from "noflo/src/lib/Component"

    export class IP<_Data = any> {

        _isIP : true;
        scope : IP.Scope;
        owner : Component | null;
        clonable : boolean;
        index : number | null;
        
        type : IP.Type;
        data : _Data;
        datatype: IP.DataType
        schema: string | null;
        
        constructor(type : IP.Type, data : _Data, options : IP.ConstructorOptions );
        
        clone() : IP<_Data>;
        move(owner : Component) : void;
        drop() : void;
        
        static types : ['data', 'openBracket', 'closeBracket'];
        static isIP( obj : any ) : obj is IP;
    }

    namespace IP {

        type Type  = 'data' | 'openBracket' | 'closeBracket';

        type DataType 
            = 'all' 
            | 'array' 
            | 'bang' 
            | 'buffer' 
            | 'boolean' 
            | 'color' 
            | 'date' 
            | 'function' 
            | 'int' 
            | 'number' 
            | 'object'
            | 'stream'
            | 'string' 

        type Scope = string | null;

        type ConstructorOptions = {[key : string] : any};

    }

}