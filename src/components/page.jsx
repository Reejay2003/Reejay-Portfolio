import React, { Component } from "react";
import NewLine from "./newLine";
import Ls from "./ls";
import Cat from "./cat";

export class Page extends Component {
  state = {
    numberOfLine: 0,
    displayEverything: [
      { value: "", id: 0, displayInput: true, type: "line" }
    ]
  };

  information = {
    name: "Reejay Yadav",
    commands: [
      { id: 10, type: "ls" },
      { id: 11, type: "cat" },
      { id: 12, type: "clear" },
      { id: 13, type: "cmd" }
    ],
    subDir: [
      { id: 14, type: "About.txt" },
      { id: 15, type: "Education.txt" },
      { id: 16, type: "Experience.txt" },
      { id: 17, type: "Projects.txt" },
      { id: 18, type: "Skills.txt" },
      { id: 19, type: "Achievements.txt" },
      { id: 20, type: "POR.txt" },
      { id: 21, type: "Socials.txt" },
      { id: 22, type: "Contact_Me.txt" }
    ]
  };

  render() {
    return (
      <div className="container">
        <div className="terminal">
          <p className="prompt">
            Hey there! This is a portfolio website for {this.information.name}.
            <br />
            For basic commands type <strong>cmd</strong>
          </p>

          {this.state.displayEverything.map((l) => {
            if (l.type === "line") {
              return (
                <NewLine
                  key={l.id}
                  handelWhatever={this.handelWhatever}
                  line={l}
                  displayInput={l.displayInput}
                />
              );
            }

            if (l.type === "ls") {
              return (
                <Ls
                  key={l.id}
                  line={l}
                  subDir={this.information.subDir}
                />
              );
            }

            if (l.type === "cmd") {
              return (
                <Ls
                  key={l.id}
                  line={l}
                  subDir={this.information.commands}
                />
              );
            }

            if (l.type === "cat") {
              return <Cat key={l.id} line={l} />;
            }

            return null; // ✅ REQUIRED (prevents crashes)
          })}
        </div>
      </div>
    );
  }

  handelWhatever = (string_value, Tid) => {
    const res = string_value.trim().split(" ");

    if (res[0] === "clear") {
      this.setState({
        numberOfLine: 0,
        displayEverything: [
          { value: "", id: 0, displayInput: true, type: "line" }
        ]
      });
      return;
    }

    this.setState(
      {
        displayEverything: [
          ...this.state.displayEverything.filter((l) => l.id !== Tid),
          {
            ...this.state.displayEverything.find((l) => l.id === Tid),
            value: string_value,
            type: res[0]
          }
        ]
      },
      this.handleClick
    );
  };

  handleClick = () => {
    const num = this.state.displayEverything.length;
    this.setState({
      numberOfLine: this.state.numberOfLine + 1,
      displayEverything: [
        ...this.state.displayEverything,
        { value: "", id: num, displayInput: true, type: "line" }
      ]
    });
  };
}

export default Page;