<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@inkeep/cxkit-js@0.5/dist/embed.js"
  defer
></script>


const config = {
  baseSettings: {
    apiKey: "YOUR_API_KEY",
    organizationDisplayName: "Your Company",
    primaryBrandColor: "#4F46E5",
  },
  aiChatSettings: {
    aiAssistantName: "Keepie",
  },
  label: "Ask AI",
};

const chatButton = Inkeep.ChatButton(config);