"use client";

import { motion } from "framer-motion";

const codeLines = [
  "const user = await db.users.findUnique({ where: { id } });",
  "router.post('/api/login', authController.login);",
  "SELECT * FROM users WHERE id = 1;",
  "export async function GET(request: Request) {",
  "  const token = request.headers.get('authorization');",
  "  return NextResponse.json({ success: Boolean(token) });",
  "}",
  "await queue.add('sync-project-metrics', { projectId, status: 'active' });",
  "const cacheKey = `projects:${project.id}:stats`;",
  "UPDATE deployments SET status = 'done' WHERE environment = 'prod';",
  "interface ProjectPayload { id: string; stack: string[]; }",
  "app.use('/api/v1/projects', rateLimiter(120, '1m'));",
];

const marqueeRows = [0, 1, 2];

export function CodeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_58%)]" />

      {marqueeRows.map((row) => (
        <motion.div
          key={row}
          className="absolute left-0 right-0 flex flex-col gap-4 text-[10px] leading-5 text-white/15 md:text-xs"
          style={{ top: `${row * 33}%` }}
          animate={{ y: [0, -180] }}
          transition={{
            duration: 24 + row * 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {[...codeLines, ...codeLines].map((line, index) => (
            <p key={`${row}-${index}`} className="whitespace-nowrap px-8 font-mono tracking-[0.08em]">
              {line}
            </p>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
