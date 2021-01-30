import {IUnit} from "../Unit/IUnit";
import {IFunc} from "../Func/IFunc";
import {ILink} from "../Func/ILink";

export interface INmSpace {
    id: string;
    title: string;
    description: string;
    units: IUnit[];
    functions: IFunc[];
    relations: ILink[];
}