// const codeLines = [
//   "const api = await fetch('/api/projects');",
//   "docker build -t portfolio-app .",
//   "git commit -m \"update portfolio\";",
//   "export async function GET(request) { }",
//   "const deploy = await pipeline.run('production');",
//   "type Stack = 'nextjs' | 'laravel' | 'flutter';",
// ];

// const lanes = [
//   { key: "skills-lane-a", className: "skills-code-lane skills-code-lane--up", style: { top: "14%" } },
//   { key: "skills-lane-b", className: "skills-code-lane skills-code-lane--down", style: { top: "40%" } },
//   { key: "skills-lane-c", className: "skills-code-lane skills-code-lane--up", style: { top: "70%" } },
// ] as const;

// const repeatedLines = [...codeLines, ...codeLines, ...codeLines];

// export function CodeBackground() {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
//       {lanes.map((lane) => (
//         <div key={lane.key} className={lane.className} style={lane.style}>
//           {repeatedLines.map((line, index) => (
//             <p key={`${lane.key}-${index}`} className="skills-code-line">
//               {line}
//             </p>
//           ))}
//         </div>
//       ))}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,110,255,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(54,246,255,0.08),transparent_42%)]" />
//     </div>
//   );
// }
