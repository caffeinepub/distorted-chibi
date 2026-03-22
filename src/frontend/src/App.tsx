import { useEffect, useRef } from "react";

/* ─── Donut Chart ─── */
interface DonutSegment {
  pct: number;
  color: string;
  label: string;
  key: string;
}

function DonutChart({ segments }: { segments: DonutSegment[] }) {
  const r = 70;
  const cx = 90;
  const cy = 90;
  const circumference = 2 * Math.PI * r;
  let cumulative = 0;

  const slices = segments.map((s) => {
    const offset = circumference - (cumulative / 100) * circumference;
    const dash = (s.pct / 100) * circumference;
    const slice = { ...s, offset, dash };
    cumulative += s.pct;
    return slice;
  });

  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      role="img"
      aria-label="Token distribution donut chart"
    >
      <title>Token Distribution</title>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#1a1a22"
        strokeWidth="22"
      />
      {slices.map((s) => (
        <circle
          key={s.key}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={s.color}
          strokeWidth="22"
          strokeDasharray={`${s.dash} ${circumference - s.dash}`}
          strokeDashoffset={s.offset}
          transform={`rotate(-90 ${cx} ${cy})`}
          style={{ filter: `drop-shadow(0 0 6px ${s.color})` }}
        />
      ))}
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fill="#fff"
        fontSize="11"
        fontFamily="Space Mono, monospace"
        fontWeight="700"
      >
        $DCHI
      </text>
      <text
        x={cx}
        y={cy + 12}
        textAnchor="middle"
        fill="#00E5FF"
        fontSize="9"
        fontFamily="Space Mono, monospace"
      >
        1B SUPPLY
      </text>
    </svg>
  );
}

/* ─── Nav ─── */
function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(11,11,15,0.97)",
        borderBottom: "1.5px solid #00E5FF",
        boxShadow: "0 0 20px rgba(0,229,255,0.3)",
      }}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <nav
          className="hidden md:flex gap-6 text-xs tracking-widest"
          style={{ fontFamily: "Space Mono, monospace" }}
        >
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="neon-green uppercase font-bold"
            data-ocid="nav.home.link"
          >
            HOME
          </button>
          <button
            type="button"
            onClick={() => scrollTo("tokenomics")}
            className="text-white hover:text-[#00E5FF] uppercase transition-colors"
            data-ocid="nav.tokenomics.link"
          >
            TOKENOMICS
          </button>
          <button
            type="button"
            onClick={() => scrollTo("roadmap")}
            className="text-white hover:text-[#00E5FF] uppercase transition-colors"
            data-ocid="nav.roadmap.link"
          >
            ROADMAP
          </button>
          <button
            type="button"
            onClick={() => scrollTo("howtobuy")}
            className="text-white hover:text-[#00E5FF] uppercase transition-colors"
            data-ocid="nav.howtobuy.link"
          >
            HOW TO BUY
          </button>
        </nav>
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <div
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "0.2em",
              color: "#00E5FF",
              textShadow: "0 0 10px #00E5FF",
            }}
          >
            DISTORTED
          </div>
          <div
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "0.2em",
              color: "#FF2DFF",
              textShadow: "0 0 10px #FF2DFF",
              marginTop: "-4px",
            }}
          >
            CHIBI
          </div>
        </div>
        <nav
          className="hidden md:flex gap-6 text-xs tracking-widest"
          style={{ fontFamily: "Space Mono, monospace" }}
        >
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#00E5FF] uppercase transition-colors"
            data-ocid="nav.telegram.link"
          >
            TELEGRAM
          </a>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#00E5FF] uppercase transition-colors"
            data-ocid="nav.discord.link"
          >
            DISCORD
          </a>
        </nav>
        <div className="md:hidden text-[#00E5FF] text-xl">☰</div>
      </div>
    </header>
  );
}

/* ─── Marquee ─── */
const MARQUEE_ITEMS = Array.from({ length: 16 }, (_, i) => `item-${i}`);

function MarqueeBand() {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "#0d0d14",
        borderBottom: "1px solid #FF2DFF",
        borderTop: "1px solid #FF2DFF",
        boxShadow: "0 0 10px rgba(255,45,255,0.3)",
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
    >
      <div className="marquee-track">
        {MARQUEE_ITEMS.map((k) => (
          <span
            key={`a-${k}`}
            className="inline-flex items-center gap-4 px-4"
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
            }}
          >
            <span style={{ color: "#00E5FF" }}>$DCHI</span>
            <span style={{ color: "#FF2DFF" }}>✦</span>
            <span style={{ color: "#B6FF00" }}>DISTORTED CHIBI</span>
            <span style={{ color: "#FFE600" }}>◆</span>
          </span>
        ))}
        {MARQUEE_ITEMS.map((k) => (
          <span
            key={`b-${k}`}
            className="inline-flex items-center gap-4 px-4"
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
            }}
          >
            <span style={{ color: "#00E5FF" }}>$DCHI</span>
            <span style={{ color: "#FF2DFF" }}>✦</span>
            <span style={{ color: "#B6FF00" }}>DISTORTED CHIBI</span>
            <span style={{ color: "#FFE600" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Hero ─── */
function Hero() {
  function handleBuyEnter(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.transform = "scale(1.05)";
  }
  function handleBuyLeave(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.transform = "scale(1)";
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pixel-noise"
      style={{ background: "#0B0B0F", paddingTop: "80px" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center py-16">
        <div className="flex flex-col gap-6">
          <div>
            <div className="hero-title glitch-text" data-text="DISTORTED">
              DISTORTED
            </div>
            <div
              className="hero-title glitch-text"
              data-text="CHIBI"
              style={{ marginTop: "-0.1em" }}
            >
              CHIBI
            </div>
          </div>

          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.9rem",
              color: "#D6D6D6",
              letterSpacing: "0.15em",
              maxWidth: "440px",
            }}
          >
            THE MOST UNHINGED CHIBI ON THE CHAIN.
            <br />
            <span style={{ color: "#FF2DFF" }}>100% DEGEN.</span>{" "}
            <span style={{ color: "#00E5FF" }}>0% CHILL.</span>
          </p>

          <button
            type="button"
            data-ocid="hero.primary_button"
            onClick={() => window.open("https://raydium.io", "_blank")}
            style={{
              background: "#FFE600",
              color: "#000000",
              border: "3px solid #FF2DFF",
              boxShadow:
                "0 0 20px #FF2DFF, 0 0 40px rgba(255,230,0,0.3), inset 0 -3px 0 rgba(0,0,0,0.2)",
              fontFamily: "Anton, sans-serif",
              fontSize: "1.3rem",
              letterSpacing: "0.1em",
              padding: "14px 36px",
              cursor: "pointer",
              display: "inline-block",
              width: "fit-content",
              transition: "transform 0.1s",
            }}
            onMouseEnter={handleBuyEnter}
            onMouseLeave={handleBuyLeave}
          >
            BUY $DCHI NOW
          </button>

          <div
            style={{
              display: "flex",
              background: "#0d0d14",
              border: "1.5px solid #00E5FF",
              boxShadow: "0 0 10px rgba(0,229,255,0.3)",
            }}
            data-ocid="hero.panel"
          >
            {[
              { label: "PRICE", value: "$0.00042" },
              { label: "MKT CAP", value: "$4.2M" },
              { label: "HOLDERS", value: "6,900" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  borderRight: i < 2 ? "1px solid rgba(0,229,255,0.3)" : "none",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.6rem",
                    color: "#888",
                    letterSpacing: "0.15em",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.95rem",
                    color: "#B6FF00",
                    fontWeight: 700,
                    textShadow: "0 0 8px #B6FF00",
                  }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/assets/generated/chibi-mascot-transparent.dim_600x700.png"
            alt="Distorted Chibi Mascot"
            className="float-anim"
            style={{
              maxWidth: "480px",
              width: "100%",
              filter:
                "drop-shadow(0 0 30px rgba(0,229,255,0.5)) drop-shadow(0 0 60px rgba(255,45,255,0.3))",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Tokenomics ─── */
const TOKEN_DIST: DonutSegment[] = [
  { pct: 40, color: "#00E5FF", label: "LIQUIDITY", key: "liquidity" },
  { pct: 30, color: "#FF2DFF", label: "COMMUNITY", key: "community" },
  { pct: 15, color: "#B6FF00", label: "TEAM", key: "team" },
  { pct: 15, color: "#FFE600", label: "MARKETING", key: "marketing" },
];

function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="relative py-24 pixel-noise"
      style={{ background: "#0d0d14" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #00E5FF, transparent)",
              marginBottom: "24px",
            }}
          />
          <h2
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(2rem,5vw,4rem)",
              color: "#fff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            TOKENOMICS
          </h2>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              color: "#888",
              fontSize: "0.75rem",
              marginTop: "8px",
              letterSpacing: "0.1em",
            }}
          >
            TOTAL SUPPLY:{" "}
            <span style={{ color: "#B6FF00" }}>1,000,000,000 $DCHI</span>
          </p>
          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #FF2DFF, transparent)",
              marginTop: "24px",
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className="neon-border-cyan p-8 flex flex-col items-center gap-6"
            style={{ background: "rgba(11,11,15,0.9)" }}
            data-ocid="tokenomics.card"
          >
            <DonutChart segments={TOKEN_DIST} />
            <div className="w-full grid grid-cols-2 gap-3">
              {TOKEN_DIST.map((d) => (
                <div key={d.key} className="flex items-center gap-2">
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      background: d.color,
                      boxShadow: `0 0 6px ${d.color}`,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "0.7rem",
                      color: "#D6D6D6",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {d.label} <span style={{ color: d.color }}>{d.pct}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="neon-border-magenta p-8 flex flex-col gap-5 justify-center"
            style={{ background: "rgba(11,11,15,0.9)" }}
            data-ocid="tokenomics.panel"
          >
            {[
              {
                label: "TOKEN NAME",
                value: "DISTORTED CHIBI",
                color: "#00E5FF",
              },
              { label: "TICKER", value: "$DCHI", color: "#FF2DFF" },
              { label: "NETWORK", value: "SOLANA", color: "#B6FF00" },
              {
                label: "TOTAL SUPPLY",
                value: "1,000,000,000",
                color: "#FFE600",
              },
              { label: "TAX", value: "0 / 0", color: "#00E5FF" },
              { label: "MINTABLE", value: "NO", color: "#FF2A2A" },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  borderBottom: "1px solid rgba(255,45,255,0.15)",
                  paddingBottom: "12px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.6rem",
                    color: "#888",
                    letterSpacing: "0.15em",
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.95rem",
                    color: row.color,
                    fontWeight: 700,
                    textShadow: `0 0 8px ${row.color}`,
                  }}
                >
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── How To Buy ─── */
const HOW_STEPS = [
  {
    n: "01",
    title: "GET A WALLET",
    body: "Download Phantom or Solflare. You're gonna need a based wallet to hold your $DCHI.",
    color: "#00E5FF",
  },
  {
    n: "02",
    title: "BUY SOL",
    body: "Cop some SOL on Coinbase, Binance or any CEX and send it to your wallet address.",
    color: "#FF2DFF",
  },
  {
    n: "03",
    title: "SWAP ON RAYDIUM",
    body: "Head to Raydium, paste the $DCHI contract address and swap your SOL. Slippage 1-2%.",
    color: "#B6FF00",
  },
  {
    n: "04",
    title: "HOLD & VIBE",
    body: "You're in the distortion zone. Sit back, post memes, and watch the chibi ascend.",
    color: "#FFE600",
  },
];

function HowToBuy() {
  function handleCardEnter(e: React.MouseEvent<HTMLDivElement>) {
    e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
  }
  function handleCardLeave(e: React.MouseEvent<HTMLDivElement>) {
    e.currentTarget.style.transform = "";
  }

  return (
    <section id="howtobuy" className="py-24" style={{ background: "#0B0B0F" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #B6FF00, transparent)",
              marginBottom: "24px",
            }}
          />
          <h2
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(2rem,5vw,4rem)",
              color: "#fff",
              letterSpacing: "0.1em",
            }}
          >
            HOW TO BUY
          </h2>
          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #B6FF00, transparent)",
              marginTop: "24px",
            }}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_STEPS.map((step, i) => (
            <div
              key={step.n}
              className="relative p-6 flex flex-col gap-3"
              style={{
                background: "rgba(13,13,20,0.9)",
                border: `1.5px solid ${step.color}`,
                boxShadow: `0 0 12px ${step.color}55`,
                transition: "transform 0.2s",
              }}
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
              data-ocid={`howtobuy.item.${i + 1}`}
            >
              <div
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "3rem",
                  color: step.color,
                  textShadow: `0 0 12px ${step.color}`,
                  lineHeight: 1,
                }}
              >
                {step.n}
              </div>
              <div
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "1.1rem",
                  color: "#fff",
                  letterSpacing: "0.08em",
                }}
              >
                {step.title}
              </div>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.72rem",
                  color: "#D6D6D6",
                  lineHeight: 1.7,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Roadmap ─── */
const PHASES = [
  {
    phase: "PHASE 1",
    title: "SUMMON THE CHIBI",
    color: "#00E5FF",
    items: [
      "Token Launch on Solana",
      "Raydium Listing",
      "Community Building",
      "CoinGecko & CMC",
      "10,000 Holders",
    ],
    status: "COMPLETE",
  },
  {
    phase: "PHASE 2",
    title: "DISTORT REALITY",
    color: "#FF2DFF",
    items: [
      "NFT Collection Drop",
      "Strategic Partnerships",
      "Influencer Campaign",
      "50,000 Holders",
      "Merch Store Launch",
    ],
    status: "IN PROGRESS",
  },
  {
    phase: "PHASE 3",
    title: "ASCEND",
    color: "#B6FF00",
    items: [
      "CEX Listing",
      "Merch & IRL Events",
      "DAO Governance",
      "World Domination",
      "To The Moon 🚀",
    ],
    status: "SOON",
  },
];

function Roadmap() {
  return (
    <section
      id="roadmap"
      className="py-24 pixel-noise"
      style={{ background: "#0d0d14" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #FF2DFF, transparent)",
              marginBottom: "24px",
            }}
          />
          <h2
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(2rem,5vw,4rem)",
              color: "#fff",
              letterSpacing: "0.1em",
            }}
          >
            ROADMAP
          </h2>
          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #FF2DFF, transparent)",
              marginTop: "24px",
            }}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PHASES.map((p, i) => (
            <div
              key={p.phase}
              className="relative p-6 flex flex-col gap-4"
              style={{
                background: "rgba(11,11,15,0.95)",
                border: `1.5px solid ${p.color}`,
                boxShadow: `0 0 16px ${p.color}44`,
                transform: i === 1 ? "translateY(-12px)" : "",
              }}
              data-ocid={`roadmap.item.${i + 1}`}
            >
              <div
                style={{
                  position: "absolute",
                  top: -2,
                  left: -2,
                  width: 24,
                  height: 24,
                  border: `2px solid ${p.color}`,
                  background: p.color,
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -2,
                  right: -2,
                  width: 24,
                  height: 24,
                  border: `2px solid ${p.color}`,
                  background: p.color,
                  clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
                }}
              />
              <div
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.65rem",
                  color: p.color,
                  letterSpacing: "0.2em",
                }}
              >
                {p.phase}
              </div>
              <div
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "1.5rem",
                  color: "#fff",
                  letterSpacing: "0.08em",
                }}
              >
                {p.title}
              </div>
              <div
                style={{
                  display: "inline-block",
                  padding: "2px 10px",
                  border: `1px solid ${p.color}`,
                  color: p.color,
                  fontSize: "0.6rem",
                  fontFamily: "Space Mono, monospace",
                  letterSpacing: "0.15em",
                  boxShadow: `0 0 6px ${p.color}`,
                  width: "fit-content",
                }}
              >
                {p.status}
              </div>
              <ul className="flex flex-col gap-2 mt-2">
                {p.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "0.72rem",
                      color: "#D6D6D6",
                      display: "flex",
                      gap: "8px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: p.color, flexShrink: 0 }}>▸</span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Community ─── */
const POSTS = [
  {
    handle: "@cryptodegen_9000",
    body: "DISTORTED CHIBI IS THE ONLY COIN I NEED. CHART LOOKS LIKE MY MENTAL STATE AFTER BUYING. BULLISH 🚀🚀🚀",
    likes: "6,969",
    platform: "X",
    borderColor: "#00E5FF",
    tilt: "tilt-left",
  },
  {
    handle: "@chibi_maxi",
    body: "just converted my entire savings to $DCHI and told my therapist. she said 'thats a very distorted decision'. SHE GETS IT.",
    likes: "42,069",
    platform: "X",
    borderColor: "#FF2DFF",
    tilt: "",
  },
  {
    handle: "@neon_nomad_sol",
    body: "my wife left me. my boss fired me. the cat hates me. $DCHI is still up 400%. CHIBI WINS AGAIN 😭🌈",
    likes: "13,370",
    platform: "X",
    borderColor: "#B6FF00",
    tilt: "tilt-right",
  },
];

function Community() {
  return (
    <section id="community" className="py-24" style={{ background: "#0B0B0F" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #00E5FF, transparent)",
              marginBottom: "24px",
            }}
          />
          <h2
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(2rem,5vw,4rem)",
              color: "#fff",
              letterSpacing: "0.1em",
            }}
          >
            COMMUNITY HEAT
          </h2>
          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #00E5FF, transparent)",
              marginTop: "24px",
            }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {POSTS.map((post, i) => (
            <div
              key={post.handle}
              className={`p-6 flex flex-col gap-4 ${post.tilt}`}
              style={{
                background: "rgba(13,13,20,0.95)",
                border: `1.5px solid ${post.borderColor}`,
                boxShadow: `0 0 20px ${post.borderColor}55, 0 8px 32px rgba(0,0,0,0.5)`,
              }}
              data-ocid={`community.item.${i + 1}`}
            >
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${post.borderColor}, #0B0B0F)`,
                    border: `1.5px solid ${post.borderColor}`,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "0.75rem",
                      color: post.borderColor,
                      fontWeight: 700,
                    }}
                  >
                    {post.handle}
                  </div>
                  <div
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "0.6rem",
                      color: "#666",
                    }}
                  >
                    {post.platform} · DEGEN POST
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.72rem",
                  color: "#D6D6D6",
                  lineHeight: 1.8,
                }}
              >
                {post.body}
              </p>
              <div
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.65rem",
                  color: post.borderColor,
                }}
              >
                ♥ {post.likes} likes
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3"
            style={{
              padding: "14px 36px",
              border: "1.5px solid #00E5FF",
              boxShadow: "0 0 14px #00E5FF",
              color: "#00E5FF",
              fontFamily: "Anton, sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
              background: "rgba(0,229,255,0.05)",
              transition: "background 0.2s",
            }}
            data-ocid="community.telegram.link"
          >
            TG JOIN TELEGRAM
          </a>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3"
            style={{
              padding: "14px 36px",
              border: "1.5px solid #FF2DFF",
              boxShadow: "0 0 14px #FF2DFF",
              color: "#FF2DFF",
              fontFamily: "Anton, sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
              background: "rgba(255,45,255,0.05)",
              transition: "background 0.2s",
            }}
            data-ocid="community.discord.link"
          >
            DS JOIN DISCORD
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      className="checker-bg"
      style={{
        borderTop: "2px solid #00E5FF",
        boxShadow: "0 0 20px rgba(0,229,255,0.3)",
      }}
    >
      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col gap-3">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.75rem",
                color: "#00E5FF",
              }}
              data-ocid="footer.telegram.link"
            >
              <span
                style={{
                  border: "1px solid #00E5FF",
                  padding: "2px 8px",
                  boxShadow: "0 0 6px #00E5FF",
                }}
              >
                TG
              </span>
              TELEGRAM
            </a>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.75rem",
                color: "#FF2DFF",
              }}
              data-ocid="footer.discord.link"
            >
              <span
                style={{
                  border: "1px solid #FF2DFF",
                  padding: "2px 8px",
                  boxShadow: "0 0 6px #FF2DFF",
                }}
              >
                DS
              </span>
              DISCORD
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.75rem",
                color: "#B6FF00",
              }}
              data-ocid="footer.twitter.link"
            >
              <span
                style={{
                  border: "1px solid #B6FF00",
                  padding: "2px 8px",
                  boxShadow: "0 0 6px #B6FF00",
                }}
              >
                X
              </span>
              TWITTER
            </a>
          </div>

          <div className="text-center">
            <div
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "2.5rem",
                letterSpacing: "0.15em",
                color: "#00E5FF",
                textShadow: "0 0 16px #00E5FF",
                lineHeight: 1,
              }}
            >
              DISTORTED
            </div>
            <div
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "2.5rem",
                letterSpacing: "0.15em",
                color: "#FF2DFF",
                textShadow: "0 0 16px #FF2DFF",
                lineHeight: 1,
                marginTop: "-4px",
              }}
            >
              CHIBI
            </div>
            <div
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.65rem",
                color: "#B6FF00",
                marginTop: "6px",
                letterSpacing: "0.2em",
              }}
            >
              $DCHI · ON SOLANA
            </div>
          </div>

          <div className="flex flex-col gap-2 md:text-right">
            <div
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.7rem",
                color: "#888",
              }}
            >
              CONTRACT:
            </div>
            <div
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.65rem",
                color: "#00E5FF",
                wordBreak: "break-all",
              }}
            >
              TBA — LAUNCH SOON
            </div>
            <div
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.7rem",
                color: "#888",
                marginTop: "8px",
              }}
            >
              COMMUNITY:
            </div>
            <div
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.65rem",
                color: "#D6D6D6",
              }}
            >
              t.me/distortedchibi
            </div>
          </div>
        </div>

        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #FF2DFF, #00E5FF, transparent)",
            margin: "24px 0",
          }}
        />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <div
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.65rem",
              color: "#555",
              letterSpacing: "0.1em",
            }}
          >
            © {year} DISTORTED CHIBI. ALL RIGHTS RESERVED.
          </div>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.65rem",
              color: "#555",
              letterSpacing: "0.08em",
            }}
          >
            BUILT WITH ♥ USING CAFFEINE.AI
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export default function App() {
  const initialized = useRef(false);
  useEffect(() => {
    initialized.current = true;
  }, []);

  return (
    <div style={{ background: "#0B0B0F", minHeight: "100vh" }}>
      <Nav />
      <div style={{ paddingTop: "57px" }}>
        <MarqueeBand />
      </div>
      <main>
        <Hero />
        <Tokenomics />
        <HowToBuy />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
