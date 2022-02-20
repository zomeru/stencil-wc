/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ApolloButton {
        "appearance": string;
        "text": string;
    }
    interface ApolloModal {
        "appearance": string;
        "buttons": string;
        "closeIcon": string;
        "header": string;
        "isOpen": boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLApolloButtonElement extends Components.ApolloButton, HTMLStencilElement {
    }
    var HTMLApolloButtonElement: {
        prototype: HTMLApolloButtonElement;
        new (): HTMLApolloButtonElement;
    };
    interface HTMLApolloModalElement extends Components.ApolloModal, HTMLStencilElement {
    }
    var HTMLApolloModalElement: {
        prototype: HTMLApolloModalElement;
        new (): HTMLApolloModalElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "apollo-button": HTMLApolloButtonElement;
        "apollo-modal": HTMLApolloModalElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ApolloButton {
        "appearance"?: string;
        "text"?: string;
    }
    interface ApolloModal {
        "appearance"?: string;
        "buttons"?: string;
        "closeIcon"?: string;
        "header"?: string;
        "isOpen"?: boolean;
        "onAction"?: (event: CustomEvent<any>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "apollo-button": ApolloButton;
        "apollo-modal": ApolloModal;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "apollo-button": LocalJSX.ApolloButton & JSXBase.HTMLAttributes<HTMLApolloButtonElement>;
            "apollo-modal": LocalJSX.ApolloModal & JSXBase.HTMLAttributes<HTMLApolloModalElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
