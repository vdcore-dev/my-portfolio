export const ModernBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-zinc-950">
      {/* =========================================================
          1. DESKTOP BACKGROUND (Pure Editorial Ambient Mist - Linear / Stripe Style)
          ========================================================= */}
      <div className="hidden lg:block">
        {/* Desktop Atmospheric Celestial Mist (Hero - Soft feathered dispersion without circular hotspot) */}
        <div
          className="absolute top-0 inset-x-0 w-full h-[750px] pointer-events-none opacity-65"
          style={{
            background:
              "radial-gradient(ellipse 140% 85% at 50% -20%, rgba(56, 189, 248, 0.09) 0%, rgba(37, 99, 235, 0.05) 35%, rgba(99, 102, 241, 0.025) 60%, transparent 80%)",
          }}
        />

        {/* Desktop Soft Ambient Body Fog (Continuous diffused wash across Projects & Skills - Zero isolated blobs) */}
        <div
          className="absolute top-[25%] inset-x-0 w-full h-[1200px] pointer-events-none opacity-50 blur-[40px]"
          style={{
            background:
              "radial-gradient(ellipse 120% 60% at 50% 50%, rgba(37, 99, 235, 0.04) 0%, rgba(99, 102, 241, 0.025) 40%, transparent 75%)",
          }}
        />

        {/* Desktop Midnight Horizon Glow (Deep feathered dusk behind Contact & Footer) */}
        <div
          className="absolute bottom-0 inset-x-0 w-full h-[650px] pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 140% 75% at 50% 120%, rgba(79, 70, 229, 0.08) 0%, rgba(37, 99, 235, 0.03) 45%, transparent 80%)",
          }}
        />

        {/* Desktop Peripheral Cosmic Vignette */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 95% 90% at 50% 50%, transparent 60%, rgba(9, 9, 11, 0.65) 100%)",
          }}
        />
      </div>

      {/* =========================================================
          2. MOBILE BACKGROUND (Smooth Ambient Mist & Toolbar Blending)
          STRICTLY UNTOUCHED - EXACT 100% IDENTICAL CONFIGURATION
          ========================================================= */}
      <div className="block lg:hidden">
        {/* Mobile Atmospheric Celestial Mist (Hero - Soft feathered dispersion without circular hotspot) */}
        <div
          className="absolute top-0 inset-x-0 w-full h-[620px] pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 160% 85% at 50% -25%, rgba(56, 189, 248, 0.09) 0%, rgba(37, 99, 235, 0.05) 35%, rgba(99, 102, 241, 0.025) 60%, transparent 80%)",
          }}
        />

        {/* Mobile Soft Ambient Body Fog (Continuous diffused wash across Projects & Skills - Zero isolated blobs) */}
        <div
          className="absolute top-[25%] inset-x-0 w-full h-[1000px] pointer-events-none opacity-45 blur-[30px]"
          style={{
            background:
              "radial-gradient(ellipse 130% 60% at 50% 50%, rgba(37, 99, 235, 0.04) 0%, rgba(99, 102, 241, 0.025) 40%, transparent 75%)",
          }}
        />

        {/* Mobile Midnight Horizon Glow (Deep feathered dusk behind Contact & Footer) */}
        <div
          className="absolute bottom-0 inset-x-0 w-full h-[580px] pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 140% 75% at 50% 120%, rgba(79, 70, 229, 0.08) 0%, rgba(37, 99, 235, 0.03) 45%, transparent 80%)",
          }}
        />

        {/* Mobile Peripheral Cosmic Vignette */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 95% 90% at 50% 50%, transparent 60%, rgba(9, 9, 11, 0.65) 100%)",
          }}
        />
      </div>
    </div>
  );
};
