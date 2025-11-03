export const InkeepChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/@inkeep/cxkit-js@0.5/dist/embed.js';
    script.defer = true;
    
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
      window.Inkeep.ChatButton(config);
    };
    
    document.head.appendChild(script);
  }, []);
  
  return null;
};