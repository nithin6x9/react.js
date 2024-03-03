import {createContext} from "react";
import { selector,atom } from 'recoil';

export const countAtom = atom({
    key: "countAtom",
    default:  0
});

export const evenSelctor = selector({
    key: "evenSelctor",
    get: ({get})=>{
        const count = get(countAtom);
        return count %2;
    }
})