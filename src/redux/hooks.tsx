import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, store } from "./store";
import { State } from "./types";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
