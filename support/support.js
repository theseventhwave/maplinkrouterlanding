const statusParamKeys = new Set(["sent", "error"]);

const getStatusKey = () => {
  const params = new URLSearchParams(window.location.search);
  for (const key of statusParamKeys) {
    if (params.get(key) === "1") {
      return key;
    }
  }
  return null;
};

const showStatus = (key) => {
  document.querySelectorAll(".mlr-support-status").forEach((node) => {
    node.hidden = node.dataset.status !== key;
  });
};

const initSupportStatus = () => {
  const statusKey = getStatusKey();
  if (!statusKey) {
    return;
  }
  showStatus(statusKey);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSupportStatus, { once: true });
} else {
  initSupportStatus();
}
