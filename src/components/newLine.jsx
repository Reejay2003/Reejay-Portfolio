import React, { Component } from "react";

const COMMANDS = [
  "about",
  "education",
  "experience",
  "skills",
  "projects",
  "achievements",
  "por",
  "social",
  "contact"
];

export class NewLine extends Component {
  state = {
    value: "",
    matches: [],
    matchIndex: 0
  };

  handleKeyDown = (e) => {
    const { value, matches, matchIndex } = this.state;

    if (e.key === "Tab") {
      e.preventDefault();

      const parts = value.split(" ");
      if (parts[0] !== "cat") return;

      const fragment = parts[1] || "";

      const newMatches = COMMANDS.filter(cmd =>
        cmd.startsWith(fragment.toLowerCase())
      );

      if (newMatches.length === 0) return;

      const nextIndex =
        matches.length &&
        JSON.stringify(matches) === JSON.stringify(newMatches)
          ? (matchIndex + 1) % newMatches.length
          : 0;

      this.setState({
        value: `cat ${newMatches[nextIndex]}`,
        matches: newMatches,
        matchIndex: nextIndex
      });

      return;
    }

    this.setState({ matches: [], matchIndex: 0 });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    if (e.key === "Enter") {
      this.props.handelWhatever(this.state.value, this.props.line.id);
    }
  };

  render() {
    return (
    <div className="flex items-center terminal">
		<span className="prompt"></span>
		<input
			autoFocus
			value={this.state.value}
			onChange={this.handleChange}
			onKeyDown={(e) => {
			this.handleKeyDown(e);
			this.handleSubmit(e);
			}}
			spellCheck={false}
			className="terminal-input"
		/>
	</div>
    );
  }
}

export default NewLine;