/// <reference types="vite/client" />

declare type TixButtonProperty = "--bg" | "--glitch-text"

declare interface TixButtonFuc {
    setProperty: (key: TixButtonProperty, value: any) => void
}