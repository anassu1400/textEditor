import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: "black",
    myStyles: []
  };

  changeStyle = style => {
    let stList = [...this.state.myStyles];

    if (stList.includes(styles[style])) {
      stList = stList.filter(styl => styl !== styles[style]);
    } else {
      stList.push(styles[style]);
    }
    this.setState({ myStyles: [...stList] });
  };

  changeColor = color => {
    this.setState({ color: color });
  };

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          onClick={() => this.changeStyle(style)}
          style={styles[style]}
          key={style}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.changeColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    const sty = [...this.state.myStyles];
    console.log({ sty });
    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>

        <textarea
          style={{
            color: this.state.color,
            ...sty.reduce((obj, style) => ({ ...obj, ...style }), {})
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
