"use client";

const codeLines = [
  "const portfolio = await getPortfolio({ locale: 'fr' });",
  "router.get('/api/projects', async (req, res) => res.json(projects));",
  "SELECT title, stack FROM projects WHERE featured = true;",
  "export async function POST(request: Request) {",
  "  const payload = await request.json();",
  "  return NextResponse.json({ ok: true, payload });",
  "}",
  "const direction = prefersReducedMotion ? 'none' : 'diagonal';",
  "interface ContactForm { name: string; email: string; message: string; }",
  "await analytics.track('portfolio_view', { section: 'hero' });",
  "const accent = ['#4fffb0', '#6bd9ff', '#e879f9'];",
  "app.use('/api/v1/contact', rateLimit({ windowMs: 60000, max: 80 }));",
];

const lanes = [
  { key: "lane-a", className: "code-lane code-lane--diagonal-up", style: { top: "8%" } },
  { key: "lane-b", className: "code-lane code-lane--diagonal-down", style: { top: "34%" } },
  { key: "lane-c", className: "code-lane code-lane--diagonal-up", style: { top: "60%" } },
  { key: "lane-d", className: "code-lane code-lane--diagonal-down", style: { top: "82%" } },
] as const;

const repeatedLines = [...codeLines, ...codeLines, ...codeLines];

export function CodeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,255,176,0.08),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(104,164,255,0.07),_transparent_46%)]" />

      {lanes.map((lane) => (
        <div key={lane.key} className={lane.className} style={lane.style}>
          {repeatedLines.map((line, index) => (
            <p key={`${lane.key}-${index}`} className="code-line">
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
