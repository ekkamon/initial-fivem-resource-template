export {};

declare global {
  interface Window {
    invokeNative: boolean;
    GetParentResourceName: () => string;
  }
}
