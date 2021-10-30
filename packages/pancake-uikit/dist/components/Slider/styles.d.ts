import { InputHTMLAttributes } from "react";
import { DefaultTheme } from "styled-components";
interface SliderLabelProps {
    progress: string;
}
interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
    disabled: boolean;
    theme: DefaultTheme;
}
interface DisabledProp {
    disabled?: boolean;
}
export declare const SliderLabelContainer: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const SliderLabel: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Text").TextProps & SliderLabelProps, never>;
export declare const BunnyButt: import("styled-components").StyledComponent<"div", DefaultTheme, DisabledProp, never>;
export declare const BunnySlider: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", DefaultTheme, StyledInputProps, never>;
export declare const BarBackground: import("styled-components").StyledComponent<"div", DefaultTheme, DisabledProp, never>;
export declare const BarProgress: import("styled-components").StyledComponent<"div", DefaultTheme, DisabledProp, never>;
export {};
