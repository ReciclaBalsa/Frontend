window.watsonAssistantChatOptions = {
  integrationID: "1f20d100-3762-4ed2-90cf-f107d88d4ee0",
  region: "us-south",
  serviceInstanceID: "3a5f4425-8316-4e7b-99b9-5f1f292b04d7",
  onLoad: async (instance) => {
    await instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
    (window.watsonAssistantChatOptions.clientVersion || "latest") +
    "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
