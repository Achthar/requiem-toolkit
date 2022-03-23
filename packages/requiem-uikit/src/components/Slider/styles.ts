import { InputHTMLAttributes } from "react";
import styled, { DefaultTheme } from "styled-components";
import Text from "../Text/Text";

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

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "pointer";
};

const getBaseThumbStyles = ({ disabled, theme }: StyledInputProps) => `
  -webkit-appearance: none;
  background-color: ${theme.colors.primaryBright};
  border: 0;
  cursor: ${getCursorStyle};
  width: 18px;
  border-radius: 50%;
  height: 18px;
  transition: 200ms transform;

`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnyButt = styled.div<DisabledProp>`
  height: 32px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  width: 15px;
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.cardBorder};
  height: 2px;
  position: absolute;
  top: 16.5px;
  width: 100%;
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 8px;
  position: absolute;
  top: 14px;
  border-radius: 16px 0 0 16px;
`;
