import {
  Component,
  h,
  getAssetPath,
  Prop,
  State,
  EventEmitter,
  Event,
} from "@stencil/core";

@Component({
  tag: "apollo-modal",
  styleUrl: "apollo-modal.css",
  shadow: true,
  assetsDirs: ["assets"],
})
export class ApolloModal {
  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop()
  isOpen: boolean;
  @Prop()
  header: string;
  @Prop() appearance: string;
  @Prop()
  closeIcon = "x.svg";
  @Prop() buttons: string;

  // State for buttons array
  @State() _buttons: Array<any>;

  // Watch for data
  arrayDataWatcher(buttons) {
    if (typeof buttons === "string") {
      this._buttons = JSON.parse(buttons);
    } else {
      this._buttons = buttons;
    }
  }

  // Events
  @Event() private action: EventEmitter;

  // Before the component mounts/loads, convert the buttons string to an array
  componentWillLoad() {
    this.arrayDataWatcher(this.buttons);
    console.log(this.buttons, "Original string");
    console.log(this._buttons, "New array");
  }

  // Functions
  private handleCancel = () => {
    this.isOpen = false;
  };

  private handleAction = () => {
    this.action.emit();
  };

  render() {
    return (
      <div class={`${this.isOpen && "is-open"} modal-wrapper`}>
        <div class="modal-overlay" onClick={this.handleCancel}>
          <div class="modal">
            <div class="header">
              <h6>{this.header}</h6>
              <div class="close" onClick={this.handleCancel}>
                <img
                  src={getAssetPath(`./assets/${this.closeIcon}`)}
                  alt="close icon"
                />
              </div>
            </div>
            <div class="body">
              <slot />
            </div>
            <div class="footer">
              {/* <apollo-button text="confirm" appearance={this.appearance} /> */}
              {/* <apollo-button text="cancel" onClick={this.handleCancel} /> */}
              {this._buttons.map((button, index) => (
                <apollo-button
                  onClick={index === 0 ? this.handleAction : this.handleCancel}
                  text={button.text}
                  appearance={index === 0 && this.appearance}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
