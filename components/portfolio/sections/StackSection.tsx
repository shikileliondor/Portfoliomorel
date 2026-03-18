import { motion } from "framer-motion";
import { RefObject, type PointerEvent as ReactPointerEvent } from "react";
import { StackCard } from "../StackCard";
import { clusterColors, clusterLabels, ease, nodeInfo, nodeLinks, stackItems } from "../data";
import type { GraphNode, NodeName } from "../types";

type Particle = { x: number; y: number; vx: number; vy: number; color: string };
type FlowMeta = { duration: number; begin: number };
type PulseMeta = Record<NodeName, { duration: number; delay: number }>;

type Props = {
  stackRef: RefObject<HTMLDivElement | null>;
  stackGraphRef: RefObject<HTMLDivElement | null>;
  stackInView: boolean;
  particles: Particle[];
  graphNodes: Record<NodeName, GraphNode>;
  hoveredNode: NodeName | null;
  connectedNodes: Set<NodeName>;
  flowMeta: FlowMeta[];
  pulseMeta: PulseMeta;
  onNodeHover: (node: NodeName | null) => void;
  onNodePointerDown: (node: NodeName, event: ReactPointerEvent<HTMLButtonElement>) => void;
};

export function StackSection({
  stackRef,
  stackGraphRef,
  stackInView,
  particles,
  graphNodes,
  hoveredNode,
  connectedNodes,
  flowMeta,
  pulseMeta,
  onNodeHover,
  onNodePointerDown,
}: Props) {
  return (
    <section id="stack" ref={stackRef} className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        animate={stackInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="mb-10 font-mono text-sm uppercase tracking-[0.3em] text-white/45"
      >
        {"// Stack"}
      </motion.h2>

      <div className="mb-10 rounded-2xl border border-white/10 bg-[#0f1020]/70 p-4 md:p-6">
        <div ref={stackGraphRef} className="relative h-[440px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#090b14]">
          <svg className="absolute inset-0 h-full w-full">
            {particles.map((particle, i) => (
              <circle key={`particle-${i}`} cx={particle.x} cy={particle.y} r="1" fill={particle.color} opacity="0.2" />
            ))}

            {nodeLinks.map(([from, to], i) => {
              const startNode = graphNodes[from];
              const endNode = graphNodes[to];
              const pathId = `stack-link-${i}`;
              const isLinkedToHover = hoveredNode ? from === hoveredNode || to === hoveredNode : false;
              const speedFactor = isLinkedToHover ? 3 : 1;

              return (
                <g key={`${from}-${to}-${i}`}>
                  <path
                    id={pathId}
                    d={`M ${startNode.x}% ${startNode.y}% L ${endNode.x}% ${endNode.y}%`}
                    fill="none"
                    stroke={clusterColors[startNode.cluster]}
                    strokeWidth={from === "Laravel" || to === "Laravel" ? 2 : 1.5}
                    strokeOpacity={hoveredNode ? (isLinkedToHover ? 0.6 : 0.08) : 0.15}
                  />
                  <circle r={isLinkedToHover ? 5 : 3} fill={clusterColors[startNode.cluster]} opacity="0.8">
                    <animateMotion
                      dur={`${(flowMeta[i].duration / speedFactor).toFixed(2)}s`}
                      begin={`${flowMeta[i].begin}s`}
                      repeatCount="indefinite"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}
          </svg>

          {(Object.keys(graphNodes) as NodeName[]).map((node) => {
            const config = graphNodes[node];
            const isConnected = hoveredNode ? connectedNodes.has(node) : true;
            const isHovered = hoveredNode === node;
            return (
              <button
                type="button"
                key={node}
                onPointerDown={(event) => onNodePointerDown(node, event)}
                onMouseEnter={() => onNodeHover(node)}
                onMouseLeave={() => onNodeHover(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-[999px] border bg-[#09111a]/95 px-5 py-2.5 font-mono text-xs text-white transition duration-300"
                style={{
                  left: `${config.x}%`,
                  top: `${config.y}%`,
                  borderColor: clusterColors[config.cluster],
                  opacity: hoveredNode ? (isConnected ? 1 : 0.25) : 1,
                  transform: `translate(-50%, -50%) scale(${isHovered ? 1.15 : 1})`,
                  boxShadow: isHovered ? `0 0 22px ${clusterColors[config.cluster]}66` : "none",
                  animation: isHovered
                    ? "none"
                    : `nodePulse ${pulseMeta[node].duration.toFixed(2)}s ease-in-out ${pulseMeta[node].delay.toFixed(2)}s infinite`,
                }}
              >
                {node}
              </button>
            );
          })}

          {hoveredNode && (
            <div
              className="pointer-events-none absolute z-20 max-w-[260px] rounded-xl border border-white/20 bg-[#0b1020]/95 p-3"
              style={{
                left: `${Math.min(graphNodes[hoveredNode].x + 3, 74)}%`,
                top: `${Math.max(graphNodes[hoveredNode].y - 11, 8)}%`,
              }}
            >
              <p className="font-syne text-sm text-white">{hoveredNode}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">{nodeInfo[hoveredNode].type}</p>
              <p className="mt-1 font-mono text-[11px] text-white/75">XP: {nodeInfo[hoveredNode].years}</p>
              <p className="mt-2 font-mono text-[11px] leading-relaxed text-white/70">{nodeInfo[hoveredNode].opinion}</p>
            </div>
          )}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-4">
          {clusterLabels.map((cluster) => (
            <div key={cluster.key} className="flex items-center gap-1.5 font-mono text-[10px] text-white/70">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: clusterColors[cluster.key] }} />
              {cluster.label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stackItems.map((item, i) => (
          <StackCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
