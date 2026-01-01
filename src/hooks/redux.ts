import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook,
} from "react-redux";
import type { OperationsDispatch, RootState } from "../store";

export const useOperationsSelector: TypedUseSelectorHook<RootState> =
    useSelector;

export const useOperationsDispatch = () => useDispatch<OperationsDispatch>();
