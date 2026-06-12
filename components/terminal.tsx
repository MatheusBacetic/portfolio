"use client";

import { FormEvent, useRef, useState } from "react";
import { profile, projects } from "@/app/data";

type Line = {
  command?: string;
  output: string;
};

const commands: Record<string, () => string> = {
  help: () => "Comandos disponíveis: projects, github, contact, clear",
  projects: () =>
    projects.map((project, index) => `${index + 1}. ${project.title} [${project.status}]`).join("\n"),
  github: () => `GitHub: ${profile.github}`,
  contact: () =>
    `Email: ${profile.email}\nLinkedIn: ${profile.linkedin}\nGitHub: ${profile.github}`,
};

export function Terminal() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { output: 'Evoluzione Security Shell v1.0. Digite "help" para começar.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  function runCommand(event: FormEvent) {
    event.preventDefault();
    const command = input.trim().toLowerCase();

    if (!command) return;
    if (command === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    const output = commands[command]
      ? commands[command]()
      : `command not found: ${command}. Digite "help".`;

    setLines((current) => [...current, { command, output }]);
    setInput("");
  }

  return (
    <div className="interactive-terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-bar">
        <div><i /><i /><i /></div>
        <span>visitor@sec-portfolio:~</span>
        <span>80×24</span>
      </div>
      <div className="terminal-output" aria-live="polite">
        {lines.map((line, index) => (
          <div className="terminal-entry" key={`${line.command}-${index}`}>
            {line.command && (
              <p>
                <span>visitor@portfolio</span>:~$ {line.command}
              </p>
            )}
            <pre>{line.output}</pre>
          </div>
        ))}
        <form onSubmit={runCommand}>
          <label htmlFor="terminal-input">
            <span>visitor@portfolio</span>:~$
          </label>
          <input
            ref={inputRef}
            id="terminal-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            autoComplete="off"
            spellCheck="false"
            aria-label="Comando do terminal"
          />
        </form>
      </div>
    </div>
  );
}
