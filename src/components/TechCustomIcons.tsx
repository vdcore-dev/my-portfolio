import React, { useId } from "react";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Pure crisp white GitHub Octocat - 100% visible on dark backgrounds
 */
export const GitHubIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    fill="#FFFFFF"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
    />
  </svg>
);

/**
 * Bruno API Client: Golden retriever dog with dark cool sunglasses
 */
export const BrunoIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Dog Head (Vibrant Golden Amber) */}
    <ellipse cx="32" cy="34" rx="20" ry="18" fill="#F5A623" />
    {/* Left Ear */}
    <path
      d="M14 24C12 28 8 36 10 42C11 44 14 45 16 41C18 37 19 31 18 26Z"
      fill="#D97706"
    />
    {/* Right Ear */}
    <path
      d="M50 24C52 28 56 36 54 42C53 44 50 45 48 41C46 37 45 31 46 26Z"
      fill="#D97706"
    />
    {/* Snout / Muzzle */}
    <ellipse cx="32" cy="40" rx="10" ry="7" fill="#FDE68A" />
    <ellipse cx="32" cy="36.5" rx="3.5" ry="2.5" fill="#18181B" />
    {/* Sunglasses (Jet Black Frame) */}
    <path
      d="M17 28C17 25 21 24 29 24L35 24C43 24 47 25 47 28L45 34C44 36 41 37 36 37L35 37L33 34L31 34L29 37L28 37C23 37 20 36 19 34Z"
      fill="#111827"
    />
    <rect x="29.5" y="27" width="5" height="2.5" fill="#111827" />
    {/* Sunglasses Lenses Gloss Reflections */}
    <rect x="21" y="27" width="7" height="6" rx="2" fill="#27272A" />
    <path d="M22 28L26 32" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="36" y="27" width="7" height="6" rx="2" fill="#27272A" />
    <path d="M37 28L41 32" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Anthropic Claude Code: Official Anthropic Claude terracotta spark
 */
export const ClaudeIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    fill="#CC785C"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
  </svg>
);

/**
 * GitHub Copilot: Modern high-contrast aviator helmet with electric purple visor
 */
export const CopilotIcon: React.FC<IconProps> = ({ className, style }) => {
  const id = useId();
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`copilotGrad-${id}`} x1="18" y1="17" x2="46" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      {/* Outer Helmet in Crisp White */}
      <path
        d="M14 26C14 16.059 22.059 8 32 8C41.941 8 50 16.059 50 26V36C50 43.732 43.732 50 36 50H28C20.268 50 14 43.732 14 36V26Z"
        fill="#FFFFFF"
      />
      {/* Side Earcups */}
      <rect x="10" y="26" width="6" height="14" rx="3" fill="#8B5CF6" />
      <rect x="48" y="26" width="6" height="14" rx="3" fill="#8B5CF6" />
      {/* Visor (Neon Purple Glow) */}
      <path
        d="M18 24C18 20 22 17 32 17C42 17 46 20 46 24V30C46 34 42 36 32 36C22 36 18 34 18 30V24Z"
        fill={`url(#copilotGrad-${id})`}
      />
      {/* Visor Glint */}
      <path
        d="M22 21C24 19.5 28 19 33 19"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * LangChain: Bright emerald & cyan high-contrast nodes & link
 */
export const LangChainIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="8" y="24" width="18" height="16" rx="8" fill="#10B981" />
    <rect x="38" y="24" width="18" height="16" rx="8" fill="#06B6D4" />
    <rect x="22" y="28" width="20" height="8" rx="4" fill="#FFFFFF" />
    <circle cx="17" cy="32" r="4" fill="#FFFFFF" />
    <circle cx="47" cy="32" r="4" fill="#FFFFFF" />
    <path d="M12 16L22 24M52 16L42 24" stroke="#34D399" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/**
 * Hugging Face: True full-color smiling emoji face 🤗 with rosy cheeks and open hands
 */
export const HuggingFaceIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="24" fill="#FFD21E" />
    <path
      d="M21 27C23 23 27 23 29 27M35 27C37 23 41 23 43 27"
      stroke="#18181B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="19" cy="35" r="4" fill="#FB7185" opacity="0.8" />
    <circle cx="45" cy="35" r="4" fill="#FB7185" opacity="0.8" />
    <path
      d="M24 35C24 41 40 41 40 35"
      fill="#FFFFFF"
      stroke="#18181B"
      strokeWidth="2.5"
    />
    <ellipse cx="12" cy="42" rx="6" ry="8" transform="rotate(-30 12 42)" fill="#FFAE00" stroke="#FFFFFF" strokeWidth="1.5" />
    <ellipse cx="52" cy="42" rx="6" ry="8" transform="rotate(30 52 42)" fill="#FFAE00" stroke="#FFFFFF" strokeWidth="1.5" />
  </svg>
);

/**
 * Vector Search / RAG: 3D vector embedding space with glowing connected coordinates
 */
export const VectorSearchIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="32" y1="32" x2="32" y2="8" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="32" y1="32" x2="10" y2="46" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="32" y1="32" x2="54" y2="46" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="32" y1="32" x2="48" y2="16" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />
    <circle cx="32" cy="32" r="4" fill="#FFFFFF" />
    <circle cx="48" cy="16" r="5" fill="#38BDF8" />
    <circle cx="20" cy="20" r="4" fill="#C084FC" />
    <circle cx="44" cy="40" r="4.5" fill="#818CF8" />
    <circle cx="18" cy="41" r="4" fill="#F472B6" />
    <line x1="20" y1="20" x2="48" y2="16" stroke="#C084FC" strokeWidth="1.2" opacity="0.6" />
  </svg>
);

/**
 * Helm: Vibrant nautical ship wheel with high-contrast marine cyan & crisp white
 */
export const HelmIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(32,32)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="0"
          y1="-28"
          x2="0"
          y2="0"
          stroke="#38BDF8"
          strokeWidth="3.5"
          strokeLinecap="round"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle cx="0" cy="0" r="18" stroke="#0284C7" strokeWidth="4" />
      <circle cx="0" cy="0" r="18" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 8" />
      <circle cx="0" cy="0" r="9" fill="#0EA5E9" stroke="#FFFFFF" strokeWidth="2.5" />
      <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
    </g>
  </svg>
);

/**
 * MongoDB: Authentic dual-tone emerald & neon green leaf with white spine
 */
export const MongoDBIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 6C32 6 20 22 20 36C20 47 26 53 32 58C32 58 32 30 32 6Z"
      fill="#00ED64"
    />
    <path
      d="M32 6C32 6 44 22 44 36C44 47 38 53 32 58C32 58 32 30 32 6Z"
      fill="#13AA52"
    />
    <path
      d="M32 6V58"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Apache Kafka: High-contrast white nodes with Kafka red/orange connector ring
 */
export const KafkaIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="22" y1="20" x2="42" y2="20" stroke="#E05243" strokeWidth="3" />
    <line x1="22" y1="20" x2="32" y2="44" stroke="#E05243" strokeWidth="3" />
    <line x1="42" y1="20" x2="32" y2="44" stroke="#E05243" strokeWidth="3" />
    <circle cx="22" cy="20" r="8" fill="#FFFFFF" stroke="#E05243" strokeWidth="2.5" />
    <circle cx="22" cy="20" r="3" fill="#18181B" />
    <circle cx="42" cy="20" r="8" fill="#FFFFFF" stroke="#E05243" strokeWidth="2.5" />
    <circle cx="42" cy="20" r="3" fill="#18181B" />
    <circle cx="32" cy="44" r="8" fill="#FFFFFF" stroke="#E05243" strokeWidth="2.5" />
    <circle cx="32" cy="44" r="3" fill="#18181B" />
  </svg>
);

/**
 * RabbitMQ: Vibrant carrot orange origami rabbit with crisp white facet folds
 */
export const RabbitMQIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 10H28V24H38V34H48V46H28V54H16V38H8V24H18V10Z"
      fill="#FF6600"
    />
    <path
      d="M18 10L28 24M28 24L38 34M38 34L48 46M28 34H18M18 38L28 54"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="22" cy="28" r="2.5" fill="#FFFFFF" />
  </svg>
);

/**
 * Gradle: Official Gradle Elephant in vibrant Gradle Green with crisp white eye
 */
export const GradleIcon: React.FC<IconProps> = ({ className, style }) => {
  const id = useId();
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`gradleGrad-${id}`} x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#05A65A" />
        </linearGradient>
      </defs>
      {/* Official Gradle Elephant Body */}
      <path
        d="M103.93 17.205a20.294 20.294 0 00-11.092 5.268 1.98 1.98 0 00-.62 1.39 2.025 2.025 0 00.578 1.405l2.525 2.613a1.936 1.936 0 002.53.182 11.5 11.5 0 016.964-2.321 11.618 11.618 0 018.245 19.847c-16.11 16.112-37.616-29.024-86.423-5.803a6.637 6.637 0 00-2.956 9.291l8.365 14.476a6.637 6.637 0 008.973 2.467l.203-.114-.16.114 3.71-2.082a85.035 85.035 0 0011.676-8.724 2.055 2.055 0 012.675 0 1.892 1.892 0 01.73 1.478 1.951 1.951 0 01-.641 1.479 87.562 87.562 0 01-12.31 9.135h-.12l-3.712 2.071a10.347 10.347 0 01-5.142 1.338 10.672 10.672 0 01-9.209-5.273l-7.912-13.674C5.613 62.5-3.607 83.18 1.345 109.416a1.951 1.951 0 001.895 1.567h9.015a1.922 1.922 0 001.905-1.686 13.2 13.2 0 0126.193 0 1.936 1.936 0 001.916 1.686h8.786a1.922 1.922 0 001.905-1.686 13.214 13.214 0 0126.209 0 1.922 1.922 0 001.905 1.686h8.672a1.922 1.922 0 001.926-1.89c.207-12.223 3.503-26.267 12.904-33.303 32.562-24.359 24.007-45.24 16.469-52.823a20.294 20.294 0 00-17.115-5.762z"
        fill={`url(#gradleGrad-${id})`}
      />
      {/* Elephant Eye in Crisp White */}
      <circle cx="85.5" cy="54.5" r="4.5" fill="#FFFFFF" />
      <circle cx="86" cy="54" r="2" fill="#02303A" />
    </svg>
  );
};

/**
 * JSON Web Tokens (JWT): 3 iconic colored pills (Hot Magenta, Cyan, Purple)
 */
export const JWTIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="8" y="24" width="14" height="24" rx="7" fill="#FB015B" />
    <circle cx="15" cy="36" r="3.5" fill="#FFFFFF" />
    <rect x="25" y="16" width="14" height="32" rx="7" fill="#00B9F1" />
    <circle cx="32" cy="32" r="3.5" fill="#FFFFFF" />
    <rect x="42" y="24" width="14" height="24" rx="7" fill="#D63AFF" />
    <circle cx="49" cy="36" r="3.5" fill="#FFFFFF" />
  </svg>
);
