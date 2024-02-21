import styled from "styled-components";

export const VisuallyHiddenLegend = styled.legend`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

export const RadioSwitchLabel = styled.label`
  display: inline-block;
  line-height: 2;
  position: relative;
  z-index: 2;
  cursor: pointer;
  font-weight: 700;
  color: ${(props) => props.theme.palette.primary.denim};
  &:first-of-type {
    padding-right: 5em;
    &::before,
    &::after {
      content: "";
      height: 2em;
      overflow: hidden;
      pointer-events: none;
      position: absolute;
      vertical-align: middle;
    }
    &::before {
      background: #fff;
      border-radius: 100%;
      position: absolute;
      transition: right 0.2s ease-in-out;
      right: 2px;
      top: 2px;
      height: calc(2em - (2 * 2px));
      width: calc(2em - (2 * 2px));
      z-index: 2;
    }
    &::after {
      border-radius: 1em;
      background: ${(props) => props.theme.palette.primary.denim};
      margin: 0 1em;
      transition: background 0.2s ease-in-out;
      width: 4em;
    }
  }
  &:last-child {
    margin-left: -4.25em;
    padding-left: 5em;
  }
`;

export const RadioSwitch = styled.fieldset`
  border: none;
  margin: 0.5rem auto;
  padding: 0;
  white-space: nowrap;
  &:focus-within ${RadioSwitchLabel} {
    &:first-of-type {
      &::after {
        box-shadow: 0 0 0 2px #fff, 0 0 0 4px #b3b5c6;
      }
    }
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    margin-top: 5rem;
  }
`;

export const RadioSwitchInner = styled.div`
  display: inline-block;
  position: relative;
`;

export const Input = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  height: 100%;
  margin: 0;
  opacity: 0.00001;
  position: absolute;
  top: 0;
  width: 30%;
  z-index: 3;
  &:first-of-type {
    left: 0;
    &:checked + ${RadioSwitchLabel} {
      &:first-of-type {
        &::before {
          right: calc(2em + 2px);
        }
      }
    }
  }
  &:last-of-type {
    right: 0;
    &:checked + ${RadioSwitchLabel} {
      &:last-of-type {
        z-index: 1;
      }
    }
  }
  &:not(:checked) + ${RadioSwitchLabel} {
    color: ${(props) => props.theme.palette.primary.grey};
  }
`;
