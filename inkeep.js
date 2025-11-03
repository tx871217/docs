// Load the Inkeep script
const script = document.createElement('script');
script.type = 'module';
script.src = 'https://cdn.jsdelivr.net/npm/@inkeep/cxkit-js@0.5/dist/embed.js';
script.defer = true;
document.head.appendChild(script);

// Initialize after script loads
script.onload = () => {
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
  
  Inkeep.ChatButton(config);
};